import { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { ContentWrapper } from "./share/Containers";
import SlidebarOption from "./SlidebarOption";

export const Layout = ({ children }) => {
  return (
    <ContentWrapper style={{ display: "flex", flex: "1 1 1" }}>
      <Container>
        <SlidebarOption />
        <Listtweet>
          <Main>{children}</Main>
        </Listtweet>
        <div style={{ mathWidth: "200px", width: "100%" }}></div>
      </Container>
    </ContentWrapper>
  );
};

const Listtweet = styled.div`
  display: flex;
  flex-direction: column;
  //max-width: 400px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-right: 1px solid rgb(239, 243, 244);
  border-left: 1px solid rgb(239, 243, 244);
  height: 100vh;
`;
