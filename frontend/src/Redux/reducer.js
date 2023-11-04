import {
  GET_INVENTORY_ERROR,
  GET_INVENTORY_REQUEST,
  GET_INVENTORY_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  inventory: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INVENTORY_REQUEST:
      return { ...state, isLoading: true };
    case GET_INVENTORY_SUCCESS:
      return { ...state, isLoading: false, inventory: payload };
    case GET_INVENTORY_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
