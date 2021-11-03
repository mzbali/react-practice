import { useParams } from 'react-router-dom';

const ProductItem = () => {
  const params = useParams();
  return <p>Product number = {params.productId}</p>;
};
export default ProductItem;
