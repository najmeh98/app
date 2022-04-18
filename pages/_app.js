import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { UseAppManagerProvider } from "../components/AppContext";
import {
  ThemeContext,
  useTheme,
  UseThemeManager,
} from "../components/Theme/ThemeContext";
import { darkTheme, lightTheme } from "../components/utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  a{
    /* color: #1da1f2; */
  text-decoration: none;
  outline-style: none;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    buttonBackground: "#1da1f2",
    inputBorderFocused: "#1da1f2",
    inputBorder: "#eff3f4",
    background: "#e8f5fe",
    buttonText: "#1da1f2",
    textColor: "#50b7f5",
  },
  fontFamily:
    'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  // useEffect(() => {
  //   setTheme(thememode.darkmode ? darkTheme : lightTheme);
  // }, [theme, thememode.darkmode]);

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UseThemeManager>
          <UseAppManagerProvider>
            {getLayout(<Component {...pageProps} />)}
          </UseAppManagerProvider>
        </UseThemeManager>
      </ThemeProvider>
    </>
  );
}
