import router, { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppContext";
import {
  Dot,
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
export const Tweet = ({
  tweet,
  onClick,
  tweets,
  tweetText,
  tweetAuthor,
  tweetId,
  tweetlink,
  createdAt,
}) => {
  const router = useRouter();

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

  // let tweetAuthor = tweet?.author && tweet.author.username;
  //let tweetId = tweet?.id && tweet.id;
  const { userName } = useContext(AppContext);
  return (
    <>
      <Wrapper>
        <Link href={`${tweetAuthor}/status/${tweetId}`}>
          <a>
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
                    {/* <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  > */}
                    <Text mode={900} size={17}>
                      {tweetAuthor}
                    </Text>
                    <Text color>@{tweetAuthor}</Text>
                    <Text color>.</Text>
                    <Text mode={400} size={15} color>
                      {createdAt}
                    </Text>
                    {/* </div> */}
                  </Row>
                  <Dot />
                </FlexRow>
                <Text>{tweetText}</Text>

                {/* third Row */}
                <FlexRow style={{ width: "425px", marginTop: "12px" }}>
                  <Item
                    onClick={onClick}
                    hovercolor="rgb(29, 155, 240)"
                    className="color"
                  >
                    <ReplyIcon />
                    <p>100</p>
                  </Item>
                  <Item hovercolor="rgb(0, 186, 124)">
                    <RetweetIcon />
                    <p>100</p>
                  </Item>

                  <Item hovercolor="rgb(249, 24, 128)">
                    <LikeIcon />
                    <p>100</p>
                  </Item>

                  <Item hovercolor="rgb(29, 155, 240)">
                    <ShareICon />
                    <p>100</p>
                  </Item>
                </FlexRow>
              </Content>
            </Container>
          </a>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgb(47, 51, 54);
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
  transition: color 0.2s ease background-color 0.2s ease;
  p {
    padding-left: 12px;
    padding-right: 12px;
    font-size: 13px;
    line-height: 16px;
    margin: 0px;
    color: black;
  }

  &:hover {
    fill: ${({ hovercolor }) => hovercolor};
    /* background-color: rgba(0, 0, 0, 0); */
    border-radius: 50px;
    /* background-color: ${({ hovercolor }) => hovercolor}; */
    p {
      color: ${({ hovercolor }) => hovercolor};
    }
  }
  /* &.color:hover {
    fill: ${({ hovercolor }) => hovercolor};
  } */
`;

const Text = styled.p`
  font-size: ${(p) => p.size}px;
  line-height: 20px;
  color: rgb(15, 20, 25);
  /* color: rgba(217, 217, 217, 1);   رنگ  متن برای تم دارک */
  cursor: pointer;
  margin: 0px;
  /* padding: 16px; */
  font-weight: ${(p) => p.mode};
  line-height: 24px;
  ${(p) =>
    p.color &&
    css`
      margin-left: 4px;
      color: rgb(110, 118, 125);
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
