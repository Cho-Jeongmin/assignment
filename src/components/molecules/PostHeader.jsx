import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";
import Text from "../atoms/Text";

function PostHeader(props) {
  return (
    <Wrapper>
      <Text
        textStyle={titleStyle}
      >{`연말 연휴 휴무 공지 (2023.12.25 - 2024.01.02)`}</Text>
      <Text textStyle={dateStyle}>2023. 11. 22 10:04:26</Text>
    </Wrapper>
  );
}

export default PostHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 86px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale40};
`;

const titleStyle = css`
  font-size: 22px;
  font-weight: 700;
  line-height: 26.25px;
  color: ${theme.colors.grayscale90};
`;

const dateStyle = css`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${theme.colors.grayscale90};
`;
