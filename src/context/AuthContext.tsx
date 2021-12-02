import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type TState = {
  token?: string;
  userinfo?: {
    id: number;
    username: string;
    email: string;
    status: string;
    confirmed: boolean;
    type: string;
    role: number;
  };
};
type TAuthProvider = {
  children: ReactNode;
};

const AuthContext = createContext<{ auth: TState; setAuth: Function } | any>(
  null
);

const AuthProvider = ({ children }: TAuthProvider) => {
  const [auth, setAuth] = useLocalStorage("user", null);
  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used inside a AuthContext");
  }
  return context;
}

export { useAuth, AuthProvider };
