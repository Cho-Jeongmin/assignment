import React from "react";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const resetStyle = css`
  ${emotionNormalize};
  input {
    border: none;
  }
  input:focus {
    outline: none;
  }
  div,
  input {
    box-sizing: border-box;
  }
`;

function GlobalStyle(props) {
  return <Global styles={resetStyle} />;
}

export default GlobalStyle;
