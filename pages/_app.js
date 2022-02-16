import { createGlobalStyle, ThemeProvider } from "styled-components";
import { UseAppManagerProvider } from "../components/AppContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    buttonBackground: "#1da1f2",
    backgeround: "#e8f5fe",
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
        <UseAppManagerProvider>
          {getLayout(<Component {...pageProps} />)}
        </UseAppManagerProvider>
      </ThemeProvider>
    </>
  );
}
