import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { IntlWrapper } from 'lib-pintl';

const Viewport = props => (
  <Provider store={props.store}>
    <IntlWrapper
      messages={props.lang}
    >
      {props.children}
    </IntlWrapper>
  </Provider>
);

Viewport.propTypes = {
  lang: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  store: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  children: PropTypes.node,
};

Viewport.defaultProps = {
  lang: {},
  store: {},
  children: null,
};

export default Viewport;
