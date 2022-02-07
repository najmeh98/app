import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const AppContext = createContext({
  login: () => {},
  logout: () => {},
  isLogginedIn: false,
  userName: "",
  token: undefined,
});

export const UseAppManagerProvider = () => {
  const [isLogginedIn, setisLoggedIn] = useState(false);
  const [userName, setuserName] = useState("");
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    let savedusername = localStorage.getItem("username");
    let localToken = localStorage.getItem("token");
    if (!savedusername || savedusername === "undefind") {
      return;
    }
    if (!localToken || localToken === "undefind") {
      return;
    }

    setisLoggedIn(true);
    setuserName(savedusername);
    setToken(localToken);
  }, []);

  const Login = useCallback(({ username, token }) => {
    localStorage.setItem("username", username);
    localStorage.setItem("localToken", token);
    setisLoggedIn(true);
  }, []);

  const Logout = useCallback(() => {
    localStorage.removeItem("username");
    setisLoggedIn(false);
  }, []);

  const value = useMemo(
    () => ({ Logout, Login, isLogginedIn, token, userName }),
    [Logout, Login, isLogginedIn, token, userName]
  );

  return <AppContext.Provider value={value} />;
};

// export const useAppContext = () => {
//   return useContext(AppContext);
// };
