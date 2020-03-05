import { createReducer, on, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  initialState,
  customActionTypes,
  CustomElementState
} from '@shared/models/index';

import * as customElementActions from '../actions/custom-element.action';

import { environment } from '@environment/environment';

export class Reducer {
  public static customReducer = createReducer(
    initialState,
    on(customElementActions.loadDialog, (state, action) => {
      console.log('action', action.payload);
      return {
        ...state,
        displayWindow: action.payload
      };
    }),
    on(customElementActions.loadMessage, (state, action) => {
      return {
        ...state,
        dialogMessage: action.payload
      };
    }),
    on(customElementActions.loadProductCollections, (state, action) => {
      return {
        ...state,
        page: action.payload
      };
    }),
    on(customElementActions.loadProductCollectionSuccess, (state, action) => {
      return {
        ...state,
        productCollections: action.payload
      };
    }),
    on(customElementActions.loadLoginInfo, (state, action) => {
      return {
        ...state,
        loginModel: action.payload
      };
    }),
    on(customElementActions.loginSuccess, (state, action) => {
      return {
        ...state,
        loggedUserModel: action.payload
      };
    })
  );
}

export interface AppState {
  customElementState: CustomElementState;
}

export const reducerMap: ActionReducerMap<AppState> = {
  customElementState: Reducer.customReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
