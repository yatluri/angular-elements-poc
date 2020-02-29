import { createReducer, on } from '@ngrx/store';
import { initialState, customActionTypes } from '@shared/models/default';

import * as customElementActions from '../actions/custom-element.action';

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
