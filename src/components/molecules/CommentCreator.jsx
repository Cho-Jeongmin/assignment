import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useParams } from "react-router-dom";
import { addComment } from "../../api/apis";

function CommentCreator({ setComments }) {
  const { id: postId } = useParams();
  const [comment, setComment] = useState({ content: "", nickname: "" });
  const [label, setLabel] = useState("");

  const isValidComment = (comment) =>
    comment.content !== "" && comment.nickname.length >= 4;

  const onChangeContent = (e) => {
    let value = e.target.value;
    if (value.length >= 400) value = value.slice(0, 400); // 글자수 제한
    setComment((prev) => ({ ...prev, content: value }));
  };

  const onChangeNicname = (e) => {
    const value = e.target.value;
    setComment((prev) => ({ ...prev, nickname: value }));
    if (value.length >= 1 && value.length <= 3)
      setLabel("닉네임을 4글자 이상 입력해주세요.");
    else setLabel("");
  };

  const getCreatedAt = () => {
    const date = new Date(Date.now()).toISOString();
    return String(date);
  };

  const onClickRegister = async (e) => {
    if (comment.content !== "") {
      if (comment.nickname.length >= 4) {
        try {
          await addComment(postId, comment);
          // 낙관적 업데이트
          setComments((prev) => [
            ...prev,
            { ...comment, createdAt: getCreatedAt() },
          ]);
          setComment({ content: "", nickname: "" });
        } catch (err) {
          console.log(err);
        }
      } else {
        setLabel("닉네임을 4글자 이상 입력해주세요.");
      }
    }
  };

  return (
    <Wrapper>
      <TextArea
        name="content"
        value={comment.content}
        onChange={onChangeContent}
        placeholder="소중한 댓글을 남겨주세요."
      ></TextArea>
      <Footer>
        <Input
          inputStyle={nicknameInputStyle}
          type="text"
          name="nickname"
          value={comment.nickname}
          onChange={onChangeNicname}
          onEnter={onClickRegister}
          placeholder="닉네임을 입력해주세요."
          maxlength="10"
        />
        {label}
        <Button
          variant="basic"
          state={isValidComment(comment) ? "enabled" : "disabled"}
          buttonStyle={registerButtonStyle}
          onClick={onClickRegister}
        >
          등록
        </Button>
      </Footer>
    </Wrapper>
  );
}

export default CommentCreator;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 209px;
  padding: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary4};
`;

const Footer = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 119px;
  border-radius: 8px;
  padding: 16px;
  &::placeholder {
    font-weight: 500;
    font-size: 18px;
  }
`;

const nicknameInputStyle = css`
  display: block;
  width: 285px;
  height: 32px;
  border-radius: 8px;
  padding: 9px 16px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
  }
`;

const registerButtonStyle = css`
  width: 57px;
  height: 32px;
  font-weight: 600px;
  font-size: 14px;
`;
