import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { of, throwError } from 'rxjs';
import { catchError, delay, filter, map, switchMap } from 'rxjs/operators';

import { RootAction } from '../../store/root-actions';
import { RootState } from '../../store/root-state';
import { loadPlaylist } from './actions';
import { PlaylistModel } from '../../models';
import mockCollections from '../../home/mocks/collections.json';
import mockPlaylist from '../mocks/playlist.json';


export const loadPlaylistEpic: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
  filter(isActionOf(loadPlaylist.request)),
  switchMap(({ payload }: any) => {
    const playlists = mockCollections.reduce(
      (acc: Partial<PlaylistModel>[], collection) => [...acc, ...collection.playlists],
      []
    );
    const playlistIds = playlists.map(({ id }) => id);

    const mockRequest = playlistIds.includes(payload)
      ? of(mockPlaylist as unknown as PlaylistModel)
      : throwError('Playlist not found');

    return mockRequest.pipe(
      delay(150),
      map((playlist) => {
        const newName = playlists.find((playlist) => playlist.id === payload)?.name;
        const background = playlists.find((playlist) => playlist.id === payload)?.background || playlist.background;
        return { ...playlist, name: newName || playlist.name, background };
      }),
      map(loadPlaylist.success),
      catchError((message: string) => of(loadPlaylist.failure(message))),
      delay(150),
    );
  })
);
