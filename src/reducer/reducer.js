import { types } from "./types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EVENT:
      return [...state, action.payload];

    case types.DELETE_EVENTS:
      state = initialState;
      return state;
    
    default:
      return state;
  }
}

export default reducer;