/** @jsxImportSource @emotion/react */
import React from "react";

function Input({
  inputStyle,
  type,
  name,
  value,
  onChange,
  placeholder,
  maxlength,
}) {
  return (
    <div>
      <input
        css={inputStyle}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxlength={maxlength}
      />
    </div>
  );
}

export default Input;
