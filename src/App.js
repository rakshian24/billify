import { styled } from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  padding: 1.25em;

  //Styles for tablet device
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) { 
   padding: 1.5em;
  }

  //Styles for laptops screens and above
  @media screen and (min-device-width: 1025px) { 
   padding: 2em;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
        Billify App
      </AppContainer>
    </AppWrapper>
  );
}

export default App;