import { useContext } from "react";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type UserProviderProps = {
  children: ReactNode;
};

const initialUserState: State = {
  user: {},
};

type State = {
  user: IUser | {};
};
type IUser = {
  jwt: string;
  userInfo: {
    email: string;
    type: string;
  };
};
interface IUserActions {
  type: "login_user" | "logout_user" | "check_user";
  payload: IUser;
}

const userReducer = (userState: State, action: IUserActions): any => {
  let user = action.payload;
  switch (action.type) {
    case "login_user": {
      if (user.jwt) {
        let userInfo = JSON.stringify(user);
        window.localStorage.setItem("user", userInfo);
        return { ...userState, user };
      }
      return;
    }
    case "logout_user": {
      window.localStorage.removeItem("user");
      return { ...userState, user };
    }
    case "check_user": {
      if (user.jwt) {
        return { ...userState, user };
      }
      return;
    }
    default: {
      return userState;
    }
  }
};

interface IUserContextProps {
  userState: any;
  userDispatch: Dispatch<IUserActions>;
}

const UserContext = createContext<IUserContextProps>({
  userState: initialUserState,
  userDispatch: () => {},
});

function UserProvider({ children }: UserProviderProps) {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const value = { userState, userDispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    return new Error("useUser must be used inside a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
