import './collectionsOverview.scss';
import CollectionPreview from '../collection-preview/collection-preivew';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../reducer/shopReducer/shopSelector';
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overView'>
      {collections.map(({ id, ...otherCollectionsProps }) => {
        return <CollectionPreview key={id} {...otherCollectionsProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionOverview);
