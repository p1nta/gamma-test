import * as ActionsConst from '../constants/actions';
import Model from '../state/models/model';

export default function (state, payload) {
  const { type } = payload;

  switch (type) {
    case ActionsConst.CUSTOM_ACTION: {
      state.merge({ init: true });
      break;
    }

    default:
      break;
  }

  return state || new Model();
}
