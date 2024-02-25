/** @jsxImportSource @emotion/react */
import Swiper from "../components/organisms/Swiper";
import Root from "../components/atoms/Root";
import PostListSection from "../components/organisms/PostListSection";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getchAllPosts = async () => {
      try {
        const req = await axios.get("http://localhost:8800/posts");
        console.log("posts", req.data);
        setAllPosts(req.data);
        setPosts(req.data);
      } catch (err) {
        console.log(err);
      }
    };
    getchAllPosts();
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
