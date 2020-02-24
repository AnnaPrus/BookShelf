import React from 'react';


class Book extends React.Component {
    constructor(props) {
        super(props)
      };
    render() {
        return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 188
                  }}>
                    <img
                      src={this.props.book.imageLinks.smallThumbnail}
                      alt=""
                      style={{
                      width: 128,
                      height: 188}}
                    ></img>
                    {" "}
                </div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
          </li>
        );
    }
  }
export default Book;