import { TrackModel, TrackNetworkModel } from './track.model';


export type Id = string;

export interface PlaylistNetworkModel {
  id: Id;
  name: string;
  background: string;
  tracks: TrackNetworkModel[];
}

export interface PlaylistModel {
  id: Id;
  name: string;
  background: string;
  trackIds: Id[];
  tracks: Record<Id, TrackModel>;
}
