import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { OptionIcon, SearchIcon } from "../Icons/Message";
import InputSearch from "../Input/InputSearch";
import List from "../List";

export const SearchTweet = () => {
  let [value, setValue] = useState("");
  let router = useRouter();
  return (
    <Wrapper>
      <SearchPart>
        <InputSearch
          placeholder="Search Twitter"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </SearchPart>

      {router.pathname !== "/explore" && (
        <List title="Trends for you" src="explore"></List>
      )}

      <List title="Who to follow" icon={<OptionIcon />} src="lists"></List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: sticky; */
  /* height: 100%; */
  /* min-height: 1087px; */
  /* width: 100%; */
  min-width: 350px;
  margin-left: 25px;
  margin-bottom: 12px;
  position: relative;
  padding-top: 12px;
  padding-bottom: 64px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Search = styled.div`
  position: absolute;
  top: 8px;
  left: 30px;
`;

const SearchPart = styled.div`
  /* background-color: #eff3f4; */
  /* max-width: 350px; */
  /* width: 100%; */
`;
