import { ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS, LOCAL_STORAGE_KEY } from "../constants"

export const persistStateToLocalStorage = (state = {}) => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  }
}

export const getStateFromLocalStorage = () => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    return { cart: [] }
  } else {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  }
}

export const getDefaultStateValue = (type, itemName, addedCartItems) => {
  const [itemObj = {}] = addedCartItems.filter((addedCartItem) => addedCartItem.itemName === itemName);
  const { itemValue = '' } = itemObj;

  if (type === 'input') {
    return itemValue?.split(' ')[0] || ''
  }
  else if (type === 'dropdown') {
    const selectedDropdownValue = itemValue?.split(' ')[1] || '';
    if (selectedDropdownValue) {
      return ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS.filter(dropdownList => dropdownList.value === selectedDropdownValue)
    } else {
      return ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS[0]
    }
  } else {
    return ''
  }
}

export const getDateInDDMMMYYYYFormat = () => {
  const d = new Date();
  return d.getDate() + '-' + d.toString().substr(4, 3) + '-' + d.getFullYear();
}