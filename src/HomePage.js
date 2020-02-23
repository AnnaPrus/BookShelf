import React from 'react';
import Shelf from './Shelf' ;
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
//import SearchPage from "./SearchPage";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  };
  
  
  render() {
    // Properties
    const books = this.props.books; 
    const currentlyReadingBooks = books.filter(book => book.shelf = "currentlyReading");
    const wantToReadBooks = books.filter(book => book.shelf = "wantToRead");
    const readBooks = books.filter(book => book.shelf = "read");

  console.log('read books',readBooks)
    return (
      <Router>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf name="Current reading"  books={currentlyReadingBooks}  /> 
              <Shelf name="Want to read"  books={wantToReadBooks} />
              <Shelf name="Read" books={readBooks} />
            </div>
          </div>
          <div className="open-search">
           
            <Link to="/search">
              <button onClick ></button>
            </Link>
           
          </div>
        
        </div>
      </Router>
    );
  }
}
export default HomePage;