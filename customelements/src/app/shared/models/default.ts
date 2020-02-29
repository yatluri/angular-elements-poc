import { CustomElementState } from '@shared/models/custom-element.state';
export const initialState: CustomElementState = {
  dialogMessage: '',
  displayWindow: false
};

export const customActionTypes = {
  dialogMessage: '[Custom-Elements] dialog Message',
  displayWindow: '[Custom-Elements] display Window'
};
