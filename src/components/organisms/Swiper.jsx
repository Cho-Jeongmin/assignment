/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "@emotion/styled";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import SwiperNav from "../molecules/SwiperNav";

const images = [image1, image2, image3];

function Swiper(props) {
  const [activeSlide, setActiveSlide] = useState(0);
  let sliderRef = useRef(null);
  const goto = (index) => sliderRef.slickGoTo(index);
  const prev = () => sliderRef.slickPrev();
  const next = () => sliderRef.slickNext();

  const settings = {
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <Wrapper>
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {images.map((image, index) => (
          <Image src={image} key={index} />
        ))}
      </Slider>
      <SwiperNav
        totalSlides={images.length}
        activeSlide={activeSlide}
        goto={goto}
        prev={prev}
        next={next}
      />
    </Wrapper>
  );
}

export default Swiper;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  height: 528px;
  object-fit: cover;
`;
