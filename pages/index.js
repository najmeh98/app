/* eslint-disable import/no-anonymous-default-export */
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { router, useRouter } from "next/router";
import { nanoid } from "nanoid";
import { ContentWrapper } from "../components/share/Containers";
import { useTheme } from "styled-components";
import {
  deleterequest,
  getDatarequest,
  SendPostrequest,
} from "../components/Api";
import {
  LikeIcon,
  ReplyIcon,
  RetplyIcon,
  RetweetIcon,
} from "../components/Icons/Icons";
import Home from "./home";
import { Layout } from "../components/Layout";
import { AppContext } from "../components/AppContext";
import LoginModal from "../components/LoginModal";

import { StandardButton } from "../components/StandardButton";
import SlidebarOption from "../components/SlidebarOption";

// eslint-disable-next-line react/display-name
export default () => {
  //  const router = useRouter();
  const { isLogginedIn } = useContext(AppContext);
  console.log(isLogginedIn);
  // useEffect(() => {
  //   if (!isLogginedIn) {
  //     router.push({ pathname: "/" });
  //   }
  // }, [isLogginedIn, router]);

  return (
    <ContentWrapper>
      {isLogginedIn ? (
        <Wrapper>
          <SlidebarOption />
          <Home />
        </Wrapper>
      ) : (
        <LoginModal />
      )}
    </ContentWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
