import React from 'react'

function CarouselCard({ book, classIndex }) {
    return (
        <div className={`carousel-card-container carousel-card-container-${classIndex}`}>
            <div className="carousel-card">
                <div className="carousel-card__image">
                    <img src={book.imageLinks.thumbnail} alt=""/>
                </div>
                <div className="carousel-card__details">
                    <h3 className="carousel-card__details--title">{book.title}</h3>
                    <p className="carousel-card__details--author">by {book.authors[0]}</p>
                    <p className="carousel-card__details--rating"> { book.publishedDate } </p>
                    <p className="carousel-card__details--description">{book.description}</p>
                    <a href={book.previewLink} className="carousel-card__details--btn"> More Details </a>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard
