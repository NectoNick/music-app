import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadCollections } from './actions';
import { initialState, State } from './state';


const collections = createReducer(initialState.collections)
  .handleAction(loadCollections.success, (collections, { payload }) => payload);

const isLoading = createReducer(initialState.isLoading)
  .handleAction(loadCollections.request, () => true)
  .handleAction(loadCollections.success, () => false);

export const homeReducer = combineReducers<State>({
  collections,
  isLoading,
});
