import { PlaylistInfoModel } from './playlist.model';


export interface CollectionModel {
  id: string;
  name: string;
  playlists: PlaylistInfoModel[]
}
