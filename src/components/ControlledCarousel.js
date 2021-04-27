import React, {useState} from 'react';

import { Carousel } from 'react-bootstrap';
import CarouselCard from './CarouselCard';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <CarouselCard />
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselCard />
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselCard />
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }

  export default ControlledCarousel;