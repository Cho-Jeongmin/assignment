import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { ReactComponent as HeartFullIcon } from "../../assets/icons/heartFull.svg";
import { ReactComponent as HeartEmptyIcon } from "../../assets/icons/heartEmpty.svg";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme";
import SLink from "../atoms/SLink";
import { useState } from "react";
import { toggleLike } from "../../api/apis";

function PostFooter({ postId, likes }) {
  const initialLiked = JSON.parse(localStorage.getItem("liked" + postId));
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  useEffect(() => {
    setLiked(initialLiked);
  }, [initialLiked]);

  const onClickHeart = async () => {
    // 프론트상 좋아요 숫자 증감
    if (liked) setLikeCount((prev) => prev - 1);
    else setLikeCount((prev) => prev + 1);
    // 로컬스토리지에 좋아요 여부 업데이트
    localStorage.setItem("liked" + postId, JSON.stringify(!liked));
    // 서버에 좋아요 여부 업데이트
    try {
      await toggleLike(postId, liked);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Button onClick={onClickHeart}>
        {liked ? <HeartFullIcon /> : <HeartEmptyIcon />}
      </Button>
      <Text textStyle={heartCountStyle}>{likeCount}</Text>
      <SLink to="/">
        <Button variant="outlined" buttonStyle={prevButtonStyle}>
          목록으로 돌아가기
        </Button>
      </SLink>
    </Wrapper>
  );
}

export default PostFooter;

const Wrapper = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-end;
  align-items: center;
`;

const prevButtonStyle = css`
  width: 181px;
  height: 46px;
  font-size: 19px;
  font-weight: 500;
`;

const heartCountStyle = css`
  font-size: 15px;
  color: ${theme.colors.grayscale60};
  margin-left: 6.5px;
  margin-right: 15.5px;
`;
