import React from "react";
import Main from "../components/atoms/Main";
import Wrapper from "../components/atoms/Root";
import CommentSection from "../components/organisms/CommentSection";
import PostDetailSection from "../components/organisms/PostDetailSection";

function PostDetailPage(props) {
  return (
    <Wrapper>
      <Main>
        <PostDetailSection />
        <CommentSection />
      </Main>
    </Wrapper>
  );
}

export default PostDetailPage;
