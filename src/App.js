import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
//import ReactDOM from 'react-dom'
import SearchPage from './SearchPage';
import HomePage from './HomePage';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelf: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log( "books: ", books)
      this.setState(() => ({
        books
        
      }));
    });
  }


  render() {
    return (
     
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <HomePage books={this.state.books} />}
          />
          <Route exact path="/search" render={() => <SearchPage />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp
