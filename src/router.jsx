import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router'; // eslint-disable-line
import Route from 'react-router/lib/Route'; // eslint-disable-line
import IndexRoute from 'react-router/lib/IndexRoute'; // eslint-disable-line
import history from './libs/utils/history'; // eslint-disable-line
import RootContainer from './components/basic/wrappers/context_provider'; // eslint-disable-line
import TransactionContainer from './containers/transaction/index'; // eslint-disable-line
import ContainerLoadController from './controllers/container_loader'; // eslint-disable-line


const AppRouter = props => (
  <Provider store={props.store} />
);

AppRouter.propTypes = {
  store: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

AppRouter.defaultProps = {
  store: {},
};

export default AppRouter;
