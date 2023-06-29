import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { BUTTON_TYPE, ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS, colors } from '../constants';
import SelectDropdown from './SelectDropdown';
import { CustomImage, ImageContainer, NameDiv, Button, ItemInput } from '../common/StyledComponents';

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
  const [selectedValue, setSelectedValue] = useState(ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS[0]);
  const [textValue, setTextValue] = useState('');
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(true)

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
        <ItemInput
          type='number'
          placeholder={selectedValue.value}
          onChange={handleInputTextChange}
          inputpriority={isAddButtonClicked ? ADD : REMOVE}
          disabled={!isAddButtonClicked}
        />
        <Button
          buttontype={isAddButtonClicked ? ADD : REMOVE}
          onClick={() => {
            setIsAddButtonClicked(!isAddButtonClicked);
            handleAddRemoveItem({ itemName, selectedValue: selectedValue.value, textValue, isAddButtonClicked })
          }}
          disabled={!textValue}
        >
          <FormattedMessage id={isAddButtonClicked ? ADD.toLowerCase() : REMOVE.toLowerCase()} />
        </Button>
      </ItemInputContainer>
    </StyledItemCard>
  )
}

export default ItemCard