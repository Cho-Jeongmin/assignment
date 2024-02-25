/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { hoverPointer } from "../../styles/common";
import { theme } from "../../styles/theme";

function Button({ buttonStyle, variant, state, children, ...rest }) {
  return (
    <Btn css={[variants[variant], states[state], buttonStyle]} {...rest}>
      {children}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  ${hoverPointer}
`;

const variants = {
  basic: css`
    border-radius: 10px;
  `,
  circle: css`
    border-radius: 50%;
  `,
  outlined: css`
    border: 1px solid black;
    border-radius: 10px;
  `,
};

const states = {
  enabled: css`
    color: white;
    background: ${theme.colors.primary1};
  `,
  selected: css`
    color: white;
    background: ${theme.colors.primary1};
  `,
  hover: css`
    &:hover {
      background: ${theme.colors.primary5};
    }
  `,
  disabled: css`
    color: white;
    background: ${theme.colors.grayscale40};
    &:hover {
      cursor: default;
    }
  `,
};
