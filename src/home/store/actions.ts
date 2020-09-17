import { createAsyncAction } from 'typesafe-actions';

import { CollectionModel } from '../../models'


export const loadCollections = createAsyncAction(
  'LOAD_COLLECTIONS_REQUEST',
  'LOAD_COLLECTIONS_SUCCESS',
  'LOAD_COLLECTIONS_FAILURE'
)<undefined, CollectionModel[], string>();
