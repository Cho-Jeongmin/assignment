import { css } from "@emotion/react";
import React from "react";
import { theme } from "../../styles/theme";
import Text from "../atoms/Text";

function PostContent({ content }) {
  console.log("content", content);
  return (
    <div>
      <Text textStyle={contentStyle}>{content}</Text>
    </div>
  );
}

export default PostContent;

const contentStyle = css`
  font-weight: 600;
  line-height: 29px;
  white-space: pre-wrap;
  color: ${theme.colors.grayscale70};
  min-height: 50px;
`;
