import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Drawer, List } from 'rsuite';

import "./componentStyles.css"
import { APP_CONTAINER_MAX_WIDTH, colors } from '../constants';
import CartIcon from './icons/CartIcon';
import HamburgerIcon from './icons/HamburgerIcon';
import { useWindowSize } from '../hooks/useWindowResize';
import { FormattedMessage } from 'react-intl';
import TranslatorIcon from './icons/TranslatorIcon';
import { LOCALES } from '../i18n/locales';

const { lightBlueGrey, primaryBlue, primaryBlueLight } = colors;

const HeaderWrapper = styled.div`
  background-color: ${lightBlueGrey};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const HeaderContainer = styled.div`
  max-width: ${APP_CONTAINER_MAX_WIDTH};
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 501px){
    padding: 5px 20px;
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

const StyledListItem = styled(List.Item)`
  padding-left: 60px;
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
    background-color: ${lightBlueGrey};
  }
`;

const Header = ({ handleChangeLanguage }) => {
  const [hoveredOverCart, setHoveredOverCart] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [screenWidth] = useWindowSize();

  const handleOnLanguageClick = (selectedLocale) => {
    setOpenDrawer(false);
    handleChangeLanguage(selectedLocale)
  }

  return (
    <>
      <Drawer
        placement={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        size="xs"
      >
        <Drawer.Header>
          <Drawer.Title style={{ fontSize: '1.5em' }}>Choose Language</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <List>
            <StyledListItem onClick={() => handleOnLanguageClick(LOCALES.ENGLISH)}><FormattedMessage id="english" /></StyledListItem>
            <StyledListItem onClick={() => handleOnLanguageClick(LOCALES.KANNADA)}><FormattedMessage id="kannada" /></StyledListItem>
          </List>
        </Drawer.Body>
      </Drawer>
      <HeaderWrapper>
        <HeaderContainer>
          <AppTitleContainer>
            {screenWidth < 1024 &&
              <IconContainer
                style={{ marginRight: "18px" }}>
                <HamburgerIcon
                  width={screenWidth > 500 ? '45px' : '40px'}
                  fill={primaryBlue} />
              </IconContainer>}
            <NavLink
              to='/'
              style={{ textDecoration: 'none' }}>
              <AppTitle>
                <FormattedMessage id='app_title' />
              </AppTitle>
            </NavLink>
          </AppTitleContainer>
          <IconContainer>
            <NavLink
              to='/cart'
              onMouseOver={() => setHoveredOverCart(true)}
              onMouseOut={() => setHoveredOverCart(false)}
              style={{ textDecoration: 'none' }}
            >
              <CartIcon width={screenWidth > 500 ? '35px' : '30px'} stroke={hoveredOverCart ? primaryBlue : primaryBlueLight} strokeWidth={hoveredOverCart ? "7" : "6"} />
            </NavLink>
            <div style={{ marginLeft: '16px' }} onClick={() => setOpenDrawer(true)}>
              <TranslatorIcon width={screenWidth > 500 ? '35px' : '30px'} fill={primaryBlue} />
            </div>
          </IconContainer>
        </HeaderContainer>
      </HeaderWrapper> </>
  )
}
export default Header