import router, { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppContext";
import { LikeIcon, ReplyIcon, RetweetIcon } from "./Icons/Icons";
import { ContentWrapper } from "./share/Containers";
import { StandardButton } from "./StandardButton";
import Link from "next/link";
import Text from "./utils/text";
export const Tweet = ({ tweet, onClick, tweets, tweetlink }) => {
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

  const { userName } = useContext(AppContext);
  return (
    <Fragment key={tweet.id}>
      {/* <Link href={tweetlink} passHref> */}
      {/* <a> */}
      {/* href={`${tweet.author.username}/status/${tweet.id}`} */}
      <ContentWrapper>
        <Link href={`${tweet.author.username}/status/${tweet.id}`}>
          <>
            {/* <div
              style={{ padding: "20px" }}
              // onClick={() => {
              //   router.push({
              //     query: { username: tweet.author.username, userId: tweet.id },
              //     pathname: "/status",
              //   });
              // }}
            > */}
            {/* اسم کاربر */}
            <Text>@{tweet.author.username}</Text>
            {/* <Link href={tweetlink} passHref> */}
            <p>{tweet.text}</p>
            {/* { </Link> */}

            <Item>
              <span onClick={onClick}>
                <ReplyIcon />
              </span>
              <RetweetIcon />

              <LikeIcon />
            </Item>
            {/* </div> */}
          </>
        </Link>
      </ContentWrapper>
      {/* </a> */}
      {/* </Link> */}
    </Fragment>
  );
};
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  // max-width: 250px;
  cursor: pointer;
`;
