import * as React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RootState } from '../../../store/root-state';
import * as selectors from '../../store/selectors';


type Props = ReturnType<typeof mapStateToProps>;

const mapStateToProps = ({ playlist }: RootState) => {
  return {
    playlist: selectors.getPlaylist(playlist),
  };
};

function PlaylistInfo({ playlist }: Props) {
  return (
    <Row>
      <Col>
        <div className="playlist-background"
             style={ { backgroundColor: playlist?.background } }>
        </div>
      </Col>
      <Col>
        <h3>{ playlist?.name }</h3>
        <p>{ Object.values(playlist?.tracks || {}).length } tracks</p>
      </Col>
    </Row>
  );
}

export default connect(
  mapStateToProps,
)(PlaylistInfo)
