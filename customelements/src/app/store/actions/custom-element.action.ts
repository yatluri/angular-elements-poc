import { createAction, props } from '@ngrx/store';
import { customActionTypes } from '@shared/models/default';

export const loadDialog = createAction(
  customActionTypes.displayWindow,
  props<{ payload: boolean }>()
);

export const loadMessage = createAction(
  customActionTypes.dialogMessage,
  props<{ payload: string }>()
);
