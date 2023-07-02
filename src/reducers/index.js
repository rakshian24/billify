import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM } from './actions';
import { persistStateToLocalStorage, getStateFromLocalStorage } from '../utils';

export const initialState = {
  ...getStateFromLocalStorage()
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
}

export const rootReducer = combineReducers({
  cartReducer
})

export const getCartItems = (state) => state.cartReducer.cart;