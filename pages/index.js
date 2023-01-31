import React from 'react';

const Product = ({ id }) => {
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
};

Product.getInitialProps = ({ query }) => {
  return { id: query.id };
};

export default Product;
