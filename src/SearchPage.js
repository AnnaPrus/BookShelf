import React from 'react';
import * as BooksAPI from './BooksAPI';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { bookTitle: "Ender's Game" };
    this.state = { bookCover: "" };
  }
  state = {
    query: "",
    books: []
  };
  handleChange(e) {
    this.setState({ bookName: e.target.value });
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  
  /*  addBook = (book) => {
        BooksAPI.create(book)
            .then((book) => {
                this.setState((currentState) => ({
                    books: currentState.books.concat([book])
                }))
            })
    }
*/
  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  searchBook = (book) => {
    this.setState((currentState) => ({
      books: currentState.books.filter((c) => {
        return c.id !== book.id
      })
    }))

    BooksAPI.search(book)
  }
  render() {
    const { query } = this.state.query
    let books = this.state.books
    const showingBooks = query === ''
    ? books
    : books.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase())
      ))
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
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {showingBooks.length !== books.length && (
          <div className='showing-books'>
            <span>Now showing {showingBooks.length} of {books.length}</span>
          
          </div>
        )}
        </div>
      </div>
    );
  }
}
export default SearchPage;
