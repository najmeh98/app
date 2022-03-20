export interface Theme {
  // text: any;
  fontSize: {
    smaller: number;
    small: number;
    normal15: number;
    normal: number;
    medium: number;
    Large: number;
    Xlarge: number;
    header: number;
  };
  fontWeight: {
    light: string;
    regular: string;
    bold: string;
    black: string;
  };
  radius: {
    small: number;
    normal: number;
    Large: number;
    button: number;
    inputSearch: number;
  };
  color: {
    text: string;
    borderColor: string;
    bgColorItem: string;
    title: string;
    bgColor: string;
    white: string;
    black: string;
  };
  buttonColor: {
    bgColor: string;
    boxShadow: string;
    hoverColor: string;
    hoverbg: string;
  };
  tweetColor: {
    reply: string;
    like: string;
    retweet: string;
    share: string;
    userId: string;
    replyHover: string;
    likeHover: string;
    retweetHover: string;
    shareHover: string;
  };
}
