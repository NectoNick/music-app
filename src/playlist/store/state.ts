import { PlaylistModel } from '../../models';


export interface State {
  playlist: PlaylistModel | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  playlist: null,
  isLoading: false,
  error: ''
};
