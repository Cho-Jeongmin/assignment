/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/pagination/arrowBack.svg";
import { ReactComponent as ArrowForwardIcon } from "../../assets/icons/pagination/arrowForward.svg";
import { ReactComponent as DoubleArrowBackIcon } from "../../assets/icons/pagination/doubleArrowBack.svg";
import { ReactComponent as DoubleArrowForwardIcon } from "../../assets/icons/pagination/doubleArrowForward.svg";
import { theme } from "../../styles/theme";
import Button from "../atoms/Button";

const getPageOffset = (page, totalPages, shownPages) => {
  if (page - shownPages / 2 >= 1) {
    if (page <= totalPages - shownPages / 2) return page - shownPages / 2;
    else return totalPages - shownPages + 1;
  } else return 1;
};

function Pagination({ page, setPage, shownPosts, totalPosts }) {
  const shownPages = 6;
  const totalPages = Math.ceil(totalPosts / shownPosts);
  const pageOffset = getPageOffset(page, totalPages, shownPages);

  const prevPage = () => {
    page > 1 && setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    page < totalPages && setPage((prev) => prev + 1);
  };
  const startPage = () => setPage(1);
  const endPage = () => setPage(totalPages);

  return (
    <Wrapper>
      <Button buttonStyle={arrowButtonStyle} onClick={startPage}>
        <DoubleArrowBackIcon />
      </Button>
      <Button buttonStyle={arrowButtonStyle} onClick={prevPage}>
        <ArrowBackIcon />
      </Button>
      {Array(shownPages)
        .fill(0)
        .map((_, index) => (
          <Button
            theme="circle"
            selected={index + pageOffset == page}
            onClick={() => setPage(index + pageOffset)}
            key={index}
          >
            {index + pageOffset}
          </Button>
        ))}
      <Button buttonStyle={arrowButtonStyle} onClick={nextPage}>
        <ArrowForwardIcon />
      </Button>
      <Button buttonStyle={arrowButtonStyle} onClick={endPage}>
        <DoubleArrowForwardIcon />
      </Button>
    </Wrapper>
  );
}

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const arrowButtonStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  &:hover {
    background: ${theme.colors.primary5};
  }
`;
