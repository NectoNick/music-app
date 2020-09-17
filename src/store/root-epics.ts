import { combineEpics } from 'redux-observable';

import * as homeEpics from '../home/store/epics';
import * as playlistEpics from '../playlist/store/epics';


export const rootEpics = combineEpics(
  ...Object.values(homeEpics),
  ...Object.values(playlistEpics),
);
