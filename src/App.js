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
  height: calc(100% - 72px);
  overflow-y: scroll;

  @media screen and (min-width: 501px){
    height: calc(100% - 78px);
  }
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