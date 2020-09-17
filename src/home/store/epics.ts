import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import { catchError, delay, filter, map, switchMap } from 'rxjs/operators';

import { RootAction } from '../../store/root-actions';
import { RootState } from '../../store/root-state';
import { loadCollections } from './actions';
import { CollectionModel } from '../../models';
import mockCollections from '../mocks/collections.json';


export const loadCollectionsEpic: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
  filter(isActionOf(loadCollections.request)),
  switchMap(() =>
    of(mockCollections as CollectionModel[]).pipe(
      delay(300),
      map(loadCollections.success),
      catchError((message: string) => of(loadCollections.failure(message)))
    )
  )
);
