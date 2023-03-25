import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import Img1 from "../../assets/foto1.png";
import Img2 from "../../assets/foto2.png";
import Img3 from "../../assets/foto3.png";
import Img4 from "../../assets/foto4.png";

import "./styles.css";

function CarouselImages() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="light" interval={null} className='Carousel' activeIndex={index} onSelect={handleSelect}>
      {Array.from({ length: 4 }).map((_, idx) => (
          <Carousel.Item className='CarouselItem'>
          <img
            className="d-block w-100 img-fluid"
            src={Img2}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
      {/* <Carousel.Item className='CarouselItem'>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselImages;
