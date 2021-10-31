import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 'p1',
    title: 'Sushi',
    price: 19.99,
    description: 'Japanee authenticity',
  },
  {
    id: 'p2',
    title: 'Pasta',
    price: 11.59,
    description: 'Italian pasta very cool!',
  },
  {
    id: 'p3',
    title: 'Burger',
    price: 20.44,
    description: 'American greasy delecacy..',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
