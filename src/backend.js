import React from 'react';
import { render } from 'react-dom';
import Viewport from './components/viewport/index';
import store from './store';

let app = null; // eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

const dispatch = store.dispatch;

const renderToRoot = (component, lang) => {
  render(React.createElement(
    Viewport,
    { store, lang },
    React.createElement(component),
  ), document.getElementById('root'));
};

const renderModal = (component, lang) => {
  console.warn('Unimplemented', component, lang);
};

const delegateAppController = (appController) => {
  app = appController;
};

export {
  delegateAppController,
  renderToRoot,
  renderModal,
  dispatch,
};
