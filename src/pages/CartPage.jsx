import React from 'react'
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
import { getCartItems } from '../reducers';
import { Container } from '../common/StyledComponents';
import { useWindowSize } from '../hooks/useWindowResize';
import ViewBill from '../components/ViewBill';
import DownloadBill from '../components/DownloadBill';

const CartPage = () => {
  const [screenWidth] = useWindowSize();
  const cartItems = useSelector(getCartItems);

  return (
    <Container>
      <Cart />
      {screenWidth > 1200 ? (
        <ViewBill cartItems={cartItems} />
      ) : (
        <>{cartItems.length > 0 && <DownloadBill cartItems={cartItems} />}</>
      )}
    </Container>
  )
}

export default CartPage;