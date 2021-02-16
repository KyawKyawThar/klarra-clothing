import React from 'react';
import CollectionPreview from '../../collection-preview/collection-preivew';
import SHOP_DATA from './shop-data';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
