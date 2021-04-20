import { action, Action, thunk } from 'easy-peasy';

export interface RegFormModel {
  fullName: string;
  phoneNumber: string;
  isDataProcessingAgreed: boolean;
  setFullName: Action<RegFormModel, string>;
  setPhoneNumber: Action<RegFormModel, string>;
  setIsDataProcessingAgreed: Action<RegFormModel, boolean>;
  // sendMessage: Action<RegFormModel>;
}

const regBarModel: RegFormModel = {
  fullName: '',
  phoneNumber: '',
  isDataProcessingAgreed: false,
  setFullName: action((state, payload) => {
    state.fullName = payload;
  }),
  setPhoneNumber: action((state, payload) => {
    state.phoneNumber = payload;
  }),
  setIsDataProcessingAgreed: action((state, payload) => {
    state.isDataProcessingAgreed = payload;
  }),
  // sendMessage: thunk(async (actions, payload) => {
  //   const adasda = await fetch('/api/sendTelegramMessage', {
  //     body: JSON.stringify({
  //       messageText: `${state.fullName}: ${state.phoneNumber}`,
  //     }),
  //   });
  // }),
};

export default regBarModel;
