import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import Link from "next/link";
import { FlexRow } from "../share/Containers";
export default function List({ children, src, title, icon, ...props }) {
  return (
    <Wrapper>
      <Container>
        <FlexRow>
          <h2 style={{ margin: "0px" }}>{title}</h2>
          <Button>{icon && icon}</Button>
        </FlexRow>
        {children}

        <More>
          <Link href={src}>
            <a>Show more</a>
          </Link>
        </More>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 350px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

const Container = styled.div`
  width: 100%;
  background-color: rgb(239, 243, 244);
  border-radius: 16px;
  cursor: pointer;
  /* padding-top: 16px; */
  /* padding-bottom: 60px; */
  border: 1px solid rgb(247, 249, 249);
  overflow: hidden;
  h2 {
    padding: 12px 16px;
    font-weight: bold;
    font-size: 19px;
  }
`;

const More = styled.div`
  padding: 15px;
  a {
    color: #1da1f2;
    text-decoration: none;
    outline-style: none;
  }
`;
