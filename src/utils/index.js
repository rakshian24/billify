import { LOCAL_STORAGE_KEY } from "../constants"

export const persistStateToLocalStorage = (state = {}) => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  }
}

export const getStateFromLocalStorage = () => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    return {}
  } else {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  }
}