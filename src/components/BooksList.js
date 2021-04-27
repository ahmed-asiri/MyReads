import React, { Component } from 'react'
import BookCard from './BookCard';

class BooksList extends Component {

    renderBooks = () => {
        // render the books by using map
        return this.props.books.map((book) => {
            if(book.shelf === this.props.shelf) {
                return <BookCard key={book.id} book={book} onShelfChange={this.props.onShelfChange} />
            }
            return null;
        });
    }

    render() {
        return (
            <div>
                <div className="books-container">
                    { this.renderBooks() }
                </div>
            </div>
        )
    }
}

export default BooksList;