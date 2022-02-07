import React from "react";
import { useEffect, useState } from "react";
//import { Container, Wrapper } from "../pages/login";
import { getDatarequest, SendPostrequest } from "./Api";
import { Exite } from "./Icons/Exite";
import { Flex_end } from "./share/Containers";
import { StandardButton } from "./StandardButton";
import { StandardInput } from "./StandardInput";
import PopupContent from "./style/PopupContent";
import { nanoid } from "nanoid";

export default function Replytweet({ onClick, replyTweet, setReplyTweet }) {
  // const [replyTweet, setreplyTweet] = useState([]);
  const [editTweet, seteditTweet] = useState("");
  const [reply, setReply] = useState([]);
  let url;
  let data;
  let ID = nanoid();

  // const handleReplyTweet = (id) => {
  //   //event.preventDefault();
  //   url = `edit/${ID}`;
  //   SendPostrequest((data = { tweet: replyTweet }), url)
  //     .then((res) => {
  //       setReply(res);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));

  //   setReply("");
  // };

  const Close = (event) => {
    event.stopPropagation();
    setReplyTweet(false);
  };
  // useEffect(() => {
  //   url = "/replies/${id}";
  //   getDatarequest(url)
  //     .then((list) => {
  //       setreplyTweet(list);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <PopupContent height={400} w={600} top={10} left={33} onClick={onClick}>
      <StandardInput
        placeholder="Tweet your reply?"
        value={editTweet}
        onChange={(event) => {
          seteditTweet(event.currentTarget.value);
        }}
      />
      {/* {replyTweet &&
        replyTweet.length !== 0 &&
        replyTweet?.map((reply, index) => (
          <>
            <div>{reply.text}</div>
          </>
        ))} */}
      <Flex_end>
        <StandardButton onClick={onClick}> Reply </StandardButton>
      </Flex_end>
    </PopupContent>
  );
}
