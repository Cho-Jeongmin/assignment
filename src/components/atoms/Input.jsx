/** @jsxImportSource @emotion/react */
import React from "react";

function Input({ inputStyle, onEnter, ...rest }) {
  const onKeyDown = (e) => {
    if (e.key === "Enter") onEnter();
  };

  return <input css={inputStyle} onKeyDown={onKeyDown} {...rest} />;
}

export default Input;
