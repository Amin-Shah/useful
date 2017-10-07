import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Button,
  ScrollView
} from 'react-native';
import Product from './product'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { product_list: props.product_list }
  }

  render() {
    var products = []

    for (var key in this.state.product_list) {
      if (this.state.product_list.hasOwnProperty(key)) {
        products.push(<Product key={key} info={this.state.product_list[key]} add_product={this.props.add_product} />)
      }
    }

    return (
      <View>
        {products}
      </View>
    );
  }
}

export default ProductList;