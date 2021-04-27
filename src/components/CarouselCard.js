import React from 'react'

function CarouselCard() {
    return (
        <div className="carousel-card-container">
            <div className="carousel-card">
                <div className="carousel-card__image">
                    <img src="https://marketplace.canva.com/EAD7WuSVrt0/1/0/251w/canva-colorful-illustration-young-adult-book-cover-_jUQ_Pi-Kvg.jpg" alt=""/>
                </div>
                <div className="carousel-card__details">
                    <h3 className="carousel-card__details--title">Hi there</h3>
                    <p className="carousel-card__details--author">by Author</p>
                    <p className="carousel-card__details--rating"> 3.5 out of 5 <span className="carousel-card__details--rating-voters"> 15,158 voters </span> </p>
                    <p className="carousel-card__details--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius repellendus fugit natus odio provident tenetur optio cupiditate, perferendis rerum.</p>
                    <a href="/here" className="carousel-card__details--btn"> More Details </a>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard
