import React from 'react';
import CollectionItems from '../collection-items/collection-items';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItems key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
