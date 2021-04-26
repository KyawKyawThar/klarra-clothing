import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../collectionsOverview/collectionsOverview';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  // console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />

      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
    </div>
  );
};

export default ShopPage;
