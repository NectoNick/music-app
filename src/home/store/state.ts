import { CollectionModel } from '../../models';


export interface State {
  collections: CollectionModel[];
  isLoading: boolean;
}

export const initialState: State = {
  collections: [],
  isLoading: false,
};
