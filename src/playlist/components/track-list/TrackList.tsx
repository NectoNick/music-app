import * as React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

import './TrackList.scss';
import { RootState } from '../../../store/root-state';
import * as selectors from '../../store/selectors';
import { playTrack } from '../../store/actions';


interface OwnProps {
  className?: string;
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapActionsToProps & OwnProps;

const mapStateToProps = ({ playlist }: RootState) => {
  return {
    trackList: selectors.getTrackList(playlist),
  };
};

const mapActionsToProps = {
  playTrack
};

function TrackList({ trackList, className, playTrack }: Props) {
  return (
    <Table striped bordered hover className={ `table-track-list ${className}` }>
      <tbody>
        {
          trackList.map(({ id, name, time, isPlaying }) =>
            <tr key={ id }>
              <td>
                <PlayButton isPlaying={ isPlaying }
                            clicked={ () => { playTrack(id) } }
                />
              </td>
              <td>{ name } { id }</td>
              <td>{ time }</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TrackList)


interface ButtonProps {
  isPlaying: boolean;
  clicked: () => void;
}

function PlayButton({ isPlaying, clicked }: ButtonProps) {
  const style: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: '1px solid black',
    borderRadius: '15px',
    cursor: 'pointer'
  };
  return (
    <span style={ style }
          onClick={ () => clicked() }>
      { isPlaying ? 'Stop' : 'Play' }
    </span>
  );
}
