import CollectionItems from '../../collection-items/collection-items';
import './collection.component.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../reducer/shopReducer/shopSelector';

const CollectionPage = ({ collection }) => {
  console.log(collection);

  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItems
            className='collection-items '
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
//state ka overall reducer state,ownProps which is the props of the components that we're wrapping in our connect

export default connect(mapStateToProps)(CollectionPage);
