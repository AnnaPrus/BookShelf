import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchPage extends React.Component {
  render() {
    const { onSearch, onChange, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => onSearch(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books &&
              books.map((book, index) => {
                return (
                  <Book
                    key={book.id}
                    book={book}
                    index={index}
                    onChange={onChange}
                  />
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
