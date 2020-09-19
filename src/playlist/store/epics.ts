import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { of, throwError } from 'rxjs';
import { catchError, delay, filter, map, switchMap } from 'rxjs/operators';

import { RootAction } from '../../store/root-actions';
import { RootState } from '../../store/root-state';
import { loadPlaylist } from './actions';
import { PlaylistModel, PlaylistNetworkModel } from '../../models';
import mockCollections from '../../home/mocks/collections.json';
import mockPlaylist from '../mocks/playlist.json';


export const loadPlaylistEpic: Epic<RootAction, RootAction, RootState> = (action$) => action$.pipe(
  filter(isActionOf(loadPlaylist.request)),
  switchMap(({ payload: id }: { payload: string }) => {
    const playlists = mockCollections.reduce(
      (acc: Partial<PlaylistNetworkModel>[], collection) => [...acc, ...collection.playlists],
      []
    );
    const playlistIds = playlists.map(({ id }) => id);

    const mockRequest = playlistIds.includes(id)
      ? of(mockPlaylist as PlaylistNetworkModel)
      : throwError('Playlist not found');

    return mockRequest.pipe(
      delay(150),
      map((playlist) => {
        const newName = playlists.find((playlist) => playlist.id === id)?.name;
        const background = playlists.find((playlist) => playlist.id === id)?.background || playlist.background;
        return { ...playlist, name: newName || playlist.name, background };
      }),
      map<PlaylistNetworkModel, PlaylistModel>((playlist) => ({ // normalize tracks
        ...playlist,
        trackIds: playlist.tracks.map(track => track.id),
        tracks: playlist.tracks.reduce(
          (acc, track) => ({
            ...acc,
            [track.id]: { ...track, isPlaying: false }
          }),
          {}
        ),
      })),
      map(loadPlaylist.success),
      catchError((message: string) => of(loadPlaylist.failure(message))),
      delay(150),
    );
  })
);
