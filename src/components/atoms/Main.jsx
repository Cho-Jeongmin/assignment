import styled from "@emotion/styled";
import React from "react";

function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;

const Wrapper = styled.div`
  margin-top: 40px;
  width: 940px;
  display: flex;
  flex-direction: column;
`;
