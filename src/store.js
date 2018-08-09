import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import debugMiddleware from './middlewares/debug';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(
    sagaMiddleware,
    debugMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers/index').default); // eslint-disable-line
  });
}

export default store;
