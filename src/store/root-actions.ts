import { routerActions } from 'react-router-redux';
import { ActionType } from 'typesafe-actions';

import * as homeActions from '../home/store/actions';
import * as playlistActions from '../playlist/store/actions';


const rootActions = {
  router: routerActions,
  home: homeActions,
  playlist: playlistActions
};

export type RootAction = ActionType<typeof rootActions>;
