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
    books: [],
    booksSearched: [],
    query: ""
  };


  updateQuery = (event) => { 
    const { value } = event.target;
    console.log('query:', value)
    BooksAPI.search(value).then(booksSearched => {
      console.log("booksSearched: ", booksSearched);
      booksSearched && booksSearched.length 
      ? this.setState({ booksSearched }) 
      : this.setState({ booksSearched: [] });
    }).catch(error => console.log(error));
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log("books: ", books);
      this.setState({books});
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
    BooksAPI.update(book, value)
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
          <Route exact path="/search" render={() => <SearchPage books={this.state.booksSearched} onChange={this.updateQuery} />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp
