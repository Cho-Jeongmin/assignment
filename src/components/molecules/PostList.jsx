import React from "react";
import PostItem from "./PostItem";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
}

export default PostList;
