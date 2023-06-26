import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { APP_CONTAINER_MAX_WIDTH } from "./constants";
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
  height: calc(100% - 72px);
  overflow-y: scroll;

  //To hide scroll bars
  &::-webkit-scrollbar{
    display: none;
  }

  @media screen and (min-width: 501px){
    height: calc(100% - 78px);
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <Header title={'Billify'} />
      <AppContainer>
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<CategoryDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </AppWrapper>
  );
}

export default App;