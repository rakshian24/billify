import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { addItemToCart, removeItemFromCart } from '../reducers/actionCreators';
import { Container, PageTitle } from '../common/StyledComponents';
import { categories } from '../fakeJsonData';
import PageNotFound from './PageNotFound';
import { colors } from '../constants';
import ItemCard from './ItemCard';

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

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [{ items: groceryItems = [], name: categoryName } = {}] = categories.filter(category => category.id === parseInt(categoryId));

  if (!categoryName) {
    return <PageNotFound />
  }

  const handleAddRemoveItem = ({ itemName, selectedValue, textValue, isAddButtonClicked }) => {
    if (isAddButtonClicked) {
      dispatch(addItemToCart({ itemName, itemValue: `${textValue} ${selectedValue}` }))
    } else {
      dispatch(removeItemFromCart({ itemName, itemValue: `${textValue} ${selectedValue}` }))
    }
  }

  return (
    <Container>
      <PageTitle>
        <FormattedMessage id={categoryName} />
      </PageTitle>
      <CategoryDetailsBody>
        {groceryItems && groceryItems.length > 0 && groceryItems.map(({ id, name }) => {
          return (
            <ItemCard
              key={id}
              itemName={name}
              categoryName={categoryName}
              handleAddRemoveItem={handleAddRemoveItem}
            />
          )
        })}
      </CategoryDetailsBody>
    </Container>
  )
}

export default CategoryDetails