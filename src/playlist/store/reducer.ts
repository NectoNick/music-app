import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadPlaylist, resetPlaylist } from './actions';
import { initialState, State } from './state';


const playlist = createReducer(initialState.playlist)
  .handleAction(loadPlaylist.success, (playlist, { payload }) => payload)
  .handleAction(resetPlaylist, () => null);

const isLoading = createReducer(initialState.isLoading)
  .handleAction(loadPlaylist.request, () => true)
  .handleAction([loadPlaylist.success, loadPlaylist.failure], () => false);

const error = createReducer(initialState.error)
  .handleAction(loadPlaylist.failure, (error, { payload }) => payload);

export const playlistReducer = combineReducers<State>({
  playlist,
  isLoading,
  error
});
