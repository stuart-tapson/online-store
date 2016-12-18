import React, {PropTypes} from 'react';

const ProductDetails = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetails;
