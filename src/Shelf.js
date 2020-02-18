import React from 'react';
import Book from './Book' ;

class Shelf extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {optionSelected: ''};
        this.props = {name: ''}; 
      };
    
      handleChange(e) {
        this.setState({name: e.target.value});
      };
    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book/>
                <Book />
              </ol>
            </div>
          </div>
        )
    }
  }
export default Shelf;