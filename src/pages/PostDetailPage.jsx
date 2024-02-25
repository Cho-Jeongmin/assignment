import React, { useEffect, useState } from "react";
import Main from "../components/atoms/Main";
import Wrapper from "../components/atoms/Root";
import CommentSection from "../components/organisms/CommentSection";
import PostDetailSection from "../components/organisms/PostDetailSection";
import { useParams } from "react-router-dom";
import { getOnePost } from "../api/apis";

function PostDetailPage(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id: postId } = useParams();

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
    <Wrapper>
      <Main>
        <PostDetailSection post={post} />
        <CommentSection comments={comments} setComments={setComments} />
      </Main>
    </Wrapper>
  );
}

export default PostDetailPage;
