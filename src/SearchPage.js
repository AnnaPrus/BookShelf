import React from 'react';
import {Link} from "react-router-dom";
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {

  state = {
    query: ""
  };

  updateQuery = (event) => {
    const { value } = event.target;
    const booksSearched = BooksAPI.search(value)
    console.log('query:', value, booksSearched)
    


  }

  render() {
    const { query, books} = this.state
  
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link to='/'>
            <button className="close-search" onClick >Close</button>
        </Link>
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event)}
           
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          
        </div>
      </div>
    );
  }
}
export default SearchPage;
