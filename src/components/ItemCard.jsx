import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS, colors } from '../constants';
import SelectDropdown from './SelectDropdown';
import { CustomImage, ImageContainer, NameDiv } from '../common/StyledComponents';
import { FormattedMessage } from 'react-intl';

const { lightBlueGrey } = colors;

const StyledItemCard = styled.div`
  background-color: #ffffff;
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

const ItemInput = styled.input`
  outline: none;
  border: 1px solid #5D9C59;
  font-size: 1em;
  width: 61px;
  margin-right: 2em;
  padding: 8px;
  border-radius: 4px;
`;

const Button = styled.button`
  outline: non;
  border: 1px solid ${lightBlueGrey};
  background: #ffffff;
  color: #5D9C59;
  font-weight: 700;
  border-radius: 7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 0.5em 0.75em;
  font-size: 1em;

  &:disabled{
    background-color: #eee;
    opacity: 0.6;
  }
  `;

const ItemCard = ({ categoryName, itemId, itemName, handleAddItem }) => {
  const [selectedValue, setSelectedValue] = useState(ITEM_SELECT_DROP_DOWN_VALUE_OPTIONS[0]);
  const [textValue, setTextValue] = useState('');

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
        <ItemInput type='number' placeholder={selectedValue.value} onChange={handleInputTextChange} />
        <Button onClick={() => handleAddItem({ itemName, selectedValue: selectedValue.value, textValue })} disabled={!textValue}>
          <FormattedMessage id='add' />
        </Button>
      </ItemInputContainer>
    </StyledItemCard>
  )
}

export default ItemCard