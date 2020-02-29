import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CustomElementState } from '@shared/models/custom-element.state';

export const getCustomElementState = createFeatureSelector<CustomElementState>(
  'customElementState'
);

export const getDisplayWindow = createSelector(
  getCustomElementState,
  state => state.displayWindow
);

export const getDisplayMessage = createSelector(
  getCustomElementState,
  state => state.dialogMessage
);