import { instance } from "./axios";

// 게시글 전체 조회 api
export const getAllPosts = async () => {
  const res = await instance.get("/posts");
  console.log(res.data);
  return res;
};

// 게시글 1개 조회 api
export const getOnePost = async (postId) => {
  const res = await instance.get(`/posts/${postId}`);
  console.log(res.data);
  return res;
};

// 댓글 작성 api
export const addComment = async (postId, comment) => {
  const res = await instance.post(`/posts/${postId}/comments`, comment);
  console.log(res.data);
  return res;
};

// 좋아요 및 취소 api
export const toggleLike = async (postId, liked) => {
  const res = await instance.put(`/posts/${postId}/likes`, {
    isAdding: !liked,
  });
  console.log(res.data);
  return res;
};
