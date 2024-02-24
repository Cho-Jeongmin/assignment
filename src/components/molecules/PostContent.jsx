import { css } from "@emotion/react";
import React from "react";
import { theme } from "../../styles/theme";
import Text from "../atoms/Text";

function PostContent(props) {
  return (
    <div>
      <Text textStyle={contentStyle}>{`안녕하세요. 가이드미입니다.

  아래 기간동안 휴무로 인해 업무가 중단됩니다.
  
  휴무기간 : 2023.12.25 - 2024.01.02 9일간
  
  문의 답변은 2024.01.03 오전에 순차적으로 진행됩니다.
  
  감사합니다.`}</Text>
    </div>
  );
}

export default PostContent;

const contentStyle = css`
  font-weight: 600;
  line-height: 29px;
  white-space: pre;
  color: ${theme.colors.grayscale70};
`;
