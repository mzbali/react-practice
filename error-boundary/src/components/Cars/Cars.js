import { useEffect, useState } from 'react';
import Car from './Car';

const initialData = [
  {
    id: 'm1',
    name: 'Ferrari',
    model: '22A3',
  },
  {
    id: 'm2',
    name: 'Toyota',
    model: '23f3',
  },
  {
    id: 'm3',
    name: 'Tesla',
    model: '2r53',
  },
  {
    id: 'm4',
    name: 'Faraday',
    model: '2s45',
  },
];
const Cars = () => {
  const [data, setData] = useState(initialData);
  const searchHandler = (event) => {
    setData(
      initialData.filter((item) => item.name.includes(event.target.value))
    );
  };

  useEffect(() => {
    if (data.length < 1) {
      throw new Error('Something went wrong');
    }
  }, [data]);

  return (
    <ol>
      <input type="text" onChange={searchHandler} />
      {data.map((item) => (
        <Car name={item.name} />
      ))}
    </ol>
  );
};

export default Cars;
