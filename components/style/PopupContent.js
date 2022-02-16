import React from "react";
import styled, { css } from "styled-components";
import { Exite } from "../Icons/Exite";

export default function PopupContent({
  w,
  onClick,
  height,
  children,
  left,
  top,
  popUp,
  setPopUp,
}) {
  return (
    <ContentWrapper>
      <Wrapper>
        <Container height={height} w={w} top={top} left={left}>
          <ExiteStyle onClick={onClick}>
            <Exite />
          </ExiteStyle>
          <div style={{ padding: "0px 16px", margin: "10px 0px" }}>
            {children}
          </div>
        </Container>
      </Wrapper>
    </ContentWrapper>
  );
}

const ExiteStyle = styled.div`
  padding: 0px 16px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  position: fixed;
  z-index: 1500;
  inset: 0px;
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0px;
  overflow: hidden;
  // z-index: -1;
`;
export const Container = styled.div`
  background: #fff;
  z-index: 3;
  position: absolute;
  // position: relative;
  overflow: hidden;
  //min-width: 500px;
  width: 100%;
  //max-width: 80vw;
  //max-width: 600px;
  ${({ w, height, hidden, gap, order, top, left }) => css`
    max-width: ${w ? `${w}px` : "640px"};
    height: ${height ? `${height}px` : "500px"};
    //display: ${hidden ? "none" : "flex"};
    align-items: center;
    //gap: ${gap ?? "14px"};

    //order: ${order};
    top: ${top ? `${top}%` : "10%"};
    left: ${left ? `${left}%` : "30%"};
  `}

  border: 1px solid #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%),
    0px 1px 14px 0px rgb(0 0 0 / 12%);
  line-height: 3rem;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
`;
