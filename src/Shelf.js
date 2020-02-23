import React from 'react';
import Book from './Book' ;

class Shelf extends React.Component {
    constructor(props) {
        super(props);
        this.props = {name: ''}; 
      };
    
    render() {
        const books = this.props.books;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {books && books.map(book => {
              return <Book book={book} />;
            })}
                
              </ol>
            </div>
          </div>
        )
    }
  }
export default Shelf;