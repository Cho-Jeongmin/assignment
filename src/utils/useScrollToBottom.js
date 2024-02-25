import { useRef } from "react";

export const useScrollToBottom = () => {
  const bottomRef = useRef();

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return { bottomRef, scrollToBottom };
};
