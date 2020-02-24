import React from 'react';


class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      };
      handleChange(event) {
        this.setState({value: event.target.value});
        this.props.book.shelf=event.target.value;
        this.setState({
            [this.props.book.shelf]: event.target.value
          });
        console.log("book changed", this.props.book)

      }


 

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
                  <select value={this.state.value} onChange={this.handleChange}> {this.props.book.shelf}
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