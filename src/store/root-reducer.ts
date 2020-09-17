import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { RootState } from './root-state';
import { homeReducer } from '../home/store/reducer';
import { playlistReducer } from '../playlist/store/reducer';


export const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  home: homeReducer,
  playlist: playlistReducer,
});
