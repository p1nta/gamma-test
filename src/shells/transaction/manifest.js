import { TRANSACTION_INIT } from '../../constants/actions';

export default (app, props) => { // eslint-disable-line
  return Promise.resolve()
    .then(() => Promise.all([
      app.mountTemplate('transaction', 'loading'),
      app.mountLang('transaction', 'en'),
    ]))
    .then(() => app.datasource.getData('transaction', props.id))
    .catch((err) => ({})) // eslint-disable-line
    .then((data) => { // eslint-disable-line
      return app.mountContainer('transaction', {
        type: TRANSACTION_INIT,
        data,
      }).then(() => app.unmountStyle('transaction', 'loading'));
    })
    .catch((err) => {
      if (err === 'Bad Request' || err === 'Not Found') {
        return app.mountTemplate('transaction', 'not_found');
      }

      return Promise.reject(err);
    });
};
