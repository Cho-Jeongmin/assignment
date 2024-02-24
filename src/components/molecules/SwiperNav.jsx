import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrowBack.svg";
import { ReactComponent as ArrowForward } from "../../assets/icons/arrowForward.svg";

const SwiperNav = ({ totalSlides, activeSlide, goto, prev, next }) => {
  return (
    <div>
      <Wrapper>
        <Tabs>
          {Array(totalSlides)
            .fill(0)
            .map((_, index) => (
              <Tab
                $active={index === activeSlide}
                onClick={(e) => goto(index)}
                key={index}
              />
            ))}
        </Tabs>
        <Buttons>
          <Button onClick={() => prev()}>
            <ArrowBack />
          </Button>
          <PageNum>
            <span>{activeSlide + 1}</span> / {totalSlides}
          </PageNum>
          <Button onClick={() => next()}>
            <ArrowForward />
          </Button>
        </Buttons>
      </Wrapper>
    </div>
  );
};

export default SwiperNav;

const Wrapper = styled.div`
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
