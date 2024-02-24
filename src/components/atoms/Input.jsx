/** @jsxImportSource @emotion/react */
import React from "react";

function Input({ inputStyle, type, placeholder }) {
  return (
    <div>
      <input css={inputStyle} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
