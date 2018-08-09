
import { State } from 'quantizer';
import schema from '../schemes/model';
import initialState from '../../constants/initial_state';

export default class IdentityModel extends State.Map {
  static schema = schema;

  constructor(value) {
    super({ ...initialState.model, ...value });
  }
}
