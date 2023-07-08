import { ADD_ITEM, REMOVE_ITEM, ADD_CATEGORY, SET_LOCALE, TOGGLE_MODAL, UDPATE_CATEGORY } from "./actions";

export const addItemToCart = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItemFromCart = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const setLocale = (payload) => ({
  type: SET_LOCALE,
  payload
});

export const toggleModal = (payload) => ({
  type: TOGGLE_MODAL,
  payload
});

export const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload
});

export const updateCategory = (payload) => ({
  type: UDPATE_CATEGORY,
  payload
});