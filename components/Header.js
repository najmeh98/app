import React from "react";
import styled from "styled-components";
import { TimelineProp } from "./Icons/Icons";
import Space from "./share/Space";

export default function Header({ children }) {
  return (
    <Wrapper
      style={{ height: "55px", backgroundColor: " hsla(0,0%,100%,0.8)" }}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //width: 100%;
  height: 53px;
  border-bottom: 1px solid rgb(230, 236, 240);
  // position: fixed;
  padding-left: 15px;
  padding-right: 15px;
`;
