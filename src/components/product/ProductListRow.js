import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td><Link to={'/product/' + product.id}>{product.name}</Link></td>
      <td>{product.manufacturer}</td>
      <td>{product.category}</td>
      <td>{product.subcategory}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
