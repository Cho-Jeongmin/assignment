import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { getDate } from "../../utils/date";
import SLink from "../atoms/SLink";
import Text from "../atoms/Text";
import { numberStyle, dateStyle } from "./PostListHeader";

function PostItem({ post }) {
  return (
    <Wrapper>
      <Text textStyle={numberStyle}>{post.id}</Text>
      <Text textStyle={titleStyle}>
        <SLink to={`/detail/${post.id}`}>{post.title}</SLink>
      </Text>
      <Text textStyle={dateStyle}>{getDate(post.createdAt, true)}</Text>
    </Wrapper>
  );
}

export default PostItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 26px;
  width: 100%;
  height: 76px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale40};
`;

const titleStyle = css`
  flex: 1;
`;
