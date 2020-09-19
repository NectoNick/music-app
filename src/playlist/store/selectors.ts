import { createSelector } from 'reselect';

import { State } from './state';
import { TrackModel } from '../../models';


type TrackList = TrackModel[];

export const getPlaylistInfo = (state: State) => state.playlistInfo;

export const getTrackIds = (state: State) => state.trackIds;

export const getTracksCount = createSelector(
  getTrackIds,
  (trackIds): number => trackIds.length
);

const getTracks = (state: State) => state.tracks;

export const getTrackList = createSelector(
  [getTracks, getTrackIds],
  (tracks, trackIds): TrackList => trackIds.map(trackId => tracks[trackId])
);
