import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { SearchIcon } from "../Icons/Message";
import Input from "./Input";

export default function InputSearch(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const handleFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  const handleBlur = useCallback((event) => {
    event.preventDefault();
    setIsFocused(false);
  }, []);

  console.log(isFocused);

  const { placeholder } = props;

  return (
    <>
      <Input
        type="search"
        placeholder={placeholder}
        icon={<SearchIcon size={20} fill="#536471" />}
        onBlur={handleBlur}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
        {...props}
      />
      {isFocused && (
        <div style={{ position: "relative" }}>
          <PopUp>
            <Search>
              <span>Try searching for people, topics, or keywords</span>
            </Search>
          </PopUp>
        </div>
      )}
    </>
  );
}

const PopUp = styled.div`
  min-width: 375px;
  width: 100%;
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  min-height: 100px;
  position: absolute;
  top: 1px;
  right: 0;
  z-index: 1;
  left: -9px;
`;

const Search = styled.div`
  line-height: 20px;

  text-align: center;
  display: block;
  align-items: center;
  padding: 20px 12px 12px 12px;
  span {
    color: rgb(83, 100, 113);
    font-weight: 400;
    font-size: 15px;
  }
`;
