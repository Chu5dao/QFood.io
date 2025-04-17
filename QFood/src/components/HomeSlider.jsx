import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ className, style, onClick, direction }) => (
<div
    className={className}
    style={{ ...style, display: "block", background: "#3498db" }}
    onClick={onClick}
>
    {direction === 'next' ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
    ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    )}
</div>
);

const HomeSlider = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />
};

return (
    <div className="mb-8 relative custom-slider-container">
    <Slider {...settings}>
        <div>
        <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-64 object-cover" />
        </div>
        <div>
        <img src="/images/slide2.jfif" alt="Slide 2" className="w-full h-64 object-cover" />
        </div>
        <div>
        <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-64 object-cover" />
        </div>
    </Slider>
    </div>
);
};

export default HomeSlider;