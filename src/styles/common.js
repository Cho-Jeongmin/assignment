import { css } from "@emotion/react";

export const hoverPointer = css`
  &:hover {
    cursor: pointer;
  }
`;

export const hideScrollBar = css`
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
