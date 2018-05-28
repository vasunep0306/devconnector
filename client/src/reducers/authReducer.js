import { SET_CURRENT_USER } from "../actions/types";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
import isEmpty from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
