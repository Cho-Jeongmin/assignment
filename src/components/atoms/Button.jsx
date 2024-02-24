/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { hoverPointer } from "../../styles/common";
import { theme } from "../../styles/theme";

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

  outlined: css`
    font-size: 19px;
    font-weight: 500;
    width: 181px;
    height: 46px;
    border: 1px solid black;
    border-radius: 10px;
  `,

  basic: css`
    width: 57px;
    height: 32px;
    background: ${theme.colors.primary1};
    color: white;
    font-weight: 600px;
    font-size: 14px;
    border-radius: 10px;
  `,
};
