import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM } from './actions';

export const initialState = {
  cart: []
};

export function cartReducer(state = { cart: [] }, { type, payload: { itemName = '', itemValue } = {} }) {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, {
          itemName,
          itemValue
        }]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.itemName !== itemName)
      }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  cartReducer
})

export const getCartItems = (state) => state.cartReducer.cart;