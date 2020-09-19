import { createSelector } from 'reselect';

import { State } from './state';
import { TrackModel } from '../../models';


type TrackList = TrackModel[];

export const getPlaylist = (state: State) => state.playlist;

const getTracks = createSelector(
  getPlaylist,
  (playlist) => playlist?.tracks || {}
);

const getTrackIds = createSelector(
  getPlaylist,
  (playlist) => playlist?.trackIds || []
);

export const getTrackList = createSelector(
  [getTracks, getTrackIds],
  (tracks, trackIds): TrackList => trackIds.map(trackId => tracks[trackId])
);
