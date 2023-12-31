import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { getLocale } from "./reducers";
import I18nProvider from "./i18n/Provider";
import Header from "./components/Header";
import { APP_CONTAINER_MAX_WIDTH } from "./constants";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { setLocale } from "./reducers/actionCreators";
import ModalConductor from "./components/ModalConductor";

const AppWrapper = styled.div`
  height: 100vh;
`;

const AppContainer = styled.div`
  max-width: ${APP_CONTAINER_MAX_WIDTH};
  margin: 0 auto;
  height: calc(100% - 68px);
  overflow-y: scroll;

  //To hide scroll bars
  &::-webkit-scrollbar{
    display: none;
  }

  @media screen and (min-width: 501px){
    height: calc(100% - 85px);
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const locale = useSelector(getLocale);

  const handleChangeLanguage = (selectedLanguage) => {
    dispatch(setLocale({ locale: selectedLanguage }))
  }

  return (
    <I18nProvider locale={locale}>
      <AppWrapper>
        <Header handleChangeLanguage={handleChangeLanguage} />
        <ModalConductor />
        <AppContainer>
          <Routes>
            <Route path="/" element={<CategoriesPage />} />
            <Route path="/categories/:categoryId" element={<CategoryDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </AppContainer>
      </AppWrapper>
    </I18nProvider>
  );
}

export default App;