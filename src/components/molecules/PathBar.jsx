import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as PathArrowIcon } from "../../assets/icons/pathArrow.svg";
import { colors } from "../../styles/colors";

function PathBar(props) {
  return (
    <Wrapper>
      <HomeIcon />
      <PathArrowIcon />
      <Text $color={colors.grayscale90}>게시판</Text>
      <PathArrowIcon />
      <Text $color={colors.darkBlue}>공지사항</Text>
    </Wrapper>
  );
}

export default PathBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid black;
  gap: 4px;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.$color};
`;
