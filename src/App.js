import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
class BooksApp extends React.Component {
  state = {
    books: [],
    booksSearched: [],
    query: ""
  };
  setDefaultShelves = searchedBooks => {
    const myBooks = this.state.books;
    return searchedBooks.map(book => {
      book.shelf = "none";
      myBooks.forEach(myBook => {
        if (myBook.id === book.id) {
          book.shelf = myBook.shelf;
        }
      });
      return book;
    });
  };
  updateQuery = event => {
    const { value } = event.target;
    const { books } = this.state;
    BooksAPI.search(value)
      .then(booksSearched => {
        if (booksSearched && booksSearched.length) {
          const newBooks = this.setDefaultShelves(booksSearched);
          this.setState({ booksSearched, books: [...books, ...newBooks] });
        } else {
          this.setState({ booksSearched: [] });
        }
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log("books: ", books);
      this.setState({ books });
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
    BooksAPI.update(book, value);
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage books={this.state.books} onChange={this.onSelfChange} />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <SearchPage
                books={this.state.booksSearched}
                onChange={this.onSelfChange}
                onSearch={this.updateQuery}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default BooksApp;

