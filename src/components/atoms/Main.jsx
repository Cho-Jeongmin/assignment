import styled from "@emotion/styled";
import React from "react";

function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  padding-left: 40px;
  @media (max-width: 479px) {
    width: 479px;
  }
  @media (min-width: 480px) and (max-width: 979px) {
    width: 100%;
  }
  @media (min-width: 980px) {
    width: 980px;
  }
`;
