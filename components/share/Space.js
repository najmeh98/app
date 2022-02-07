import React from "react";
import styled from "styled-components";

export default function Space({ vertical, horizontal }) {
  return <div style={{ width: `${horizontal}px`, height: `${vertical}px` }} />;
}

export const VerticalSpace = ({ height }) => <StyledSpace height={height} />;

const StyledSpace = styled.div`
  height: ${(p) => p.height};
  width: 100%;
`;
