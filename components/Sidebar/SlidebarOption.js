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
  Tweet2,
  NewTweet,
} from "../Icons/Icons";
import { TwitterIcon, TwitterLogo } from "../home/icons/icons";
import Space from "../share/Space";
import { Flex } from "../share/Containers";
import { SidebarItem } from "./SidebarItem";
import { ArrowIcon, Message, MoreInfoICon } from "../Icons/Message";
import { Home, HomeFill, HomeSelected } from "../Icons/Home";
import { Explore, ExploreFill } from "../Icons/Explore";
import { desktop, notmobile, tablet } from "../utils/media";
import { AppContext } from "../AppContext";
import {
  BookmarkFill,
  ListFill,
  MoreFill,
  NotificationFill,
  ProfileFill,
} from "../Icons/FillIcon";
import { Button, CustomLink } from "../Button/Button";
import Branding from "../Branding";
import useWindowSize from "../hooks/useWindowSize";
import Menu from "../UserInfo/Menu";
import Text from "../utils/text";

const SlidebarData = [
  {
    title: "Home",
    image: <Home />,
    imageSelected: <HomeFill />,
    path: "/home",
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
  const { Logout, userName } = useContext(AppContext);
  let { width } = useWindowSize();

  const router = useRouter();

  let Profile = (
    <User>
      <ProfilePhoto>
        <img
          src="/images/default profile.jpg"
          alt="profilePhoto"
          height={40}
          width={40}
        />
      </ProfilePhoto>
      <UserInfo>
        <span>Najmeh {userName}</span>
        <p>@ Najmeh_foroughi{userName}</p>
      </UserInfo>

      <Dot>
        <MoreInfoICon size={20} />
      </Dot>
    </User>
  );

  return (
    // استایل پوزیشن فیکس برای اینجا
    // style={{ position: "fixed", overflowX: "hidden", overflowY: "auto" }}
    <div>
      <Wrapper>
        <div>
          <Button icon>
            <Branding />
          </Button>
          <ul style={{ paddingLeft: "0px", margin: "0px" }}>
            {SlidebarData.map((item, index) => (
              <SidebarItem
                onClick={() => item.path && router.push(item.path)}
                href={item.path}
                {...item}
                key={index}
                isActive={router.asPath.includes(item.path)}
                //  isActive= {router.pathname === item.path}
              />
            ))}
          </ul>
          <Space vertical={10} />
          <Tweet>Tweet </Tweet>

          {width > 500 && width < 1270 && (
            <Button new>
              <NewTweet />
            </Button>
          )}
        </div>
        <Menu title={Profile} ArrowIcon={<ArrowIcon size={20} fill="#fff" />}>
          <Text>Add an existind accounts</Text>
          <Text>Manage accounts</Text>
          <Text onClick={() => Logout()}>Log out @{userName}</Text>
        </Menu>

        {/* {width > 500 && width <= 1300 ? (
        <Space horizontal={50} />
      ) : (
        <Space horizontal={250} />
      )} */}
        {/* <Space horizontal={250} /> */}
      </Wrapper>
      {/* <Space horizontal={350} /> */}
    </div>
  );
}

const Tweet = styled.div`
  background-color: rgb(29, 155, 240);
  box-shadow: rgb(0, 0, 0, 0.22) 0px 8px 28px;
  transition-duration: 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 3.25rem;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  color: #fff;
  font-size: 20px;
  border-radius: 25px;
  transition-property: background-color, box-shadow;
  ${desktop(css`
    display: none;
  `)}
  &:hover {
    background-color: rgba(26, 140, 216);
  }
`;

const Wrapper = styled.div`
  /* height: 100%; */
  /* position: fixed; */
  /* padding-right: 16px; */
  /* height: 100vh; */
  /* max-width: 270px; */
  /* position: sticky; */
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100vh;
  ${desktop(css`
    //width: 270px;
  `)}
  ${tablet(css`
    //  width: 88px;
  `)}
`;

const Dot = styled.div`
  ${desktop(css`
    display: none;
  `)}
`;
const User = styled.div`
  margin: 25px 0px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
  /* width: 100%; */
  &:hover {
    transition: color 100ms ease-in-out;
    background-color: rgba(15, 20, 25, 0.1);
    border-radius: 50px;
  }
`;

const ProfilePhoto = styled.div`
  img {
    border-radius: 50px;
    display: block;
    /* background-color: rgba(255, 255, 255, 1); */
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  margin: 0px 12px;
  line-height: 20px;
  white-space: nowrap;
  span {
    font-weight: 700;
    color: rgb(15, 20, 25);
  }
  p {
    font-weight: 400;
    color: rgb(83, 100, 113);
    margin: 0px;
  }
  ${desktop(css`
    display: none;
  `)}
`;
