import React from 'react';
import { connect } from 'react-redux';

const TransactionContainer = () => (
  <div>
    Transaction Container
  </div>
);

export default connect(() => ({}), null, null, { pure: false })(TransactionContainer);
