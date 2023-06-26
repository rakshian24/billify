import React, { useState } from 'react';
import { styled } from 'styled-components';
import { APP_CONTAINER_MAX_WIDTH, colors } from '../constants';
import CartIcon from './icons/CartIcon';
import HamburgerIcon from './icons/HamburgerIcon';
import { useWindowSize } from '../hooks/useWindowResize';

const { lightBlueGrey, primaryBlue, primaryBlueLight } = colors;

const HeaderWrapper = styled.div`
  background-color: ${lightBlueGrey};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const HeaderContainer = styled.div`
  max-width: ${APP_CONTAINER_MAX_WIDTH};
  margin: 0 auto;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 501px){
    padding: 10px 15px;
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
  margin-top: 9px;
`;

const Header = ({ title }) => {
  const [hoveredOverCart, setHoveredOverCart] = useState(false);
  const [screenWidth] = useWindowSize();
  const iconWidth = screenWidth > 500 ? '35px' : '30px';

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <AppTitleContainer>
          {screenWidth < 1024 &&
            <IconContainer
              style={{ marginRight: "10px" }}>
              <HamburgerIcon width={iconWidth} fill={primaryBlue} />
            </IconContainer>}
          <AppTitle>{title}</AppTitle>
        </AppTitleContainer>
        <IconContainer onMouseOver={() => setHoveredOverCart(true)} onMouseOut={() => setHoveredOverCart(false)}>
          <CartIcon width={iconWidth} stroke={hoveredOverCart ? primaryBlue : primaryBlueLight} strokeWidth={hoveredOverCart ? "6" : "5"} />
        </IconContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
export default Header