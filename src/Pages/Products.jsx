import React from 'react';
import { Link } from 'react-router-dom';

const incommingProducts = [
  {id: '1', title: 'product-1'},
  {id: '2', title: 'product-2'},
  {id: '3', title: 'product-3'},
];

const Products = () => {
  const products = incommingProducts.map((item) => {
    return (
      <li key={item.id}>
        <Link to={item.id}>
        {/* <Link to={`/products/${item.id}`}> */}
          { item.title }
        </Link>
      </li>
    )
  });

  return (
    <>
      <h1>Products</h1>
      <ul>
        { products }
      </ul>
    </>
  )
}

export default Products