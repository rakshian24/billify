import React from 'react'
import { Container, PageTitle } from '../common/StyledComponents'
import { FormattedMessage } from 'react-intl'

const CartPage = () => {
  return (
    <Container>
      <PageTitle>
        <FormattedMessage id='cart_empty_message' />
      </PageTitle>
    </Container>
  )
}

export default CartPage