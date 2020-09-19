import { Id, PlaylistInfoModel, TrackModel } from '../../models';


export interface State {
  playlistInfo: PlaylistInfoModel | null;
  trackIds: Id[];
  tracks: Record<Id, TrackModel>;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  playlistInfo: null,
  trackIds: [],
  tracks: {},
  isLoading: false,
  error: ''
};
