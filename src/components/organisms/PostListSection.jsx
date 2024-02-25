import styled from "@emotion/styled";
import React, { useState } from "react";
import Main from "../atoms/Main";
import Pagination from "../molecules/Pagination";
import PathBar from "../molecules/PathBar";
import PostList from "../molecules/PostList";
import PostListHeader from "../molecules/PostListHeader";
import SearchBar from "../molecules/SearchBar";

function PostListSection({ posts, onSearch }) {
  const [page, setPage] = useState(1);
  const shownPosts = 4;
  const sliceData = (posts) =>
    posts.slice((page - 1) * shownPosts, page * shownPosts);

  return (
    <Main>
      <PathBar />
      <SearchBarWrapper>
        <SearchBar onSearch={onSearch} setPage={setPage} />
      </SearchBarWrapper>
      <div>
        <PostListHeader />
        <PostList posts={sliceData(posts)} />
      </div>
      <PaginationWrapper>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={Math.ceil(posts.length / shownPosts)}
        />
      </PaginationWrapper>
    </Main>
  );
}

export default PostListSection;

const SearchBarWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;
`;
const PaginationWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`;
