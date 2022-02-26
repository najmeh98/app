import React, { useCallback, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { CustomButton, StandardButton, StandardInput } from "./main";
import { axios } from "axios";
import { TwitterLogo } from "./home/icons/icons";
import PopupContent from "./style/PopupContent";
import Space from "./share/Space";
import { Center } from "./Container";
import { ContentWrapper } from "./share/Containers";
import { useAppContext } from "./AppContext";
import { SendPostrequest } from "./Api";
import { Router, useRouter } from "next/router";
export default function LoginModal() {
  let { Login } = useAppContext();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const HandleLogin = useCallback(() => {
    if (!userName || userName.length === 0 || !userPassword) return;
    setloading(true);

    const data = {
      username: userName,
      password: userPassword,
    };
    console.log(data);
    let url = "login";
    SendPostrequest(data, url)
      .then((res) => {
        console.log(res);
        setloading(false);
        if (res?.username && res?.token) {
          Login({ username: res?.username, token: res?.token });
          // router.push("./main/home");
        }
      })
      .catch((error) => {
        setError(error);
        setloading(false);
      });
  }, [userName, userPassword, Login]);

  const HandleRegister = useCallback(() => {
    console.log(userName);
    console.log(userPassword);

    if (!userName || !userPassword) return;
    try {
      console.log(userName);
      const data = {
        username: userName,
        password: userPassword,
      };
      console.log(data);

      let url = "register";
      // let url = "test";
      setloading(true);

      SendPostrequest(data, url)
        .then((res) => {
          setloading(false);
          // setUserInfo();
          if (res?.token && res?.username) {
            console.log(res);
            console.log(res.token);
            console.log(res.data);
            Login({ username: res?.username, token: res?.token });
            router.push("/main/home");
          }
        })
        .catch((error) => {
          setError(error);
        });
      // axios
      //   .post("http://localhost:4000/register", {
      //     username: userName,
      //     password: userPassword,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     Login({ username: res?.userName, token: res?.token });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setError(error);
      //   });
      // console.log(response);
      //    let { auth_token: token, userName } = res?.data?.data;

      // if (token && userName) {
      //   //Login({ userName, token });
      // }
    } catch (error) {
      if (error?.response?.status === 403) {
        setError(error);
      }
    }
  }, [userName, userPassword, Login, router]);

  return (
    <Container>
      <Center>
        <Button>
          <TwitterLogo style={{ fontSize: "36px" }} />
        </Button>

        <SignIn>
          <p>Sign in Twitter</p>
          <Space vertical={30} />
          <StandardInput
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.currentTarget.value)}
            placeHolder="Phone, email, or username"
          />
          <Space vertical={30} />
          <StandardInput
            type="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.currentTarget.value)}
            placeHolder="password"
          />
          <Space vertical={50} />
          <CustomButton onClick={HandleLogin}>Login</CustomButton>
          <span>or</span>
          <CustomButton onClick={HandleRegister}>Signup</CustomButton>
        </SignIn>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Twitter = styled.div`
  direction: rtl;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SignIn = styled.div`
  width: 100%;
  max-width: 380px;
  //  margin: auto;
  padding: 0px 32px;
  p {
    font-size: 23px;
    line-height: 28px;
    //   font-weight: 700;
  }
`;

const Button = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 120ms;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    border-radius: 50%;
    padding: 8px;
  }
  margin-bottom: 20px;
`;
