import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Fragment>
      <h1>This is a products page</h1>
      <ul>
        <li>
          <Link to="/products/b1">Dune</Link>
        </li>
        <li>
          <Link to="/products/b2">A Breif History of Mankind</Link>
        </li>
        <li>
          <Link to="/products/b3">Sophlie's World</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
