import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function CommentCreator(props) {
  return (
    <Wrapper>
      <TextArea placeholder="소중한 댓글을 남겨주세요."></TextArea>
      <Footer>
        <Input
          inputStyle={nicknameInputStyle}
          type="text"
          placeholder="닉네임을 입력해주세요."
        />
        <Button theme="basic">등록</Button>
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
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 119px;
  border-radius: 8px;
  padding: 16px;
  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.grayscale60};
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
    color: ${({ theme }) => theme.colors.grayscale60};
  }
`;
