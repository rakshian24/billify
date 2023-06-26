import React, { useState } from 'react';
import Select from 'react-select';

import { ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS } from '../constants';

const SelectDropdown = () => {
  const [selectedValue, setSelectedValue] = useState();

  return <Select
    isSearchable={false}
    options={ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS}
    onChange={(val) => setSelectedValue(val)}
    value={selectedValue}
    defaultValue={ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS[1]}
    styles={{
      control: (baseStyles) => ({
        ...baseStyles,
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        height: '0.5em',
        width: '150px'
      }),
    }}
  />

}

export default SelectDropdown