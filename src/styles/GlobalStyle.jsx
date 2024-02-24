import React from "react";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const resetStyle = css`
  ${emotionNormalize};
  * {
    font-family: "Pretendard" !important;
  }
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
  ,
  button {
    background: none;
    border: none;
  }
`;

function GlobalStyle(props) {
  return <Global styles={resetStyle} />;
}

export default GlobalStyle;
