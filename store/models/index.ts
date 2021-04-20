import regBarModel, { RegBarModel } from './regBar';
import regFormModel, { RegFormModel } from './regForm';

export interface StoreModel {
  regBar: RegBarModel;
  regForm: RegFormModel;
}

const storeModel: StoreModel = {
  regBar: regBarModel,
  regForm: regFormModel,
};

export default storeModel;
