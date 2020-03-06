import { CustomElementState } from '@shared/models/custom-element.state';
export const initialState: CustomElementState = {
  dialogMessage: '',
  displayWindow: false,
  page: {
    number: 0,
    size: 100,
    query: '',
    sortColumn: 'Name',
    filter: '',
    sortDir: 'desc',
    totalElements: 0,
    totalPages: 0
  },
  loginModel: {
    asi_number: 125724,
    userName: 'yatluri',
    password: 'Pavan990.',
    app_group: null,
    app_code: 'SITA',
    app_version: '3.0.0',
    kick: null,
    invoke: null
  }
};

export const customActionTypes = {
  dialogMessage: '[Custom-Elements] dialog Message',
  displayWindow: '[Custom-Elements] display Window',
  loadProductCollections: '[Custom-Elements] load Product Collections',
  loadProductCollectionSuccess:
    '[Custom-Elements] load Product Collection Success',
  loadLoginInfo: '[Custom-Elements] load login information',
  loginSuccess: '[Custom-Elements] Login Success'
};
