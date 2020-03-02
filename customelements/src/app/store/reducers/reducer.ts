import { createReducer, on, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { initialState, customActionTypes } from '@shared/models/default';

import * as customElementActions from '../actions/custom-element.action';
import { CustomElementState } from '@shared/models/custom-element.state';
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
