import React from "react";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const resetStyle = css`
  ${emotionNormalize}
`;

function GlobalStyle(props) {
  return <Global styles={resetStyle} />;
}

export default GlobalStyle;
