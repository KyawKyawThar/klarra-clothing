import './collectionsOverview.scss';
import CollectionPreview from '../collection-preview/collection-preivew';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../reducer/shopReducer/shopSelector';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
