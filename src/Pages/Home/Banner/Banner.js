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
      <h3>Plant-Based Southern Fried Style Chicken</h3>
      <p>A great party platter addition, lunchtime snack, and children's favourite. These are high protein, low in fat, and soya-free.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src={Images11}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Chicken Griled Leg Piece Special</h3>
      <p> Enjoy 8pcs of Hot & Crispy along with 12pcs of Hot Wings only at Tk.599.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images14}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Plant-Based Cheese Pizza</h3>
      <p>This great-tasting meat-free sausage has all the flavour and texture of a classic hot dog but has been modernised to be entirely vegan, vegetarian and plant-based..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;