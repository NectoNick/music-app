import * as React from 'react';
import { connect} from 'react-redux';
import { useEffect } from 'react';

import './Home.scss';
import { RootState } from '../../../store/root-state';
import { loadCollections } from '../../store/actions';
import * as selectors from '../../store/selectors';
import Collection from '../collection/Collection';
import { Spinner } from '../../../shared/';


type Props = ReturnType<typeof mapStateToProps> & typeof mapActionsToProps;

const mapStateToProps = ({ home }: RootState) => {
  return {
    collections: selectors.getCollections(home),
    isLoading: home.isLoading
  };
};

const mapActionsToProps = {
  loadCollections: loadCollections.request
};

function Home({ collections, isLoading, loadCollections }: Props) {

  useEffect(() => {
    loadCollections();
  }, []);

  return (
    <div className="home-page">
      <Spinner isRunning={ isLoading }>
        {
          collections.map((collection) =>
              <Collection key={ collection.id }
                          model={ collection }
              />
            )
        }
      </Spinner>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
