import * as React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { LinkContainer } from 'react-router-bootstrap';

import './Collection.scss';
import { CollectionModel } from '../../../models';


interface Props {
  model: CollectionModel;
}

export default function Collection({ model }: Props) {

  const handleOnDragStart = (e: any) => e.preventDefault();

  const responsive = {
    0: { items: 2 },
    775: { items: 3 },
    1024: { items: 4 },
    1124: { items: 5 },
  };

  const items = model.playlists.map(({ name, id, background }) =>
    <LinkContainer to={`/playlists/${id}`}>
      <div className="playlist"
           onDragStart={ handleOnDragStart }>
        <div className="playlist-thumbnail"
             style={ { backgroundColor: background } }>
        </div>
        <h4 className="playlist-heading">{ name }</h4>
      </div>
    </LinkContainer>
  );

  return (
    <div className="collection-container">
      <h3 key={ model.id }>{ model.name }</h3>
      <Carousel mouseTrackingEnabled
                items={ items }
                responsive={ responsive }
                infinite={ true }
                dotsDisabled={ true }>
      </Carousel>
    </div>
  );
}

