import { TrackModel } from './track.model';


export interface PlaylistModel {
  id: string;
  name: string;
  background: string;
  tracks: TrackModel[];
}
