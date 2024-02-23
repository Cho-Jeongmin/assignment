/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "@emotion/styled";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import { ReactComponent as ArrowBack } from "../assets/icons/arrowBack.svg";
import { ReactComponent as ArrowForward } from "../assets/icons/arrowForward.svg";

const images = [image1, image2, image3];

function Swiper(props) {
  const [activeSlide, setActiveSlide] = useState(0);
  let sliderRef = useRef(null);

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
      <Navigator>
        <Tabs>
          {images.map((_, index) => (
            <Tab
              $active={index === activeSlide}
              onClick={(e) => sliderRef.slickGoTo(index)}
              key={index}
            />
          ))}
        </Tabs>
        <Buttons>
          <Button onClick={() => sliderRef.slickPrev()}>
            <ArrowBack />
          </Button>
          <PageNum>
            <span>{activeSlide + 1}</span> / {images.length}
          </PageNum>
          <Button onClick={() => sliderRef.slickNext()}>
            <ArrowForward />
          </Button>
        </Buttons>
      </Navigator>
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

const Navigator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 334px;
  transform: translate(40px, -83px);
  position: absolute;
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
`;

const Tab = styled.div`
  width: 100%;
  height: 0px;
  border: 2px solid white;
  opacity: ${(props) => !props.$active && "0.4"};
  &:hover {
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 16px;
`;

const PageNum = styled.div`
  margin: 0px 8px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.014em;
  color: rgba(255, 255, 255, 0.4);
  span {
    color: #e0e0e0;
  }
`;

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
