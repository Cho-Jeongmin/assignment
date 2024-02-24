/** @jsxImportSource @emotion/react */
import React from "react";

function Button({ buttonStyle, onClick, children }) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
