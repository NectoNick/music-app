import * as React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RootState } from '../../../store/root-state';
import * as selectors from '../../store/selectors';


type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = ({ playlist }: RootState) => {
  return {
    playlistInfo: selectors.getPlaylistInfo(playlist),
    tracksCount: selectors.getTracksCount(playlist),
  };
};

function PlaylistInfo({ playlistInfo, tracksCount }: Props) {
  return (
    <Row>
      <Col>
        <div className="playlist-background"
             style={ { backgroundColor: playlistInfo?.background } }>
        </div>
      </Col>
      <Col>
        <h3>{ playlistInfo?.name }</h3>
        <p>{ tracksCount } track{ tracksCount === 1 ? '' : 's' }</p>
      </Col>
    </Row>
  );
}

export default connect(
  mapStateToProps,
)(PlaylistInfo)
