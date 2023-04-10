import React from 'react';
import './Carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';

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
        <img src="images/image1.jpg" className="slide-image" alt="이미지1" />
      </div>
      <div>
        <img src="images/image1.jpg" className="slide-image" alt="이미지2" />
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
