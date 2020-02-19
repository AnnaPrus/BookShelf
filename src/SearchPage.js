import React from 'react';
import * as BooksAPI from './BooksAPI';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { bookTitle: 'Ender\'s Game' };
        this.state = { bookCover: '' };
    };

    handleChange(e) {
        this.setState({ bookName: e.target.value });
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }
    addBook = (book) => {
        BooksAPI.create(book)
            .then((book) => {
                this.setState((currentState) => ({
                    books: currentState.books.concat([book])
                }))
            })
    }
    render() {
    
        return (
            <h1> Hello! </h1>
        )
    }
}
export default SearchPage;
