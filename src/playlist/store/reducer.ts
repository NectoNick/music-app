import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadPlaylist, resetPlaylist, playTrack } from './actions';
import { initialState, State } from './state';


const playlistInfo = createReducer(initialState.playlistInfo)
  .handleAction(loadPlaylist.success, (_, { payload  }) => payload.playlistInfo)
  .handleAction(resetPlaylist, () => null);

const tracks = createReducer(initialState.tracks)
  .handleAction(loadPlaylist.success, (_, { payload }) => payload.tracks)
  .handleAction(playTrack, (currentTracks, { payload: trackId }) => {
    return Object.values(currentTracks).reduce(
      (acc, track) => ({
        ...acc,
        [track.id]: { ...track, isPlaying: track.id !== trackId ? false : !track.isPlaying }
       }),
      {}
    );
  });

const trackIds = createReducer(initialState.trackIds)
  .handleAction(loadPlaylist.success, (_, { payload }) => payload.trackIds);

const isLoading = createReducer(initialState.isLoading)
  .handleAction(loadPlaylist.request, () => true)
  .handleAction([loadPlaylist.success, loadPlaylist.failure], () => false);

const error = createReducer(initialState.error)
  .handleAction(loadPlaylist.failure, (error, { payload }) => payload);

export const playlistReducer = combineReducers<State>({
  playlistInfo,
  tracks,
  trackIds,
  isLoading,
  error
});
