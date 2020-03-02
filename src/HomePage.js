import React from "react";
import Shelf from "./Shelf";
import { BrowserRouter as Router, Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    const { books, onChange } = this.props;
    const currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    console.log("read books", readBooks);
    return (
      <Router>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                onChange={onChange}
                name="Current reading"
                books={currentlyReadingBooks}
              />
              <Shelf
                onChange={onChange}
                name="Want to read"
                books={wantToReadBooks}
              />
              <Shelf onChange={onChange} name="Read" books={readBooks} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <button onClick></button>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}
export default HomePage;
