import React, { Component } from 'react'
import { search } from '../api/BooksAPI';
import BookCard from '../components/BookCard';
import _ from 'lodash'

export default class SearchPage extends Component {

    state={
        query: '',
        books: []
    }

    handleQueryChange = (value) => {
        this.setState({ query: value });
    }

    onSearchSubmit = (e) => {
        e.preventDefault();

        search(this.state.query)
            .then(res => {
                this.setState({ books: [...res] })
            })
    }

    renderBooks = () => {
        const oldBooks = _.mapKeys(this.props.books, 'id');
        const newBooks = _.mapKeys(this.state.books, 'id');
        const joinedBooksObject = {...newBooks, ...oldBooks }
        const joinedBooks = Object.values(joinedBooksObject);
        return joinedBooks.map((book) => {
            book.shelf = !book.shelf ? 'none' : book.shelf; 
            return <BookCard key={book.id} book={book} onShelfChange={this.props.onShelfChange} />
        });
    }

    render() {
        return (
            <div className="search-page">
                <div className="search-block">
                    <form onSubmit={this.onSearchSubmit}>
                        <input 
                            name="search"
                            className="search-block__search-input"
                            placeholder="Search for a Book"
                            type="text" 
                            value={this.state.query} 
                            onChange={(e) => this.handleQueryChange(e.target.value)} 
                        />
                    </form>
                </div>
                <div className="books-container">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}
