import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart, toggleModal } from '../reducers/actionCreators';
import { Button, Container, CustomDiv, PageTitle } from '../common/StyledComponents';
import PageNotFound from './PageNotFound';
import { MODAL_TYPES, colors } from '../constants';
import ItemCard from './ItemCard';
import { getCategories } from '../reducers';

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
  const categoryData = useSelector(getCategories);
  const [{ items: groceryItems = [], name: categoryName } = {}] = categoryData.filter(category => category.id === parseInt(categoryId));

  if (!categoryName) {
    return <PageNotFound />
  }

  const handleAddRemoveItem = ({ itemName, selectedValue, textValue, isAddButtonClicked }) => {
    if (isAddButtonClicked) {
      dispatch(addItemToCart({ itemName, itemValue: `${textValue} ${selectedValue}` }))
    } else {
      dispatch(removeItemFromCart({ itemName }))
    }
  }

  return (
    <Container>
      <PageTitle>
        <CustomDiv display='flex' alignitems='center' justifycontent='space-between' marginbottom='2'>
          <FormattedMessage id={categoryName} />
          <Button
            onClick={() => dispatch(toggleModal({
              type: MODAL_TYPES.ITEM,
              showModal: true,
              props: { categoryId }
            }))}
          >
            <FormattedMessage id='create_item' />
          </Button>
        </CustomDiv>
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