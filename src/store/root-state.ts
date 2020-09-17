import { RouterState } from 'react-router-redux';

import { State as HomeState } from '../home/store/state';
import { State as PlaylistState } from '../playlist/store/state';


export interface RootState {
  router: RouterState
  home: HomeState,
  playlist: PlaylistState,
}

export const initialState: {} = {};
