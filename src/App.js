import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
class BooksApp extends React.Component {
  state = {
    books: [],
    booksSearched: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log("books: ", books);
      this.setState({ books });
    });
  }
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
    if (value === "") {
      this.setState({ booksSearched: [] });
    } else {
      BooksAPI.search(value)
        .then(booksSearched => {
          if (booksSearched.error) {
            this.setState({ booksSearched: [] });
          } else {
            const newBooks = this.setDefaultShelves(booksSearched);
            this.setState({ booksSearched: newBooks });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  onShelfChange = (event, book) => {
    const { value } = event.target;
    const { books } = this.state;
    const modifiedBooks = [...books];
    const index = modifiedBooks.indexOf(book);
    if (index >= 0) {
      modifiedBooks[index].shelf = value;
    } else {
      book.shelf = value;
      modifiedBooks.push(book);
    }
    this.setState({
      books: modifiedBooks
    });
    BooksAPI.update(book, value);
  };
  onChangeWrapper = (event, book) => {
    this.setState({ value: event.target.value });
    this.onShelfChange(event, book);
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                books={this.state.books}
                onChange={this.onChangeWrapper}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <SearchPage
                books={this.state.booksSearched}
                onChange={this.onShelfChange}
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
