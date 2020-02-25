import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';
import HomePage from './HomePage';

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log("books: ", books);
      this.setState(() => ({
        books
      }));
    });
  }

  onSelfChange = (event, book) => { 
    const { value } = event.target;
    const { books } = this.state;
    const index = books.indexOf(book);
    const modifiedBooks = [...books];
    modifiedBooks[index].shelf = value;
    this.setState({
      books: modifiedBooks
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <HomePage books={this.state.books} onChange={this.onSelfChange} />}
          />
          <Route exact path="/search" render={() => <SearchPage />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp
