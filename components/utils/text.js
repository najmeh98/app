import React from "react";
import styled, { css } from "styled-components";
export default function Text({ children }) {
  return <Paragraph>{children}</Paragraph>;
}
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: rgb(15, 20, 25);
  cursor: pointer;
  padding: 16px;
  &:hover {
    background-color: rgba(247, 249, 249);
  }
`;
