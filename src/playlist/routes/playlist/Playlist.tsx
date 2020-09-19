import * as React from 'react';
import { connect } from 'react-redux';
import { useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Playlist.scss';
import { loadPlaylist, resetPlaylist } from '../../store/actions';
import { RootState } from '../../../store/root-state';
import { Spinner } from '../../../shared/';
import TrackList from '../../components/track-list/TrackList';
import PlaylistInfo from '../../components/playlist-info/PlaylistInfo';


type Props = ReturnType<typeof mapStateToProps> & typeof mapActionsToProps & { match?: { params: { id: string } } };

const mapStateToProps = ({ playlist }: RootState) => {
  return {
    isLoading: playlist.isLoading,
    error: playlist.error
  };
};

const mapActionsToProps = {
  loadPlaylist: loadPlaylist.request,
  resetPlaylist
};

const BackButton = withRouter(({ history }) => {
  return <Button onClick={ () => history.goBack() }>Back</Button>;
});

function Playlist({ error, isLoading, match, loadPlaylist, resetPlaylist }: Props) {

  useLayoutEffect((): any => {
    loadPlaylist(match?.params.id!);
    return () => resetPlaylist();
  }, []);

  return (
    <div className="playlist-page">
      <Spinner isRunning={ isLoading }>
        {
          error
            ? <div>{ error }</div>
            : <div>
                <PlaylistInfo />
                <TrackList className="playlist-tracks" />
              </div>
        }
        <BackButton />
      </Spinner>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Playlist)
