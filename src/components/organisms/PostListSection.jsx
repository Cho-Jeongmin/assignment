import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Main from "../atoms/Main";
import Pagination from "../molecules/Pagination";
import PathBar from "../molecules/PathBar";
import PostList from "../molecules/PostList";
import PostListHeader from "../molecules/PostListHeader";
import SearchBar from "../molecules/SearchBar";

function PostListSection({ posts, setPosts, allPosts }) {
  // 페이지네이션 데이터
  const [page, setPage] = useState(localStorage.getItem("page"));
  const shownPosts = 4;
  const slicePosts = (posts) =>
    posts.slice((page - 1) * shownPosts, page * shownPosts);

  // 새로고침시 페이지 유지
  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  // 게시글 검색 기능
  const onSearch = (keyword) => {
    if (keyword !== "") {
      const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setPosts(filteredPosts);
    } else {
      setPosts(allPosts);
    }
    setPage(1);
  };

  return (
    <Main>
      <PathBar />
      <SearchBarWrapper>
        <SearchBar onSearch={onSearch} />
      </SearchBarWrapper>
      <div>
        <PostListHeader />
        <PostList posts={slicePosts(posts)} />
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
