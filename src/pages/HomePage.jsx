/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { useState } from "react";
import PathBar from "../components/molecules/PathBar";
import PostList from "../components/molecules/PostList";
import PostListHeader from "../components/molecules/PostListHeader";
import SearchBar from "../components/molecules/SearchBar";
import Swiper from "../components/organisms/Swiper";
import { postList } from "../assets/mockData/postList";
import Pagination from "../components/molecules/Pagination";

function HomePage(props) {
  const [page, setPage] = useState(1);
  const shownPosts = 4;
  const sliceData = (postList) =>
    postList.slice((page - 1) * shownPosts, page * shownPosts);

  return (
    <Wrapper>
      <Swiper />
      <Main>
        <PathBar />
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <div>
          <PostListHeader />
          <PostList postList={sliceData(postList)} />
        </div>
        <PaginationWrapper>
          <Pagination
            page={page}
            setPage={setPage}
            shownPosts={shownPosts}
            totalPosts={postList.length}
          />
        </PaginationWrapper>
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

const SearchBarWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;
`;
const PaginationWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`;
