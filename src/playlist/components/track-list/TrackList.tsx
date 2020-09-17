import * as React from 'react';
import Table from 'react-bootstrap/Table';

import { TrackModel } from '../../../models'


interface Props {
  model: TrackModel[];
  className?: string;
}

export default function TrackList({ model, className }: Props) {
  return (
    <Table striped bordered hover className={ className }>
      <tbody>
        {
          model.map((track) =>
            <tr key={ track.id }>
              <td><PlayButton /></td>
              <td>{ track.name } { track.id }</td>
              <td>{ track.time }</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}

function PlayButton() {
  return (
    <span style={ { padding: '0.5rem 1rem', border: '1px solid black', borderRadius: '15px', cursor: 'pointer' } }>
      Play
    </span>
  );
}
