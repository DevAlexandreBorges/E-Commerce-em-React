interface User {
  user: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const intialState: UserState = {
  user: null,
};

interface UserAction {
  type: string;
  payload?: User;
}

export function userReducer(
  state = intialState,
  action: UserAction
): UserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as User,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}
