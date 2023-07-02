import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'rsuite';
import { styled } from 'styled-components';

import { Button, Container, IconContainer, PageTitle } from '../common/StyledComponents'
import { getCartItems } from '../reducers';
import { colors } from '../constants';
import TrashCanIcon from '../components/icons/TrashCanIcon';
import { removeItemFromCart } from '../reducers/actionCreators';

const StyledListItem = styled(List.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  font-size: 1.35em;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover{
    cursor: pointer;
    font-weight: 500;
    background-color: ${colors.lightBlueGrey};
  }
`;

const CartPage = ({ intl: { formatMessage } }) => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <PageTitle>
        <FormattedMessage id={cartItems.length > 0 ? 'added_items_in_cart' : 'cart_empty_message'} values={{ quantity: cartItems.length }} />
      </PageTitle>
      <List>
        {cartItems.map(({ itemName, itemValue }) => {
          return (
            <StyledListItem key={itemName}>
              <div>{`${formatMessage({ id: itemName })} - ${itemValue}`}</div>
              <IconContainer onClick={() => dispatch(removeItemFromCart({ itemName }))}>
                <TrashCanIcon />
              </IconContainer>
            </StyledListItem>
          )
        })}
      </List>
      {cartItems.length > 0 && (<div style={{ marginTop: "2em", textAlign: 'right' }}>
        <Button style={{ fontSize: '20px' }}>
          <FormattedMessage id='generate_bill' />
        </Button>
      </div>)}
    </Container>
  )
}

export default injectIntl(CartPage);