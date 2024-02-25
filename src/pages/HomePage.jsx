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
      {/* <SInput />
      <Button theme="basic">Atom 버튼</Button>
      <Button theme="basic" css={{ background: "red" }}>
        css prop 적용된 버튼
      </Button>
      <Button theme="basic" buttonStyle={buttonStyle}>
        buttonStyle prop 적용된 버튼
      </Button>
      <SButton theme="basic">스타일된 버튼</SButton> */}
    </Root>
  );
}

export default HomePage;

const SInput = styled(Input)`
  border: 1px solid red;
`;

const SButton = styled(Button)`
  background: red;
`;

const buttonStyle = css`
  background: red;
`;
