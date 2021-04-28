import React, { Component } from 'react'
import { search } from '../api/BooksAPI';
import BookCard from '../components/BookCard';
import _ from 'lodash'

export default class SearchPage extends Component {

    state={
        query: '',
        books: [],
        timeoutId: 0
    }

    handleQueryChange = (value) => {

        // using timeout to avoid overfetching by user typing
        clearTimeout(this.state.timeoutId);

        // to handle the controlled input component
        this.setState({ query: value }, () => {
            
            const timeoutId = setTimeout(() => {
                this.onSearchChange();
            }, 1000);

            this.setState({ timeoutId });
        });
    }

    onSearchChange = () => {

        if(this.state.query) {
            // make search request
            search(this.state.query)
                .then(res => {
                    res.length && this.setState({ books: [...res] })
                })
        }
    }

    renderBooks = () => {
        // because the searched books will not have shelf,
        // we will join the already categorized books with new ones
        // to recognize category
        const oldBooks = !this.state.books.length ? [] : _.mapKeys(this.props.books, 'id');
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
                    <form>
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
