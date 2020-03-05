import { createAction, props } from '@ngrx/store';
import {
  customActionTypes,
  ProductCollection,
  Page,
  LoginModel,
  LoggedUserModel
} from '@shared/models/index';

export const loadDialog = createAction(
  customActionTypes.displayWindow,
  props<{ payload: boolean }>()
);

export const loadMessage = createAction(
  customActionTypes.dialogMessage,
  props<{ payload: string }>()
);

export const loadProductCollections = createAction(
  customActionTypes.loadProductCollections,
  props<{ payload: Page }>()
);

export const loadProductCollectionSuccess = createAction(
  customActionTypes.loadProductCollectionSuccess,
  props<{ payload: Array<ProductCollection> }>()
);

export const loadLoginInfo = createAction(
  customActionTypes.loadLoginInfo,
  props<{ payload: LoginModel }>()
);

export const loginSuccess = createAction(
  customActionTypes.loginSuccess,
  props<{ payload: LoggedUserModel }>()
);
