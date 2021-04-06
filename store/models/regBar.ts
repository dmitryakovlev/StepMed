import { action, Action } from 'easy-peasy';

export interface RegBarModel {
  regBarVisibility: boolean;
  setRegBarVisibility: Action<RegBarModel, boolean>;
}

const regBarModel: RegBarModel = {
  regBarVisibility: false,
  setRegBarVisibility: action((state, payload) => {
    state.regBarVisibility = payload;
  }),
};

export default regBarModel;
