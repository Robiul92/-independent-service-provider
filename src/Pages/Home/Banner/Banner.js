import React from 'react';
import { Carousel } from 'react-bootstrap';
import Images13 from '../../../Images/slider-13.jpg'
import Images11 from '../../../Images/slider-11.jpg'
import Images12 from '../../../Images/slider-12.jpg'
import Images14 from '../../../Images/slider-14.jpg'
import Images5 from '../../../Images/slider-5.jpg'
import Images6 from '../../../Images/slider-6.jpg'

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-90px"
      src={Images13}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src={Images11}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images14}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;