import React, { useState } from "react";
import link from "next/Link";
import styled, { css } from "styled-components";
import router, { useRouter } from "next/router";
import {
  HomeIcon,
  SearchIcon,
  ProfileIcon,
  NotidicationIcon,
  MessageIcon,
  BookmarkICon,
  ListICon,
  MoreIcon,
} from "./Icons/Icons";
import { TwitterIcon } from "./home/icons/icons";
import Space from "./share/Space";
import { Flex } from "./share/Containers";
import { SidebarItem } from "./Sidebar/SidebarItem";
import { Message } from "./Icons/Message";
import { Home } from "./Icons/Home";
import { Explore } from "./Icons/Explore";

const SlidebarData = [
  {
    title: "Home",
    image: <Home />,
    path: "/home",
  },
  {
    title: "Explore",
    image: <Explore />,
    path: "/explore",
  },
  {
    title: "Notifications",
    image: <NotidicationIcon />,
    path: "/notifications",
  },
  {
    title: "Message",
    image: <Message />,
    path: "/message",
  },
  {
    title: "Bookmarks",
    image: <BookmarkICon />,
    path: "/bookmarks",
  },
  {
    title: "Lists",
    image: <ListICon />,
    path: "/lists",
  },
  {
    title: "Profile",
    image: <ProfileIcon />,
    path: "/profile",
  },
  {
    title: "More",
    image: <MoreIcon />,
    path: "/more",
  },
];

export default function SlidebarOption() {
  const [isClick, setisClick] = useState("");

  const router = useRouter();
  return (
    <Wrapper>
      <TwitterIcon />

      <Space vertical={20} />

      <ul style={{ paddingLeft: "0px" }}>
        {SlidebarData.map((item, index) => (
          // <Items
          //   onClick={() =>
          //     path && router.push(path).then(() => window.scrollTo(0, 0))
          //   }
          //   href={href}
          //   target="_blank"
          //   //  isActive ={router.asPath.includes(item.link)}
          //   isActive={router.asPath.includes(path)}
          //   onClick={() => {
          //     setisClick(index);
          //   }}
          //   isClick={isClick == index}
          // >
          //   {image}
          //   <span>{title} </span>
          // </Items>
          <SidebarItem
            onClick={() =>
              item.path &&
              router.push(item.path).then(() => window.scrollTo(0, 0))
            }
            {...item}
            key={index}
            isActive={router.asPath.includes(item.path)}
          />
        ))}
      </ul>
      <Tweet>Tweet</Tweet>
    </Wrapper>
  );
}

const Tweet = styled.div`
  background-color: rgb(26, 140, 216);
  box-shadow: rgb(0, 0, 0, 0.22) 0px 8px 28px;
  transition-duration: 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 3.25rem;
  //padding: 10px 0px;
  //  transition: all 0.3s ease 0s;
  color: #fff;
  font-size: 20px;
  border-radius: 25px;
  transition-property: background-color, box-shadow;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  //  max-width: 270px;
  //width: 100%;
  // flex: 1 1 1;
`;
