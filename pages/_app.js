import { createGlobalStyle, ThemeProvider } from "styled-components";
import { UseAppManagerProvider } from "../components/AppContext";
import { ThemeContext } from "../components/Theme/ThemeContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  a{
    color: #1da1f2;
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
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider>
          <UseAppManagerProvider>
            {getLayout(<Component {...pageProps} />)}
          </UseAppManagerProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}
