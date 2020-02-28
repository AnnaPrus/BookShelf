import React from 'react';
import {Link} from "react-router-dom";
import Book from './Book';

class SearchPage extends React.Component {

  render() {
    const { onSearch, onChange, books} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link to='/'>
            <button className="close-search"  >Close</button>
        </Link>
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => onSearch(event)}// onChange={event => onChange(event, book)}
            />
          </div>
        </div>
        <div className="search-books-results">
     
          <ol className="books-grid">
          {books && books.map((book, index) => {
              if (book.shelf=== 'none'){
              return <Book key={book.id}  book={book} index={index} onChange={onChange} />;
            } else{return console.log('this book is already in the shelves');}
          })
          }
          </ol>
 
        </div>
      </div>
    );
  }
}
export default SearchPage;
