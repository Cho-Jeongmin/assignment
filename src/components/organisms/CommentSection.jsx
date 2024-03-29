import styled from "@emotion/styled";
import React from "react";
import CommentCreator from "../molecules/CommentCreator";
import CommentList from "../molecules/CommentList";
import CommentHeader from "./../molecules/CommentHeader";

function CommentSection({ comments, setComments, scrollToBottom }) {
  return (
    <Wrapper>
      <CommentHeaderWrapper>
        <CommentHeader commentCount={comments.length} />
      </CommentHeaderWrapper>
      <CommentCreator
        setComments={setComments}
        scrollToBottom={scrollToBottom}
      />
      <CommentList comments={comments} />
    </Wrapper>
  );
}

export default CommentSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 40px 0px;
`;

const CommentHeaderWrapper = styled.div`
  margin-bottom: 14px;
`;
