import React, { Component } from 'react'
import BookCard from '../components/BookCard';

export default class SearchPage extends Component {

    state={
        query: ''
    }

    handleQueryChange = (value) => {
        this.setState({ query: value });
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
    }

    renderBooks = () => {
        return this.props.books.map((book) => {
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
