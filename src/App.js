import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom'
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false 
  }


  render() {
    return (
      <Router>
        <div className="app">
          {this.state.showSearchPage ? (
            <div className="search-books">
              <div className="search-books-bar">
                <button
                  className="close-search"
                  onClick={() => this.setState({ showSearchPage: false })}
                >
                  Close
                </button>
                <div className="search-books-input-wrapper">
                  {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                  <input type="text" placeholder="Search by title or author" />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
          ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf name="Current reading" />
                  <Shelf name="Want to read" />
                  <Shelf name="Read" />
                </div>
              </div>
              <div className="open-search">
                <NavLink to="/search">Add a book</NavLink>
                <Route path="/search" component={SearchPage} />
                <button onClick={() => this.setState({ showSearchPage: true })}>
                 
                </button>
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default BooksApp
