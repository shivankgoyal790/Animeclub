import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    userid : null,
    login: () => {},
    logout: () => {}
  });

