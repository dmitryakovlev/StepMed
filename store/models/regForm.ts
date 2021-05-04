import { action, Action } from 'easy-peasy';

export enum MessageStatusENUM {
  INITIAL = 'INITIAL',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export interface RegFormModel {
  fullName: string;
  phoneNumber: string;
  isDataProcessingAgreed: boolean;
  messageStatus: MessageStatusENUM;
  setFullName: Action<RegFormModel, string>;
  setPhoneNumber: Action<RegFormModel, string>;
  setIsDataProcessingAgreed: Action<RegFormModel, boolean>;
  setMessageStatus: Action<RegFormModel, MessageStatusENUM>;
}

const regBarModel: RegFormModel = {
  fullName: '',
  phoneNumber: '',
  isDataProcessingAgreed: false,
  messageStatus: MessageStatusENUM.INITIAL,
  setFullName: action((state, payload) => {
    state.fullName = payload;
  }),
  setPhoneNumber: action((state, payload) => {
    state.phoneNumber = payload;
  }),
  setIsDataProcessingAgreed: action((state, payload) => {
    state.isDataProcessingAgreed = payload;
  }),
  setMessageStatus: action((state, payload) => {
    state.messageStatus = payload;
  }),
};

export default regBarModel;
