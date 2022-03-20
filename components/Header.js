import React from "react";
import styled from "styled-components";
import { TimelineProp } from "./Icons/Icons";
import Space from "./share/Space";

export default function Header({ children }) {
  return (
    <Row>
      <Wrapper>{children}</Wrapper>
    </Row>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 55px; */
  border-bottom: 1px solid rgb(230, 236, 240);
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  /* width: 100%; */
`;

export const Row = styled.div`
  position: sticky;
  width: 100%;
  right: 0px;
  top: 0px;
  left: 0;
  z-index: 3;
  /* height: 100%; */
`;
