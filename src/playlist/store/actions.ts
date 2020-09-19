import { createAction, createAsyncAction } from 'typesafe-actions';

import { Id } from '../../models';
import { State } from './state';


type PlaylistPayloadModel = Pick<State, 'playlistInfo' | 'tracks' | 'trackIds'>;

export const loadPlaylist = createAsyncAction(
  'LOAD_PLAYLIST_REQUEST',
  'LOAD_PLAYLIST_SUCCESS',
  'LOAD_PLAYLIST_FAILURE',
)<string, PlaylistPayloadModel, string>();

export const resetPlaylist = createAction('RESET_PLAYLIST')();

export const playTrack = createAction('PLAY_TRACK')<Id>();
