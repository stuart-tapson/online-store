import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductDetails from './ProductDetails';

class ProductDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, this.props.product)
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.product.id != nextProps.product.id) {
      this.setState({product: Object.assign({}, nextProps.product)});
    }
  }

  render() {
    return (
      <div>
        <ProductDetails product={this.state.product} />
      </div>
    );
  }
}

ProductDetailsPage.propTypes = {
  product: PropTypes.object.isRequired
};

function getProductById(products, id) {
  const product = products.filter(product => product.id == id);

  if (product.length) {
    return product[0];
  }

  return null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id;

  let product = {
    id: "",
    name: "",
    manufacturer: "",
    category: "",
    subcategory: "",
    image: "",
    additionalDetails: {

    }
  };

  if (productId && state.products.length > 0) {
    product = getProductById(state.products, productId);
  }

  return {
    product: product
  };
}

export default connect(mapStateToProps)(ProductDetailsPage);
