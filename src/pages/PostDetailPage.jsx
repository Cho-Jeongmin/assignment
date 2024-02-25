import React, { useEffect, useRef, useState } from "react";
import Main from "../components/atoms/Main";
import CommentSection from "../components/organisms/CommentSection";
import PostDetailSection from "../components/organisms/PostDetailSection";
import { useParams } from "react-router-dom";
import { getOnePost } from "../api/apis";
import Root from "../components/atoms/Root";
import { css } from "@emotion/react";
import { useScrollToBottom } from "../utils/useScrollToBottom";

function PostDetailPage(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id: postId } = useParams();
  const { bottomRef, scrollToBottom } = useScrollToBottom();

  // 게시글 1개 조회
  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const res = await getOnePost(postId);
        setPost(res.data.post);
        setComments(res.data.comments);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOnePost();
  }, []);

  return (
    <Root ref={bottomRef}>
      <Main>
        <PostDetailSection post={post} />
        <CommentSection
          comments={comments}
          setComments={setComments}
          scrollToBottom={scrollToBottom}
        />
      </Main>
      <div ref={bottomRef}></div>
    </Root>
  );
}

export default PostDetailPage;
