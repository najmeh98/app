import { Children, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { SearchTweet } from "./searchTweet/SearchTweet";
import { ContentWrapper } from "./share/Containers";
import SlidebarOption from "./Sidebar/SlidebarOption";
import { notmobile } from "./utils/media";

export const Layout = ({ children }) => {
  return (
    <ContentWrapper style={{ display: "flex", flex: "1 1 1" }}>
      <Container>
        <SlidebarOption />
        {/* <Listtweet> */}
        <Main>{children}</Main>
        {/* </Listtweet> */}
        {/* <div style={{ mathWidth: "200px", width: "100%" }}></div> */}
        <SearchTweet />
      </Container>
    </ContentWrapper>
  );
};

const Listtweet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 100%;
  min-width: 600px;
`;
