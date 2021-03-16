import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../reducer/cart/cartAction';
import { selectCartItemCount } from '../reducer/cart/cartSelector';
import './card-icon.scss';

const CardIcon = ({ toggleCartHidden, itemCounts }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='.shopping-icon ' />
    <span className='item-count'>{itemCounts}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

const mapStateToProps = createStructuredSelector({
  itemCounts: selectCartItemCount,
});

// const mapStateToProps = (state) => {
//   return {
//     itemCounts: selectCartItemCount(state),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
