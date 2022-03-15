import React from "react";
import styled, { css } from "styled-components";

export default function Titel({ children, mode, size }) {
  return (
    <Paragraph mode size>
      {children}
    </Paragraph>
  );
}
const Paragraph = styled.div`
  font-size: ${(p) => p.size}px;
  line-height: 20px;
  color: rgb(15, 20, 25);
  cursor: pointer;
  padding: 16px;
  margin: 0px;
  font-weight: ${(p) => p.mode};
`;
