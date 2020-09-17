import { createSelector } from 'reselect';

import { State } from './state';


export const getCollections = (state: State) => state.collections;
