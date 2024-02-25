import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function SLink({ to, children }) {
  return <Wrapper to={to}>{children}</Wrapper>;
}

export default SLink;

const Wrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;
