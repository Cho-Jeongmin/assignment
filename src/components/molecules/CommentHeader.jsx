import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Text from "../atoms/Text";
import { theme } from "./../../styles/theme";

function CommentHeader({ commentCount }) {
  return (
    <Wrapper>
      <Text textStyle={textStyle}>댓글</Text>
      <Text textStyle={[textStyle, NumberStyle]}>{commentCount}</Text>
    </Wrapper>
  );
}

export default CommentHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const textStyle = css`
  font-weight: 700;
  font-size: 28px;
`;

const NumberStyle = css`
  color: ${theme.colors.primary1};
`;
