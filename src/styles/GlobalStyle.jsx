import React from "react";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { theme } from "./theme";

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
  input,
  textarea {
    box-sizing: border-box;
  }
  ,
  button {
    background: none;
    border: none;
  }
  ,
  p {
    margin: 0px;
  }
  ,
  textarea {
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  input::placeholder,
  textarea::placeholder {
    color: ${theme.colors.grayscale60};
  }
`;

function GlobalStyle(props) {
  return <Global styles={resetStyle} />;
}

export default GlobalStyle;
