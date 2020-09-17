import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './root-reducer';
import { initialState, RootState } from './root-state';
import { RootAction } from './root-actions';
import { rootEpics } from './root-epics';


export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

const middlewares = [
  epicMiddleware
];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

epicMiddleware.run(rootEpics);

export { store };
