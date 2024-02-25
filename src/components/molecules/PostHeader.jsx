import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";
import { getDate } from "../../utils/date";
import Text from "../atoms/Text";

function PostHeader({ title, createdAt }) {
  return (
    <Wrapper>
      <Text textStyle={titleStyle}>{title}</Text>
      <Text textStyle={dateStyle}>
        {createdAt && getDate(createdAt, true, true)}
      </Text>
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
