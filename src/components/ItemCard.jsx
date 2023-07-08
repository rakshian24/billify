import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import { BUTTON_TYPE, colors } from '../constants';
import SelectDropdown from './SelectDropdown';
import { CustomImage, ImageContainer, NameDiv, Button, Input } from '../common/StyledComponents';
import { getDefaultStateValue } from '../utils';
import { getCartItems } from '../reducers';

const { ADD, REMOVE } = BUTTON_TYPE;

const StyledItemCard = styled.div`
  background-color: ${colors.white};
  padding: 1em;
  text-align: center;
`;

const SelectDropdownContainer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ItemInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ItemCard = ({ categoryName, itemName, handleAddRemoveItem }) => {
  const cartItems = useSelector(getCartItems);
  const defaultTextValue = getDefaultStateValue('input', itemName, cartItems);
  const defaultSelectValue = getDefaultStateValue('dropdown', itemName, cartItems);
  const defaultValueForBtn = defaultTextValue ? false : true;
  const [selectedValue, setSelectedValue] = useState(defaultSelectValue);
  const [textValue, setTextValue] = useState('');
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(defaultValueForBtn)

  const safeRequireItemImage = (categoryName, itemName) => {
    try {
      return require(`../assets/images/${categoryName}/${itemName}.png`);
    } catch (err) {
      return require(`../assets/images/placeholder-image.png`);
    }
  }

  const handleInputTextChange = (e) => {
    setTextValue(e.target.value)
  }

  return (
    <StyledItemCard>
      <ImageContainer>
        <CustomImage src={safeRequireItemImage(categoryName, itemName)} />
      </ImageContainer>
      <NameDiv>
        <FormattedMessage id={itemName} />
      </NameDiv>
      <SelectDropdownContainer>
        <SelectDropdown selectedValue={selectedValue} setSelectedValue={(val) => setSelectedValue(val)} />
      </SelectDropdownContainer>
      <ItemInputContainer>
        <Input
          type='number'
          placeholder={selectedValue.value}
          onChange={handleInputTextChange}
          inputpriority={isAddButtonClicked ? ADD : REMOVE}
          disabled={!isAddButtonClicked}
          defaultValue={defaultTextValue}
        />
        <Button
          buttontype={isAddButtonClicked ? ADD : REMOVE}
          onClick={() => {
            setIsAddButtonClicked(!isAddButtonClicked);
            handleAddRemoveItem({ itemName, selectedValue: selectedValue.value, textValue, isAddButtonClicked })
          }}
          disabled={defaultValueForBtn && !textValue}
        >
          <FormattedMessage id={isAddButtonClicked ? ADD.toLowerCase() : REMOVE.toLowerCase()} />
        </Button>
      </ItemInputContainer>
    </StyledItemCard>
  )
}

export default ItemCard