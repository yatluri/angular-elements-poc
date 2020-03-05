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

export const getLoginInfo = createSelector(
  getCustomElementState,
  state => state.loggedUserModel
);

export const getProductCollections = createSelector(
  getCustomElementState,
  state => state.productCollections
);
