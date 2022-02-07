/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import styled from "styled-components";
import { styles } from "..";
import { useEffect, useState } from "react";
import { router, useRouter } from "next/router";
import {
  deleterequest,
  getDatarequest,
  SendPostrequest,
} from "../../components/Api";
import { LikeIcon, ReplyIcon, RetweetIcon } from "../../components/Icons/Icons";
import { StandardButton } from "../../components/StandardButton";
import { StandardInput } from "../../components/StandardInput";
import { SidebarItem } from "../../components/Sidebar/SidebarItem";
import SlidebarOption from "../../components/SlidebarOption";
import {
  Flex,
  FlexRow,
  Flex_end,
  VerticalLine,
} from "../../components/share/Containers";
import Space, { VerticalSpace } from "../../components/share/Space";
import Header from "../../components/Header";
//import Login from "../login";
import { nanoid } from "nanoid";
import Replytweet from "../../components/Replytweet";
import { Layout } from "../../components/Layout";
import { useAppContext } from "../../components/AppContext";

export default function Home() {
  const [tweets, setTweets] = useState();
  const [newTweet, setNewTweet] = useState("");
  const [replyTweet, setReplyTweet] = useState("");
  const [showReply, setshowReply] = useState();
  const [editingTweet, seteditingTweet] = useState(null);
  const [popUp, setPopUp] = useState(false);

  let { userName, isLogginedIn } = useAppContext();

  let url;
  let data;
  let ID = nanoid();
  const handleReplyTweet = (id) => {
    //event.preventDefault();
    url = `edit/${ID}`;
    SendPostrequest((data = { tweet: replyTweet, userName }), url)
      .then((replyTweet) => {
        setshowReply((data) => [replyTweet, ...data]);
        //  console.log(res);
      })
      .catch((err) => console.log(err));

    setReply("");
  };

  // باید در Context بزارم

  const router = useRouter();
  let { id } = router.query;

  console.log(id);
  useEffect(() => {
    url = "list";
    getDatarequest(url)
      .then((list) => {
        setTweets(list);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    url = `replies/${id}`;
    getDatarequest(url)
      .then((data) => {
        setshowReply(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //handle Submit

  const handleSubmit = (event) => {
    event.preventDefault();
    url = "new";
    SendPostrequest((data = { tweet: newTweet, userName }), url)
      .then((newTweet) => {
        setTweets((list) => [newTweet, ...list]);
        //console.log((list) => [newTweet, ...list]);
      })
      .catch((err) => console.log(err));

    setNewTweet("");
  };

  const handleDeletetweet = (id) => {
    if (!id) return;
    url = `delete/${id}`;
    deleterequest(url)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    let index = tweets.findIndex((p) => p.id === id);
    setTweets([...tweets.slice(0, index), ...tweets.slice(index + 1)]);
  };

  console.log("tweets", tweets);

  return (
    <>
      {/* <SlidebarOption /> */}
      <Main>
        <Wrapper>
          <div style={{ padding: "0px 20px" }}>
            {/* <h3 style={{ height: "40px", width: "100%" }}>Home</h3> */}

            <Header />

            <FlexRow>
              <img
                src="./images/girl.jpg"
                alt="profile"
                width={50}
                height={50}
                style={{ borderRadius: "50px" }}
              />
              <StandardInput
                placeholder="What's the happening?"
                value={newTweet}
                onChange={(event) => {
                  setNewTweet(event.currentTarget.value);
                }}
              />
            </FlexRow>
            <Flex_end>
              <StandardButton onClick={handleSubmit}> Tweet </StandardButton>
            </Flex_end>
            <VerticalSpace height="10px" />
          </div>

          <VerticalLine />

          {tweets &&
            tweets.length !== 0 &&
            tweets.map((tweet, index) => (
              <Fragment key={tweet.id}>
                <ContentWrapper key={tweet.id}>
                  <div style={{ padding: "20px" }}>
                    <p>{tweet.name}</p>
                    <p>{tweet.text}</p>

                    <Item>
                      <span
                        onClick={() => {
                          setPopUp(!popUp);
                        }}
                      >
                        <ReplyIcon />
                      </span>
                      <RetweetIcon />

                      <LikeIcon />
                      <StandardButton
                        onClick={() => handleDeletetweet(tweet.id)}
                      >
                        Delete tweet
                      </StandardButton>
                    </Item>
                  </div>
                </ContentWrapper>
                {/* {reply &&
                  reply.length !== 0 &&
                  reply?.map((matn, index) => (
                    <>
                      <div>{matn.text}</div>
                    </>
                  ))} */}
              </Fragment>
            ))}

          {showReply?.length !== 0 &&
            // eslint-disable-next-line react/jsx-key
            showReply?.map((data, index) => <div>{data}</div>)}
        </Wrapper>
      </Main>
      {popUp && (
        <Replytweet
          onClick={() => handleReplyTweet()}
          replyTweet={replyTweet}
          setReplyTweet={setReplyTweet}
        />
      )}
    </>
  );
}

//! از این روش در همه ی صفحه ها میخواستم استفاده کنم ولی اجرا نمیشه
// که نیازی به تعریف sildbarItem
//در صفحه اصلی نباشه
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SidebarItem />
      {page}
    </Layout>
  );
};
const Main = styled.div`
  max-width: 600px;
  width: 100%;
  // margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
