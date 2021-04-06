import regBarModel, { RegBarModel } from './regBar';

export interface StoreModel {
  regBar: RegBarModel;
}

const storeModel: StoreModel = {
  regBar: regBarModel,
};

export default storeModel;
