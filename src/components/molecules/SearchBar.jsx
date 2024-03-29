import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Input from "../atoms/Input";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e) => setKeyword(e.target.value);

  const onClickDelete = () => {
    setKeyword("");
    onSearch("");
  };

  return (
    <Wrapper>
      <InputWrapper>
        <SSearchIcon />
        <Input
          inputStyle={searchInputStyle}
          type="text"
          value={keyword}
          onChange={onChangeKeyword}
          placeholder="검색어를 입력해주세요."
          onEnter={() => onSearch(keyword)}
        />
        <SDeleteIcon $hide={keyword.length == 0} onClick={onClickDelete} />
      </InputWrapper>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #f1f6fe;
  border: 1px solid rgba(134, 197, 255, 0.04);
  border-radius: 14px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 368px;
  height: 100%;
  position: relative;
`;

const searchInputStyle = css`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  padding: 10px 46px;
  &::placeholder {
    font-weight: 500;
    font-size: 15px;
  }
`;

const SSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 12px;
`;

const SDeleteIcon = styled(DeleteIcon)`
  position: absolute;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
  display: ${({ $hide }) => $hide && "none"};
`;
