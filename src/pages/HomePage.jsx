/** @jsxImportSource @emotion/react */
import Swiper from "../components/organisms/Swiper";
import Root from "../components/atoms/Root";
import PostListSection from "../components/organisms/PostListSection";
import { useEffect, useState } from "react";
import { getAllPosts } from "../api/apis";
import styled from "@emotion/styled";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { css } from "@emotion/react";
import { useScrollToBottom } from "../utils/useScrollToBottom";

function HomePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  // 게시글 전체 조회
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const req = await getAllPosts();
        setAllPosts(req.data);
        setPosts(req.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <Root>
      <Swiper />
      <PostListSection posts={posts} setPosts={setPosts} allPosts={allPosts} />
    </Root>
  );
}

export default HomePage;
