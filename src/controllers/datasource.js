import IDBController from './idb';
import { requestHeader } from '../utils/request_header';

const API_URL = 'https://fast-reef-46657.herokuapp.com';
const IDBRequest = {
  transaction: new IDBController('transaction'),
};

const ServerRequests = {
  transaction: {
    get: id => fetch(`${API_URL}/v0/transactions/${id}`, {
      method: 'GET',
      headers: requestHeader(),
    }),
  },
};

export function getData(name, id) {
  return ServerRequests[name]
    .get(id)
    .then((res) => {
      if (res.status === 404) {
        return Promise.reject('Not Found');
      }

      if (res.status === 400) {
        return Promise.reject('Bad Request');
      }

      return res.json();
    })
    .catch((err) => {
      if (err === 'Not Found') {
        return IDBRequest[name]
          .get(id)
          .then((res) => {
            if (typeof res !== 'undefined') {
              return Promise.resolve(res);
            }

            return Promise.reject('Not Found');
          });
      }

      return Promise.reject(err);
    });
}
