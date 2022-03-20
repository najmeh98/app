import router, { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppContext";
import {
  Dot,
  LikeFillIcon,
  LikeIcon,
  ReplyIcon,
  RetweetIcon,
  ShareICon,
} from "./Icons/Icons";
import { ContentWrapper, FlexRow } from "./share/Containers";
import { StandardButton } from "./StandardButton";
import Link from "next/link";
// import Text from "./utils/text";
import { Avatar } from "./Avatar";
import Media from "./Media";
import { useTheme } from "./Theme/ThemeContext";
import Menu from "./UserInfo/Menu";
import Titel from "./utils/text";
import { TimeSince, timeSince } from "./utils/timeSince";
import { SendPostrequest } from "./Api";
export const Tweet = ({
  tweet,
  onClick,
  tweets,
  tweetText,
  tweetAuthor,
  tweetId,
  tweetlink,
  createdAt,
  setTweets,
}) => {
  const router = useRouter();
  let { theme } = useTheme();

  const [likeTweet, setLikeTweet] = useState(false);

  console.log(theme);
  console.log(theme.tweetColor.replyHover);
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

  const handleLikeTweet = (id) => {
    if (!id) return;

    SendPostrequest(`toggleLike/${id}`)
      .then((res) => {
        console.log(res);
        setLikeTweet(true);
        console.log(likeTweet);
      })
      .catch((error) => {
        console.log(error);
        // setLikeTweet(false);
      });
    let index = tweets.findIndex((p) => p.id === id);
    setTweets([
      ...tweets.slice(0, index),
      { ...tweets[index], likes: tweets[index].likes + 1 },
      ...tweets.slice(index + 1),
    ]);
  };
  const handleUnlikeTweet = () => {
    if (!id) return;
    SendPostrequest(`toggleunlike/:id`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    let index = tweets.findIndex((p) => p.id === id);
    let count = tweets[index].likes - 1;
    setTweets([
      ...tweet.slice(0, index),
      { ...tweets[index], likes: count > 1 ? count : 1 },
      ...tweets.slice(index + 1),
    ]);
  };

  // useEffect(() => {
  //   setLikeTweet(true);
  // }, []);
  console.log(likeTweet);

  // let tweetAuthor = tweet?.author && tweet.author.username;
  //let tweetId = tweet?.id && tweet.id;
  const { userName } = useContext(AppContext);
  return (
    <>
      <Wrapper>
        {/* اسم کاربر */}
        <Container>
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "flex-start",
            }}
          >
            <Avatar />
          </div>
          <Content>
            <FlexRow style={{ width: "100%", margin: "2px" }}>
              <Row>
                <Text mode={900} size={17} color={theme.color.all_text_icon}>
                  {tweetAuthor}
                </Text>
                <Text color>@{tweetAuthor}</Text>
                <Text color>.</Text>
                <Text mode={400} size={15} color>
                  {TimeSince(createdAt)}
                </Text>
              </Row>
              <Item
                bgColor={theme.tweetColor.replyHover}
                hovercolor="rgb(29, 155, 240)"
              >
                {/* <Dot /> */}
                <Menu
                  title={<Dot />}
                  width={160}
                  style={{
                    right: "90px",
                    borderRadius: "8px",
                    bottom: "-35px",
                  }}
                  onClick={() => handleDeletetweet(tweet.id)}
                >
                  <Titel> Delete tweet</Titel>
                </Menu>
              </Item>
            </FlexRow>
            <Text>{tweetText}</Text>

            {/* third Row */}
            <FlexRow style={{ width: "425px", marginTop: "12px" }}>
              <Item
                onClick={onClick}
                hovercolor={theme.tweetColor.reply}
                bgColor={theme.tweetColor.replyHover}
                // style={{ backgroundColor: theme.tweetColor.replyHover }}
              >
                <ReplyIcon />
                <p>{}</p>
              </Item>
              <Item
                hovercolor={theme.tweetColor.retweet}
                bgColor={theme.tweetColor.retweetHover}
              >
                <RetweetIcon />
                <p>{}</p>
              </Item>

              <Item
                hovercolor={theme.tweetColor.like}
                bgColor={theme.tweetColor.likeHover}
                onClick={() => handleLikeTweet(tweet.id)}
              >
                {tweet.likes && tweet.likes > 0 ? (
                  <LikeFillIcon colorFill={theme.tweetColor.like} />
                ) : (
                  <LikeIcon />
                )}

                {tweet.likes && tweet.likes > 0 ? <p>{tweet.likes}</p> : ""}
                {/* {tweet.likes && tweet.likes !== 0 && <p>{tweet.likes}</p>} */}
              </Item>

              <Item
                hovercolor={theme.tweetColor.share}
                bgColor={theme.tweetColor.shareHover}
              >
                <ShareICon />
                <p>{}</p>
              </Item>
            </FlexRow>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${(p) => p.theme.color.borderColor};
`;

const Container = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: flex-start;
  grid-gap: 10px;
  cursor: pointer;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 0.3s ease background-color 0.3s ease;
  p {
    /* padding-left: 6px;
    padding-right: 6px; */
    font-size: 14px;
    line-height: 16px;
    margin: 0px;
    color: black;
  }
  svg {
    padding: 7px;
    fill: ${({ colorFill }) => colorFill};
  }

  &:hover {
    fill: ${({ hovercolor }) => hovercolor};
    p {
      color: ${({ hovercolor }) => hovercolor};
    }
    svg {
      background-color: ${({ bgColor }) => bgColor};
      border-radius: 50px;
    }
  }
  /* &.color:hover {
    fill: ${({ hovercolor }) => hovercolor};
  } */
`;

const Text = styled.p`
  font-size: ${(p) => p.size}px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.all_text_icon};
  /* color: rgba(217, 217, 217, 1); */
  color: ${({ color }) => color};
  cursor: pointer;
  margin: 0px;
  /* padding: 16px; */
  font-weight: ${(p) => p.mode};
  line-height: 24px;
  ${(p) =>
    p.color &&
    css`
      margin-left: 4px;
      color: ${(p) => p.theme.color.all_text_icon};
    `}
`;

/* <div
              style={ padding: "20px" }}
              // onClick={() => {
              //   router.push({
              //     query: { username: tweet.author.username, userId: tweet.id },
              //     pathname: "/status",
              //   });
              // }}
            > */

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */
  margin-bottom: 2px;
`;
