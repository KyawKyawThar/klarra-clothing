import { connect } from 'react-redux';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../reducer/cart/cartAction';

import './checkout-item.scss';

const CheckoutItems = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>

      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10007;
      </div>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearItemFromCart(item)), //action ka clearItemFromCart
    addItem: (item) => dispatch(addItem(item)), //action ka addItem
    removeItem: (item) => dispatch(removeItem(item)), //action ka removeItem
  };
};

export default connect(null, mapStateToDispatch)(CheckoutItems);
