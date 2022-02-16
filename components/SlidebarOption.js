import React, { useContext, useState } from "react";
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
import { Home, HomeFill, HomeSelected } from "./Icons/Home";
import { Explore, ExploreFill } from "./Icons/Explore";
import { notmobile } from "./utils/media";
import { AppContext } from "./AppContext";
import {
  BookmarkFill,
  ListFill,
  MoreFill,
  NotificationFill,
  ProfileFill,
} from "./Icons/FillIcon";

const SlidebarData = [
  {
    title: "Home",
    image: <Home />,
    imageSelected: <HomeFill />,
    path: "/",
  },
  {
    title: "Explore",
    image: <Explore />,
    imageSelected: <ExploreFill />,
    path: "/explore",
  },
  {
    title: "Notifications",
    image: <NotidicationIcon />,

    imageSelected: <NotificationFill />,
    path: "/notifications",
  },
  // {
  //   title: "Message",
  //   image: <Message />,
  //   path: "/message",
  // },
  {
    title: "Bookmarks",
    image: <BookmarkICon />,
    imageSelected: <BookmarkFill />,
    path: "/bookmarks",
  },
  {
    title: "Lists",
    image: <ListICon />,
    imageSelected: <ListFill />,
    path: "/lists",
  },
  {
    title: "Profile",
    image: <ProfileIcon />,
    imageSelected: <ProfileFill />,
    path: "/profile",
  },
  {
    title: "More",
    image: <MoreIcon />,
    imageSelected: <MoreFill />,
    path: "/more",
  },
];

export default function SlidebarOption() {
  const [isClick, setisClick] = useState("");

  const { Logout } = useContext(AppContext);

  const router = useRouter();

  return (
    <Wrapper>
      <TwitterIcon />

      <Space vertical={10} />

      <ul style={{ paddingLeft: "0px", margin: "0px" }}>
        {SlidebarData.map((item, index) => (
          <SidebarItem
            onClick={() => item.path && router.push(item.path)}
            {...item}
            key={index}
            isActive={router.asPath.includes(item.path)}
            //  isActive= {router.pathname === item.path}
          />
        ))}
      </ul>
      <Space vertical={20} />
      <Tweet>Tweet</Tweet>
      <Space vertical={70} />
      <Userdata>
        <img
          src="/images/girl.jpg"
          alt="profilePhoto"
          height={30}
          width={30}
          style={{ borderRadius: "50px", marginRight: "10px" }}
        />

        <p onClick={() => Logout()}>Log out</p>
      </Userdata>
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
  padding: 0px 20px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  //margin-top: -4%;
  // border-right: 1px solid rgb(239, 243, 244);
  //  max-width: 270px;
  //width: 100%;
  // flex: 1 1 1;
`;

const Userdata = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
