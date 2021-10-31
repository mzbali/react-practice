import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            item={{
              title: item.name,
              quantity: item.amount,
              total: item.amount * item.price,
              price: item.price,
            }}
          />
        ))}
        {cartItems.length === 0 && <li>No cart Item</li>}
      </ul>
    </Card>
  );
};

export default Cart;
