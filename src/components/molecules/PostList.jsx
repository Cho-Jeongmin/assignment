import React from "react";
import PostItem from "./PostItem";

function PostList({ postList }) {
  return (
    <div>
      {postList.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
}

export default PostList;
