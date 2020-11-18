import { GET_CREATURES, GET_DESCRIPTION } from "./types.js";

export default (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_DESCRIPTION:
      return {
        ...state,
        description: payload,
      }

    case GET_CREATURES:
      return {
        ...state,
        description: payload,
      }

    default: 
    return state;
  }
};