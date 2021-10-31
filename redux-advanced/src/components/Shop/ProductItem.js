import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const addCartHandler = () => {
    const product = { id, name: title, price, amount: 1 };
    dispatch(cartActions.addToCart(product));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
