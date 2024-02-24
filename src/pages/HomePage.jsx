/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import PathBar from "../components/molecules/PathBar";
import PostList from "../components/molecules/PostList";
import PostListHeader from "../components/molecules/PostListHeader";
import SearchBar from "../components/molecules/SearchBar";
import Swiper from "../components/organisms/Swiper";
import { postList } from "../assets/mockData/postList";
import { css } from "@emotion/react";

function HomePage(props) {
  return (
    <Wrapper>
      <Swiper />
      <Main>
        <PathBar />
        <MarginWrapper>
          <SearchBar />
        </MarginWrapper>
        <div>
          <PostListHeader />
          <PostList postList={postList} />
        </div>
      </Main>
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  margin-top: 40px;
  width: 940px;
  display: flex;
  flex-direction: column;
`;

const MarginWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;
`;
