import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as PathArrowIcon } from "../../assets/icons/pathArrow.svg";
import { theme } from "../../styles/theme";
import SLink from "../atoms/SLink";
import Text from "../atoms/Text";

function PathBar(props) {
  return (
    <Wrapper>
      <SLink to="/">
        <HomeIcon />
      </SLink>
      <PathArrowIcon />
      <Text textStyle={textStyle}>게시판</Text>
      <PathArrowIcon />
      <Text textStyle={colorTextStyle}>공지사항</Text>
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

const textStyle = css`
  font-weight: 600;
  color: ${theme.colors.grayscale90};
`;

const colorTextStyle = css`
  font-weight: 600;
  color: ${theme.colors.darkBlue};
`;
