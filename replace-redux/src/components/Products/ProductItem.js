import React from 'react';
import Card from '../UI/Card';
import './ProductItem.css';
import useStore from '../../store/use-store';

const ProductItem = (props) => {
  console.log('Rendering');
  const dispatch = useStore(false)[1]; //no rendering just for state value change, just accessing the dispatch function

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default React.memo(ProductItem); // only render if data changes
