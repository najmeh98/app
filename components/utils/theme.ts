import { DefaultTheme } from "styled-components";
import { Theme } from "../types/theme";

const baseColors: Theme = {
  fontSize: {
    smaller: 13,
    small: 14,
    normal15: 15,
    normal: 16,
    medium: 18,
    Large: 20,
    Xlarge: 23,
    header: 48,
  },
  fontWeight: {
    light: "300",
    regular: "normal",
    bold: "bold",
    black: "900",
  },
  radius: {
    small: 4,
    normal: 8,
    Large: 16,
    button: 20,
    inputSearch: 50,
  },
  color: {
    text: "rgba(255,255,255,1)",
    borderColor: " rgb(47, 51, 54,0.1)",
    bgColorItem: "rgba(15,20,25,0.1)",
    title: "#000",
    bgColor: "rgba(29, 161, 242, 0.1)",
    white: "#fff",
    black: "#000",
  },
  buttonColor: {
    bgColor: "rgb(29,155,240)",
    boxShadow: "rgb(0,0,0,0.8) 0px 8px 28px",
    hoverColor: "rgb(29,154,238)",
    hoverbg: "rgba(29,155,240,0.1)",
  },
  tweetColor: {
    reply: "rgb(29, 155, 240)",
    like: "rgb(249, 24, 128)",
    retweet: "rgb(0, 186, 124)",
    share: "rgb(29, 155, 240)",
    userId: "rgb(83, 100, 113)",
    replyHover: "rgba(29,155,240,0.1)",
    likeHover: "rgb(249,24,128, 0.1)",
    retweetHover: "rgb(0,186,124,0.1)",
    shareHover: "rgb(29,155,240,0.1)",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseColors,
  backgroundColor: "#fff",
  buttonBg: "#1d9bf0",
  buttonHover: "#1a8cd8",
  hoverLogo: "rgba(29, 161, 242, 0.1)",
  all_text_icon: "#0f1419",
};

const dimTheme = {
  ...baseColors,
  backgroundColor: "rgb(21, 32, 43)",
};

export const darkTheme = {
  ...baseColors,
  backgroundColor: "#000",
  darkmode: true,
  all_text_icon: "#6e767d",
  // textColor: baseColors.text,
};
