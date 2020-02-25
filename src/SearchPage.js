import React from 'react';
import {Link} from "react-router-dom";
import Book from './Book';

class SearchPage extends React.Component {

  state = {
    query: ""
  };

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
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
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
