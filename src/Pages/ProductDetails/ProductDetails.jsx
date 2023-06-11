import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <h1>ProductDetails</h1>
      <h2>{ id }</h2>
      <button>
      {/* < to='..' > means go back to parent route (in this case to Home route), except we add < relative="path" > that means go back from route, ex: from /products/3 to /products */}
        {/* <Link to='..' >  */}
        <Link to='..' relative="path" > 
          Back
        </Link>
      </button>
    </>
  )
}

export default ProductDetails;
