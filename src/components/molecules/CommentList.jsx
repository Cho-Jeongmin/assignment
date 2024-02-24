import styled from "@emotion/styled";
import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </Wrapper>
  );
}

export default CommentList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
