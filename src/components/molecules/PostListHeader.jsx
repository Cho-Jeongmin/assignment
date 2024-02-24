import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Text from "../atoms/Text";

function PostListHeader(props) {
  return (
    <Wrapper>
      <Text textStyle={numberStyle}>번호</Text>
      <Text>제목</Text>
      <Text textStyle={dateStyle}>등록일</Text>
    </Wrapper>
  );
}

export default PostListHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const numberStyle = css`
  width: 80px;
  text-align: center;
`;

export const dateStyle = css`
  width: 128px;
  text-align: center;
`;
