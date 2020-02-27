import React from 'react';
import Book from './Book' ;

class Shelf extends React.Component {    
    render() {
        const { books, onChange} = this.props;

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {books && books.map((book, index) => {
              return <Book key={book.id}  book={book} index={index} onChange={onChange} />;
            })}
                
              </ol>
            </div>
          </div>
        )
    }
  }
export default Shelf;