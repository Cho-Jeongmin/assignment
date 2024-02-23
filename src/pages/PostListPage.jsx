import styled from "@emotion/styled";
import React from "react";
import PathBar from "../components/PathBar";
import SearchBar from "../components/SearchBar";
import Swiper from "../components/Swiper";

function PostListPage(props) {
  return (
    <Wrapper>
      <Swiper />
      <Main>
        <PathBar />
        <SearchBar />
      </Main>
    </Wrapper>
  );
}

export default PostListPage;

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
  gap: 16px;
`;
