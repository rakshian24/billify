import { ADD_ITEM, REMOVE_ITEM } from "./actions";

export const addItemToCart = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItemFromCart = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});