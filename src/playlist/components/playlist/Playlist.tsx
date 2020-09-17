import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Playlist.scss';
import { loadPlaylist, resetPlaylist } from '../../store/actions';
import { RootState } from '../../../store/root-state';
import * as selectors from '../../store/selectors';
import TrackList from '../track-list/TrackList';
import { Spinner } from '../../../shared/';


type Props = ReturnType<typeof mapStateToProps> & typeof mapActionsToProps & { match?: { params: { id: string } } };

const mapStateToProps = ({ playlist }: RootState) => {
  return {
    playlist: selectors.getPlaylist(playlist),
    isLoading: playlist.isLoading,
    error: playlist.error
  };
};

const mapActionsToProps = {
  loadPlaylist: loadPlaylist.request,
  resetPlaylist
};

function Playlist({ error, isLoading, playlist, match, loadPlaylist, resetPlaylist }: Props) {

  useEffect((): any => {
    loadPlaylist(match?.params.id!);
    return () => resetPlaylist();
  }, []);

  const BackButton = withRouter(({ history }) => {
    return <button onClick={() => history.goBack()}>Back</button>;
  });

  return (
    <div className="playlist-page">
      <Spinner isRunning={ isLoading }>
        {
          !!playlist && !error
            ? <div>
                <Row>
                  <Col>
                    <div className="playlist-background"
                         style={ { backgroundColor: playlist.background } }>
                    </div>
                  </Col>
                  <Col>
                    <h3>{ playlist.name }</h3>
                    <p>{ playlist.tracks.length } tracks</p>
                  </Col>
                </Row>
                <TrackList className="playlist-tracks"
                           model={ playlist.tracks }
                />
              </div>
            : <div>{ error }</div>
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
