import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as PathArrowIcon } from "../../assets/icons/pathArrow.svg";

function PathBar(props) {
  return (
    <Wrapper>
      <HomeIcon />
      <PathArrowIcon />
      <Text $color="#23282e">게시판</Text>
      <PathArrowIcon />
      <Text $color="#006cff">공지사항</Text>
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
  /* Title/H7/semibold */
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  /* gray scale/90 */
  color: ${(props) => props.$color};
`;
