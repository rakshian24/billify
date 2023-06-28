import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { APP_CONTAINER_MAX_WIDTH, colors } from '../constants';
import CartIcon from './icons/CartIcon';
import HamburgerIcon from './icons/HamburgerIcon';
import { useWindowSize } from '../hooks/useWindowResize';
import { FormattedMessage } from 'react-intl';
import TranslatorIcon from './icons/TranslatorIcon';

const { lightBlueGrey, primaryBlue, primaryBlueLight } = colors;

const HeaderWrapper = styled.div`
  background-color: ${lightBlueGrey};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const HeaderContainer = styled.div`
  max-width: ${APP_CONTAINER_MAX_WIDTH};
  margin: 0 auto;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 501px){
    padding: 10px 20px;
  }
`;
const AppTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
  color: ${primaryBlue};

  @media screen and (min-width: 501px){
    font-size: 2em;
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [hoveredOverCart, setHoveredOverCart] = useState(false);
  const [screenWidth] = useWindowSize();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <AppTitleContainer>
          {screenWidth < 1024 &&
            <IconContainer
              style={{ marginRight: "18px" }}>
              <HamburgerIcon width={screenWidth > 500 ? '45px' : '40px'} fill={primaryBlue} />
            </IconContainer>}
          <NavLink to='/'>
            <AppTitle>
              <FormattedMessage id='app_title' />
            </AppTitle>
          </NavLink>
        </AppTitleContainer>
        <IconContainer>
          <NavLink to='/cart' onMouseOver={() => setHoveredOverCart(true)} onMouseOut={() => setHoveredOverCart(false)}>
            <CartIcon width={screenWidth > 500 ? '35px' : '30px'} stroke={hoveredOverCart ? primaryBlue : primaryBlueLight} strokeWidth={hoveredOverCart ? "7" : "6"} />
          </NavLink>
          <div style={{ marginLeft: '10px' }}>
            <TranslatorIcon width={screenWidth > 500 ? '35px' : '30px'} fill={primaryBlue} />
          </div>
        </IconContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
export default Header