/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useContext } from "react";
import styled, { css } from "styled-components";
import { styles } from ".";
import { useEffect, useState } from "react";
import { router, useRouter } from "next/router";
import {
  deleterequest,
  getDatarequest,
  SendPostrequest,
} from "../components/Api";
import {
  EmpjiIcon,
  GifIcon,
  LikeIcon,
  MediaIcon,
  ReplyIcon,
  RetweetIcon,
  TimelineProp,
} from "../components/Icons/Icons";
import { StandardButton } from "../components/StandardButton";
import { StandardInput } from "../components/StandardInput";
import SlidebarOption from "../components/SlidebarOption";
import {
  Flex,
  FlexRow,
  Flex_end,
  VerticalLine,
} from "../components/share/Containers";
import Space, { VerticalSpace } from "../components/share/Space";
import Header from "../components/Header";
//import Login from "../login";
import { nanoid } from "nanoid";
import Replytweet from "../components/Replytweet";
import { Layout } from "../components/Layout";
import { AppContext, useAppContext } from "../components/AppContext";
import { Button } from "../components/Button/Button";
import { Avatar } from "../components/Avatar";
import { notmobile } from "../components/utils/media";
import axios from "axios";
import PopupContent from "../components/style/PopupContent";
import { Tweet } from "../components/Tweet";
import Link from "next/link";

