import React, {useState} from 'react';

import { Carousel } from 'react-bootstrap';
import CarouselCard from './CarouselCard';

function ControlledCarousel({ books }) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const renderBooks = () => {
        return books.map((book, index) => {
            return (
                <Carousel.Item key={book.id}>
                    <CarouselCard book={book} classIndex={index} />
                </Carousel.Item>
            );
        })
    }

    return (
        <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect} >
                { renderBooks() }
            </Carousel>
        </div>
    );
  }

  export default ControlledCarousel;