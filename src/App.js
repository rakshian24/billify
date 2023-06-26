import { styled } from "styled-components";
import Header from "./components/Header";
import { APP_CONTAINER_MAX_WIDTH } from "./constants";
import Categories from "./components/Categories";

const AppWrapper = styled.div`
  height: 100vh;
`;

const AppContainer = styled.div`
  max-width: ${APP_CONTAINER_MAX_WIDTH};
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header title={'Billify'} />
      <AppContainer>
        <Categories />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;