import { TrackNetworkModel } from './track.model';


export type Id = string;

export interface PlaylistNetworkModel {
  id: Id;
  name: string;
  background: string;
  tracks: TrackNetworkModel[];
}

export interface PlaylistInfoModel {
  id: Id;
  name: string;
  background: string;
}
