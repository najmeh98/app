import { Children, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { SearchTweet } from "./searchTweet/SearchTweet";
import { ContentWrapper } from "./share/Containers";
import Space from "./share/Space";
import SlidebarOption from "./Sidebar/SlidebarOption";
import { useTheme } from "./Theme/ThemeContext";
import { notmobile } from "./utils/media";

export const Layout = ({ children }) => {
  let { theme } = useTheme();
  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <ContentWrapper style={{ display: "flex", flex: "1 1 1" }}>
        <Container>
          <SlidebarOption />
          <Main>{children}</Main>
          <SearchTweet />
        </Container>
      </ContentWrapper>
    </div>
  );
};

const Listtweet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* overflow-y: auto; */
`;

const Main = styled.div`
  width: 100%;
  max-width: 600px;
  ${notmobile(css`
    border-right: 1px solid rgb(239, 243, 244);
    border-left: 1px solid rgb(239, 243, 244);
  `)}
`;
