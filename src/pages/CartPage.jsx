import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { useSelector } from 'react-redux';
import { List } from 'rsuite';
import { styled } from 'styled-components';

import { Button, Container, PageTitle } from '../common/StyledComponents'
import { getCartItems } from '../reducers';
import { colors } from '../constants';

const StyledListItem = styled(List.Item)`
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
  return (
    <Container>
      <PageTitle>
        <FormattedMessage id={cartItems.length > 0 ? 'added_items_in_cart' : 'cart_empty_message'} values={{ quantity: cartItems.length }} />
      </PageTitle>
      <List>
        {cartItems.map(({ itemName, itemValue }) => {
          return (
            <StyledListItem key={itemName}>{`${formatMessage({ id: itemName })} - ${itemValue}`}</StyledListItem>
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