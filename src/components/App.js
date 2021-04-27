import React from 'react';
import { Route } from 'react-router';
import { getAll, update } from '../api/BooksAPI';
import BooksList from './BooksList';
import SearchPage from '../pages/SearchPage';
import ContentContainer from './ContentContainer';
import ControlledCarousel from './ControlledCarousel';

import Header from './Header';
import Navigation from './Navigation';

class App extends React.Component {

  state = {
    books: [],
    shelfView: 'currentlyReading'
  }

  componentDidMount() {
    getAll()
      .then((res) => {
        this.setState({ books: res })
      })
  }

  onShelfChange = (shelf) => {
    // which view to select
    this.setState({ shelfView: shelf });
  }

  changeShelf = (updatedBook, shelf) => {
    update(updatedBook, shelf).then(response => {
      // update the shelf for the book
      updatedBook.shelf = shelf;
      // update the books with the updated book
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== updatedBook.id)
          .concat(updatedBook)
      }));
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <ControlledCarousel books={this.state.books.slice(0, 3)} />
        <div className="layout">
          <Navigation onShelfChange={this.onShelfChange} />
          <ContentContainer>
          <Route exact path="/search" render={() => {
              return (
                <SearchPage 
                  books={this.state.books}
                  onShelfChange={this.changeShelf}
                />
              );
            }}/>
            <Route exact path="/" render={() => {
              return (
                <BooksList 
                  shelf={this.state.shelfView}
                  books={this.state.books}
                  onShelfChange={this.changeShelf}
                />
              );
            }}/>
          </ContentContainer>
        </div>
      </div>
    );
  }
}

export default App;
