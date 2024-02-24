import styled from "@emotion/styled";
import React from "react";

function Root({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Root;

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
