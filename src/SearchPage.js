import React from 'react';
import * as BooksAPI from './BooksAPI';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { bookTitle: "Ender's Game" };
    this.state = { bookCover: "" };
  }
  state = {
    query: "",
    showSearchPage: false
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
    //onClick={() => this.setState({ showSearchPage: false })}
*/
  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search" onClick
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
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
