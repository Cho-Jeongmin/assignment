import styled from "@emotion/styled";
import React from "react";
import Main from "../atoms/Main";
import PathBar from "../molecules/PathBar";
import PostContent from "../molecules/PostContent";
import PostFooter from "../molecules/PostFooter";
import PostHeader from "../molecules/PostHeader";

function PostDetailSection(props) {
  return (
    <Wrapper>
      <PathBar />
      <PostHeader />
      <PostContent />
      <PostFooter />
    </Wrapper>
  );
}

export default PostDetailSection;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};
  gap: 20px;
  padding-bottom: 20px;
`;
