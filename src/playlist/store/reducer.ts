import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadPlaylist, resetPlaylist, playTrack } from './actions';
import { initialState, State } from './state';
import { PlaylistModel } from '../../models';


const playlist = createReducer(initialState.playlist)
  .handleAction(loadPlaylist.success, (playlist, { payload }) => payload)
  .handleAction(resetPlaylist, () => null)
  .handleAction(playTrack, (playlist, { payload: trackId }) => {
    const tracks = Object.values(playlist!.tracks).reduce(
      (acc, track) => ({
        ...acc,
        [track.id]: { ...track, isPlaying: track.id !== trackId ? false : !track.isPlaying }
       }),
      {}
    );

    return { ...playlist, tracks } as PlaylistModel;
  });

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
