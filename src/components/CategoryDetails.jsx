import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { Container, CustomImage, ImageContainer, NameDiv, PageTitle } from '../common/StyledComponents';
import { categories } from '../fakeJsonData';
import PageNotFound from './PageNotFound';
import { colors } from '../constants';

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

const ItemFooter = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  outline: non;
  border: 1px solid ${lightBlueGrey};
  background: #ffffff;
  color: #5D9C59;
  font-weight: 700;
  border-radius: 7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 0.25em 0.75em;
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
              <ItemFooter>
                {/* <DropDown /> */}
                <Button>ADD</Button>
              </ItemFooter>
            </ItemCard>
          )
        })}
      </CategoryDetailsBody>
    </Container>
  )
}

export default CategoryDetails