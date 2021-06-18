import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  converCollectionSnapshotToMap,
  firestore,
} from '../../../firebase/firebase.utils';

import CollectionOverview from '../../collectionsOverview/collectionsOverview';
import { updateCollections } from '../../reducer/shopReducer/shopAction';
import WithSpinner from '../../with-spinner/with-spinner-component';
import CollectionPage from '../collection/collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unscribedFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unscribedFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = converCollectionSnapshotToMap(snapshot);
      // console.log(collectionMap);
      updateCollections(collectionMap);

      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
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
