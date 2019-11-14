import { CHANGE_APP_MODE } from "../constants/actionTypes";

const initialState = 0;

const AppMode = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default AppMode;
