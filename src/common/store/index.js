import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export const configureStore = ({
  initialState,
  appName,
  rootReducer,
  rootSaga,
  middlewares = [],
}) => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: appName,
      })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, ...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);
  rootSaga && sagaMiddleware.run(rootSaga);

  return store;
};
