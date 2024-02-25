import React, { useEffect, useState } from "react";
import Main from "../components/atoms/Main";
import CommentSection from "../components/organisms/CommentSection";
import PostDetailSection from "../components/organisms/PostDetailSection";
import { useParams } from "react-router-dom";
import { getOnePost } from "../api/apis";
import Root from "../components/atoms/Root";

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
    <Root>
      <Main>
        <PostDetailSection post={post} />
        <CommentSection comments={comments} setComments={setComments} />
      </Main>
    </Root>
  );
}

export default PostDetailPage;
