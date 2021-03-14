import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import { selectCartItems } from '../reducer/cart/cartSelector';
import './cart-dropdown.scss';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => {
        return <CartItems key={cartItem.id} item={cartItem}></CartItems>;
      })}
    </div>

    <CustomButton>Go To CheckOut</CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropDown);
