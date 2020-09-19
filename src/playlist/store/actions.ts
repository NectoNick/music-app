import { createAction, createAsyncAction } from 'typesafe-actions';

import { PlaylistModel, Id } from '../../models';


export const loadPlaylist = createAsyncAction(
  'LOAD_PLAYLIST_REQUEST',
  'LOAD_PLAYLIST_SUCCESS',
  'LOAD_PLAYLIST_FAILURE',
)<string, PlaylistModel, string>();

export const resetPlaylist = createAction('RESET_PLAYLIST')();

export const playTrack = createAction('PLAY_TRACK')<Id>();