export default function Home() {
  const [tweets, setTweets] = useState();
  const [newTweet, setNewTweet] = useState("");
  const [activetweetId, setActivetweetId] = useState(); //ایدی توییت در استیت ذخیره میکنیم برای ریپلای و .. از همون ایدی استفاده میشه
  const [replyTweet, setReplyTweet] = useState("");
  const [showReply, setshowReply] = useState();
  const [editingTweet, seteditingTweet] = useState(null);
  const [popUp, setPopUp] = useState(false);

  const { isLogginedIn, userName, token } = useContext(AppContext);

  // برای یک توییت
  let activeTweet =
    tweets && tweets.find((tweet) => tweet.id === activetweetId);
  let replies =
    tweets && tweets.filter((tweet) => tweet.replyToId === activetweetId);

  // توییت هایی که ریپلای نیستن

  let mainTweets = tweets && tweets.filter((tweet) => !tweet.replyToId);

  let url;
  let data;
  let ID = nanoid();

  // ارسال رپیلای
  const handleReplyTweet = (id) => {
    //event.preventDefault();
    url = `edit/${ID}`;
    SendPostrequest((data = { tweet: replyTweet }), url)
      .then((replyTweet) => {
        setshowReply((data) => [replyTweet, ...data]);
        console.log(replyTweet);
      })
      .catch((err) => console.log(err));

    //setReply("");
  };

  const router = useRouter();
  let { id } = router.query;

  // نشان دادن توییت
  useEffect(() => {
    try {
      url = "list";
      getDatarequest(url)
        .then((listTweet) => {
          setTweets(listTweet);
          console.log(listTweet);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // نشان دادن ریپلای
  useEffect(() => {
    url = `replies/${id}`;
    getDatarequest(url)
      .then((data) => {
        setshowReply(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //handle Submit
  //ارسال توییت
  const handleSubmit = (event) => {
    event.preventDefault();
    url = "new";
    console.log(userName);
    SendPostrequest((data = { tweet: newTweet }), url, token)
      .then((newTweet) => {
        setTweets((list) => [newTweet, ...list]);
        console.log((list) => [newTweet, ...list]);
      })
      .catch((err) => console.log(err));

    setNewTweet("");
  };

  // حذف توییت
  const handleDeletetweet = (id) => {
    if (!id) return;
    url = `delete/${id}`;
    deleterequest(url)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    let index = tweets.findIndex((p) => p.id === id);
    setTweets([...tweets.slice(0, index), ...tweets.slice(index + 1)]);
  };

  return (
    <>
      <Main>
        <Wrapper>
          <>
            <Header>
              <h3>Home</h3>
              <Button icon>
                <TimelineProp />
              </Button>
            </Header>

            <Space vertical={20} />
            <Container>
              <Avatar src="/images/girl.jpg" />
              <Flex>
                <Textarea
                  cols={50}
                  rows={0}
                  placeholder="What's the happening?"
                  value={newTweet}
                  onChange={(event) => {
                    setNewTweet(event.currentTarget.value);
                  }}
                />

                {/* Icon */}
                <FlexRow>
                  <div style={{ display: "flex", alinItems: "center" }}>
                    <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                      <Button icon>
                        <MediaIcon />
                      </Button>
                    </label>
                    <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                      <Button icon>
                        <GifIcon />
                      </Button>
                    </label>
                    <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                      <Button icon>
                        <EmpjiIcon />
                      </Button>
                    </label>
                  </div>
                  {/* <Flex_end> */}
                  <StandardButton onClick={handleSubmit}>
                    {" "}
                    Tweet{" "}
                  </StandardButton>
                  {/* </Flex_end> */}
                </FlexRow>
              </Flex>
            </Container>

            <VerticalSpace height="10px" />
          </>

          <VerticalLine />
          {/* <Tweet tweets={tweets} /> */}
          {tweets &&
            tweets.length !== 0 &&
            tweets.map((tweet, index) => {
              const link = `/${tweet.author.username}/status/${tweet.id}`;
              // <Fragment key={tweet.id}>
              //   <ContentWrapper>
              //     <div style={{ padding: "20px" }}>
              return (
                <div key={tweet.id}>
                  {/* اسم کاربر */}
                  {/* <p>{userName}</p>
                    <p>{tweet.text}</p> */}

                  {/* <Item> */}
                  {/* <span
                        onClick={() => {
                          setPopUp(!popUp);
                          setActivetweetId(tweet.id);
                          // بجای اینکه ایدی در استیت باشه توییت در استیت میزاریم در پاپ اپ برای نمایش توییت استفاده میکنیم
                        }}
                      >
                        <ReplyIcon />
                      </span>
                      <RetweetIcon />
                      <LikeIcon /> */}
                  <Tweet
                    tweet={tweet}
                    onClick={() => {
                      setPopUp(!popUp);
                      setActivetweetId(tweet.id);
                      // بجای اینکه ایدی در استیت باشه توییت در استیت میزاریم در پاپ اپ برای نمایش توییت استفاده میکنیم
                    }}
                    tweetlink={link}
                  />

                  <StandardButton
                    onClick={() => handleDeletetweet(tweet.id)}
                    //  style={{ display: "flex" }}
                  >
                    Delete tweet
                  </StandardButton>
                </div>
              );
              /* </Item> */
              /* </div>
                </ContentWrapper>
              </Fragment> */
            })}

          {showReply &&
            showReply.length !== 0 &&
            showReply.map((data, index) => (
              //console.log(reply);
              <ContentWrapper key={data.id} style={{ paddingLeft: "30px" }}>
                {data.text}
              </ContentWrapper>
            ))}
        </Wrapper>
      </Main>
      {popUp && (
        <PopupContent
          height={300}
          w={400}
          top={10}
          left={33}
          onClick={() => {
            setPopUp(false);
            setActivetweetId();
          }}
        >
          <Textarea
            cols={50}
            rows={0}
            placeholder="Tweet your reply?"
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.currentTarget.value);
            }}
          />

          <Flex_end>
            <StandardButton onClick={() => handleReplyTweet(activetweetId)}>
              {" "}
              Reply{" "}
            </StandardButton>
          </Flex_end>
        </PopupContent>
      )}
    </>
  );
}

//! از این روش در همه ی صفحه ها میخواستم استفاده کنم ولی اجرا نمیشه
// که نیازی به تعریف sildbarItem
//در صفحه اصلی نباشه
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
const Main = styled.div`
  max-width: 610px;
  width: 100%;
  // margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${notmobile(css`
    border-right: 1px solid rgb(239, 243, 244);
    border-left: 1px solid rgb(239, 243, 244);
  `)}
`;

const Wrapper = styled.div`
  // border-right: 1px solid rgb(239, 243, 244);
  //border-left: 1px solid rgb(239, 243, 244);
  height: 100vh;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  // max-width: 250px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  p {
    font-size: 14px;
  }
`;

const Textarea = styled.textarea`
  font-family: ${(p) => p.theme.fontFamily};
  border: none;
  outline: none;
  padding: 10px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 10px;
`;
