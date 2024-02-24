/** @jsxImportSource @emotion/react */
import React from "react";

function Text({ textStyle, children }) {
  return <p css={textStyle}>{children}</p>;
}

export default Text;
