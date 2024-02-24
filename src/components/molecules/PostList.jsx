import React from "react";
import PostItem from "./PostItem";

function PostList({ postList }) {
  return (
    <div>
      {postList.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default PostList;
