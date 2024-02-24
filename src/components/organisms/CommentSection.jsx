import styled from "@emotion/styled";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CommentCreator from "../molecules/CommentCreator";
import CommentList from "../molecules/CommentList";
import CommentHeader from "./../molecules/CommentHeader";
import axios from "axios";

function CommentSection(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const res = await axios.get("http://localhost:8800/comments");
        console.log(res.data);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllComments();
  }, []);

  return (
    <Wrapper>
      <CommentHeaderWrapper>
        <CommentHeader />
      </CommentHeaderWrapper>
      <CommentCreator />
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
