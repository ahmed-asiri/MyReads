import React, { Component } from 'react'
import BookCard from './BookCard';

export default class BooksList extends Component {

    renderBooks = () => {
        return this.props.books.map((book) => {
            if(book.shelf === this.props.shelf) {
                return <BookCard key={book.id} book={book} onShelfChange={this.props.onShelfChange} />
            }
        });
    }

    render() {
        return (
            <div>
                <div className="books-container">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}
