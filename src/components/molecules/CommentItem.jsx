import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";
import { getDate } from "../../utils/date";
import Text from "../atoms/Text";

function CommentItem({ comment }) {
  return (
    <Wrapper>
      <Text textStyle={contentStyle}>{comment.content}</Text>
      <Footer>
        <Text textStyle={nicknameStyle}>
          {comment.nickname.substring(0, comment.nickname.length - 2) + "**"}
        </Text>
        <Text textStyle={dateStyle}>{getDate(comment.createdAt)}</Text>
      </Footer>
    </Wrapper>
  );
}

export default CommentItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* height: 225px; */
  background: ${({ theme }) => theme.colors.grayscale12};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale30};
  padding: 20px 24px;
  padding-bottom: 0px;
`;

const contentStyle = css`
  flex: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: ${theme.colors.grayscale70};
  letter-spacing: -0.0103em;
  padding-bottom: 10px;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 16.5px;
  padding-bottom: 18.5px;
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale20};
`;

const nicknameStyle = css`
  height: 15px;
  padding-right: 16px;
  border-right: 1px solid ${theme.colors.grayscale40};
  font-weight: 600;
  font-size: 15px;
`;

const dateStyle = css`
  font-weight: 500;
  font-size: 15px;
  color: ${theme.colors.grayscale50};
  padding-left: 16px;
`;
