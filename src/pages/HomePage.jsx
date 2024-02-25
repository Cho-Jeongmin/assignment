/** @jsxImportSource @emotion/react */
import Swiper from "../components/organisms/Swiper";
import Root from "../components/atoms/Root";
import PostListSection from "../components/organisms/PostListSection";
import { useEffect, useState } from "react";
import { getAllPosts } from "../api/apis";

function HomePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);

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

  const onSearch = (keyword) => {
    if (keyword !== "") {
      const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setPosts(filteredPosts);
    } else {
      setPosts(allPosts);
    }
  };

  return (
    <Root>
      <Swiper />
      <PostListSection posts={posts} onSearch={onSearch} />
    </Root>
  );
}

export default HomePage;
