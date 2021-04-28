import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import logo from '../image/book-cover-placeholder.png';

function BookCard({ book, onShelfChange }) {


    const shelfTypes = {
        'currentlyReading': {
            type: 'currentlyReading',
            title: 'Currently Reading'
        },
        'wantToRead': {
            type: 'wantToRead',
            title: 'Want to Read'
        },
        'read': {
            type: 'read',
            title: 'Read'
        },
        'none': {
            type: 'none',
            title: 'None'
        }
    }

    const [currentShelf, setCurrentShelf] = useState(shelfTypes[book.shelf].title);

    const onShelfTypeChange = (shelf) => {
        // update the shlef locally
        setCurrentShelf(shelf.title)
        // send changes to the App component
        onShelfChange(book, shelf.type)
    }

    const handleThumbnail = () => {
        let thumbnailUrl = '';
        if(book.imageLinks) {
            if(book.imageLinks.smallThumbnail)
                thumbnailUrl = book.imageLinks.smallThumbnail
            else if(book.imageLinks.thumbnail)
                thumbnailUrl = book.imageLinks.thumbnail;
        } else {
            thumbnailUrl = logo;
        }

        return <img src={thumbnailUrl} alt="book cover"/>
        
    }
    
    return (
        <div className="book-card-container">
            <div className="book-card">
                <div className="book-card-content">
                    <div className="book-card__image">
                        {handleThumbnail()}
                    </div>
                    <div className="book-card__details">
                        <h5 className="book-card__details--title">{book.title}</h5>
                        <p className="book-card__details--author">by { book.authors && book.authors[0]}</p>
                        <p className="book-card__details--rating">
                            { book.publishedDate && `${book.publishedDate}`}  
                        </p>
                        <p className="book-card__details--description">
                            {book.description}                            
                        </p>
                    </div>
                </div>
                <div className="book-card-subcontent">
                    <div className="book-card__sub-details">
                        <Dropdown>
                            <Dropdown.Toggle 
                                variant="danger" 
                                id="dropdown-basic"
                            >
                                {currentShelf}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    name="currentlyReading" 
                                    onClick={(e) => onShelfTypeChange(shelfTypes[e.target.name])}
                                >
                                    Currently Reading
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    name="wantToRead" 
                                    onClick={(e) => onShelfTypeChange(shelfTypes[e.target.name])}
                                >
                                    Wnat to Read
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    name="read" 
                                    onClick={(e) => onShelfTypeChange(shelfTypes[e.target.name])}
                                >
                                    Read
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    name="none" 
                                    onClick={(e) => onShelfTypeChange(shelfTypes[e.target.name])}
                                >
                                    None
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
