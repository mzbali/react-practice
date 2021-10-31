import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const cartAddHandler = () => {
    dispatch(
      cartActions.addToCart({ id: props.id, name: title, price, amount: 1 })
    );
  };
  const cartRemoveHandler = () => {
    dispatch(cartActions.removeFromCart({ id: props.id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartRemoveHandler}>-</button>
          <button onClick={cartAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
