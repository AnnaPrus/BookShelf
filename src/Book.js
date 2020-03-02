import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.book.shelf };
  }

  onChangeWrapper = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(event, this.props.book);
  };
  render() {
    const { book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188
              }}
            >
              <img
                src={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                alt=""
                style={{
                  width: 128,
                  height: 188
                }}
              ></img>
            </div>
            <div className="book-shelf-changer">
              <select
                value={this.state.value}
                onChange={event => this.onChangeWrapper(event)}
              >
                {book.shelf}
                <option value="">Move to...</option>
                <option value="none">None</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}
export default Book;
