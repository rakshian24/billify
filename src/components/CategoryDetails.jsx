import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { Container, CustomImage, ImageContainer, NameDiv, PageTitle } from '../common/StyledComponents';
import { categories } from '../fakeJsonData';
import PageNotFound from './PageNotFound';
import { colors } from '../constants';
import SelectDropdown from './SelectDropdown';

const { lightBlueGrey } = colors;

const CategoryDetailsBody = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 1px;
  background-color: ${lightBlueGrey};
  word-wrap: break-word;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const ItemCard = styled.div`
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
  width: 60px;
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
  `;

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const [{ items: groceryItems = [], name: categoryName } = {}] = categories.filter(category => category.id === parseInt(categoryId));

  if (!categoryName) {
    return <PageNotFound />
  }

  const safeRequireItemImage = (categoryName, itemId) => {
    try {
      return require(`../assets/images/${categoryName}/item-${itemId}.png`);
    } catch (err) {
      return require(`../assets/images/placeholder-image.png`);
    }
  }

  return (
    <Container>
      <PageTitle>{categoryName}</PageTitle>
      <CategoryDetailsBody>
        {groceryItems && groceryItems.length > 0 && groceryItems.map(({ id, name }) => {
          return (
            <ItemCard key={id}>
              <ImageContainer>
                <CustomImage src={safeRequireItemImage(categoryName, id)} />
              </ImageContainer>
              <NameDiv>{name}</NameDiv>
              <SelectDropdownContainer>
                <SelectDropdown />
              </SelectDropdownContainer>
              <ItemInputContainer>
                <ItemInput type='text' placeholder='Qty' />
                <Button>ADD</Button>
              </ItemInputContainer>
            </ItemCard>
          )
        })}
      </CategoryDetailsBody>
    </Container>
  )
}

export default CategoryDetails