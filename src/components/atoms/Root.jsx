import styled from "@emotion/styled";
import React from "react";

function Root({ rootStyle, children, ...rest }) {
  return (
    <Div rootStyle={rootStyle} {...rest}>
      {children}
    </Div>
  );
}

export default Root;

const Div = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
