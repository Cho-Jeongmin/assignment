/** @jsxImportSource @emotion/react */
import Swiper from "../components/organisms/Swiper";
import { postList } from "../assets/mockData/postList";
import Root from "../components/atoms/Root";
import PostListSection from "../components/organisms/PostListSection";

function HomePage(props) {
  return (
    <Root>
      <Swiper />
      <PostListSection postList={postList} />
    </Root>
  );
}

export default HomePage;
