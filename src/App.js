import { useState } from "react";
import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';

import { configureStore } from "./common/store";
import { rootReducer, initialState } from "./reducers";
import I18nProvider from "./i18n/Provider";
import Header from "./components/Header";
import { APP_CONTAINER_MAX_WIDTH, APP_NAME } from "./constants";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

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
  const [locale, setLocale] = useState();
  const handleChangeLanguage = (selectedLanguage) => {
    setLocale(selectedLanguage);
  }

  const store = configureStore({
    initialState,
    appName: APP_NAME,
    rootReducer,
  });

  return (
    <StoreProvider store={store}>
      <I18nProvider locale={locale}>
        <AppWrapper>
          <Header handleChangeLanguage={handleChangeLanguage} />
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
    </StoreProvider>
  );
}

export default App;