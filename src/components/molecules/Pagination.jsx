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
  if (totalPages < shownPages) return 1;
  else {
    if (page - shownPages / 2 >= 1) {
      if (page <= totalPages - shownPages / 2) return page - shownPages / 2;
      else return totalPages - shownPages + 1;
    } else return 1;
  }
};

function Pagination({ page, setPage, totalPages }) {
  const shownPages = 6;
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
      <Button buttonStyle={arrowButtonStyle} state="hover" onClick={startPage}>
        <DoubleArrowBackIcon />
      </Button>
      <Button buttonStyle={arrowButtonStyle} state="hover" onClick={prevPage}>
        <ArrowBackIcon />
      </Button>
      {Array(Math.min(shownPages, totalPages))
        .fill(0)
        .map((_, index) => (
          <Button
            variant="circle"
            state={index + pageOffset == page ? "selected" : "hover"}
            buttonStyle={pageButtonStyle}
            onClick={() => setPage(index + pageOffset)}
            key={index}
          >
            {index + pageOffset}
          </Button>
        ))}
      <Button buttonStyle={arrowButtonStyle} state="hover" onClick={nextPage}>
        <ArrowForwardIcon />
      </Button>
      <Button buttonStyle={arrowButtonStyle} state="hover" onClick={endPage}>
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

const pageButtonStyle = css`
  width: 32px;
  height: 32px;
  font-weight: 600;
  font-size: 13px;
`;

const arrowButtonStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;
