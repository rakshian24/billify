import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { configureStore } from './common/store';
import { rootReducer, initialState } from "./reducers";
import { APP_NAME } from "./constants";

const store = configureStore({
  initialState,
  appName: APP_NAME,
  rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
