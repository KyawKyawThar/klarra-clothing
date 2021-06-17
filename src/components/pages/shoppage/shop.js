import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  converCollectionSnapshotToMap,
  firestore,
} from '../../../firebase/firebase.utils';

import CollectionOverview from '../../collectionsOverview/collectionsOverview';
import { updateCollections } from '../../reducer/shopReducer/shopAction';
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {
  unscribedFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unscribedFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = converCollectionSnapshotToMap(snapshot);
      // console.log(collectionMap);
      updateCollections(collectionMap);
    });
  }
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      </div>
    );
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    updateCollections: (a) => dispatch(updateCollections(a)),
  };
};

export default connect(null, mapStateToDispatch)(ShopPage);
