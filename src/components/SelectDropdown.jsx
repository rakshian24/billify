import React from 'react';
import Select from 'react-select';

import { ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS } from '../constants';
import { useWindowSize } from '../hooks/useWindowResize';

const SelectDropdown = ({ selectedValue, setSelectedValue }) => {
  const [screenWidth] = useWindowSize();
  const isLargeScreen = screenWidth > 500;
  return <Select
    isSearchable={false}
    options={ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS}
    onChange={(val) => setSelectedValue(val)}
    value={selectedValue}
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        height: '40px',
        width: isLargeScreen ? '150px' : '100%',
        fontSize: '17px'
      }),
      container: (baseStyles) => ({
        ...baseStyles,
        width: isLargeScreen ? '150px' : '100%',
      }),
      menuList: (baseStyles) => ({
        ...baseStyles,
        fontSize: '17px'
      }),
    }}
  />

}

export default SelectDropdown