import styled from "@emotion/styled";
import React from "react";

function Root({ children }) {
  return <Div>{children}</Div>;
}

export default Root;

const Div = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
