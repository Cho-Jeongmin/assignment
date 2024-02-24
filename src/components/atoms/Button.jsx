/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { hoverPointer } from "../../styles/common";

function Button({ buttonStyle, theme, selected, onClick, children }) {
  return (
    <Wrapper
      css={[buttonStyle, themes[theme]]}
      $selected={selected}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button`
  ${hoverPointer}
  ${({ $selected, theme }) =>
    $selected && `background: ${theme.colors.primary1}; color: white`};
`;

const themes = {
  circle: css`
    width: 32px;
    height: 32px;
    border-radius: 50%;
  `,
};
