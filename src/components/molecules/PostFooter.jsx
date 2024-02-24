import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as HeartFullIcon } from "../../assets/icons/heartFull.svg";
import { ReactComponent as HeartEmptyIcon } from "../../assets/icons/heartEmpty.svg";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme";

function PostFooter(props) {
  return (
    <Wrapper>
      <HeartFullIcon />
      <Text textStyle={heartCountStyle}>234</Text>
      <Button theme="outlined">목록으로 돌아가기</Button>
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

const heartCountStyle = css`
  font-size: 15px;
  color: ${theme.colors.grayscale60};
  margin-left: 6.5px;
  margin-right: 15.5px;
`;
