import React from 'react';
import './Carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';
import image1 from 'assets/Main/Carousel/carousel1.jpg';
import image2 from 'assets/Main/Carousel/carousel2.jpg';
import image3 from 'assets/Main/Carousel/carousel3.jpg';
import image4 from 'assets/Main/Carousel/carousel4.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow className="slick-prev" />,
    nextArrow: <NextArrow className="slick-next" />,
  };

  return (
    <Slider {...settings} className="slider">
      <div>
        <img src={image1} className="slide-image" alt="slide 1" />
      </div>
      <div>
        <img src={image2} className="slide-image" alt="slide 2" />
      </div>
      <div>
        <img src={image3} className="slide-image" alt="slide 3" />
      </div>
      <div>
        <img src={image4} className="slide-image" alt="slide 4" />
      </div>
    </Slider>
  );
};

const PrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const NextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

export default Carousel;
