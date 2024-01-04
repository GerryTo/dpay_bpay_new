import Cookies from "js-cookie";

export function userReducer(
  state = Cookies.get("loginUser") ? JSON.parse(Cookies.get("loginUser")) : null,
  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;

    default:
      return state;
  }
}
