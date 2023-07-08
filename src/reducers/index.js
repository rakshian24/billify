import { combineReducers } from 'redux';
import { ADD_CATEGORY, ADD_ITEM, REMOVE_ITEM, SET_LOCALE } from './actions';
import { persistStateToLocalStorage, getStateFromLocalStorage } from '../utils';

export const initialState = {
  ...getStateFromLocalStorage(),
};

export function cartReducer(state = initialState, { type, payload: { itemName = '', itemValue = '' } = {} }) {
  switch (type) {
    case ADD_ITEM:
      const updatedState = {
        ...state,
        cart: [...state.cart, {
          itemName,
          itemValue
        }]
      };
      persistStateToLocalStorage(updatedState);
      return updatedState;
    case REMOVE_ITEM:
      const updatedStateAfterRemoval = {
        ...state,
        cart: state.cart.filter((cart) => cart.itemName !== itemName)
      }
      persistStateToLocalStorage(updatedStateAfterRemoval);
      return updatedStateAfterRemoval;
    default:
      return state;
  }
};

export function categoryReducer(state = initialState, { type, payload: { categoryName = '' } = {} }) {
  switch (type) {
    case ADD_CATEGORY:
      const updatedState = {
        ...state,
        categories: [...state.categories, {
          id: state.categories.length + 1,
          name: categoryName,
          items: []
        }]
      };
      persistStateToLocalStorage(updatedState);
      return updatedState;
    default:
      return state;
  }
};

export function localeReducer(state = initialState, { type, payload: { locale = '' } = {} }) {
  switch (type) {
    case SET_LOCALE:
      const updatedState = {
        ...state,
        locale
      };
      persistStateToLocalStorage(updatedState);
      return updatedState;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  cartReducer,
  categoryReducer,
  localeReducer
})

export const getCartItems = (state) => state.cartReducer.cart;
export const getCategories = (state) => state.categoryReducer.categories;
export const getLocale = (state) => state.localeReducer.locale;