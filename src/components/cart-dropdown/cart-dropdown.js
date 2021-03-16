import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import CartItems from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import { toggleCartHidden } from '../reducer/cart/cartAction';
import { selectCartItems } from '../reducer/cart/cartSelector';
import './cart-dropdown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => {
          return <CartItems key={cartItem.id} item={cartItem}></CartItems>;
        })
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>

    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
      Go To CheckOut
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
// const mapStateToProps = (state) => {
//   return {
//     cartItems: selectCartItems(state),
//   };
// };

export default withRouter(connect(mapStateToProps)(CartDropDown));
