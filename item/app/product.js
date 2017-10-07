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


class Product extends Component{
	constructor(props){
		super(props);
	}
  render(){
    return(
    	<View>
    		<Text>Category: { this.props.info.category } </Text>
    		<Text>Name: { this.props.info.name } </Text>
    		<Text>Price: { this.props.info.price } Rs. </Text>
    		<Text>Brand: { this.props.info.brand } </Text>
    		<Button
    		    title="Add to Cart"
    		    onPress={this.props.add_product.bind(this, this.props.info)}
    		/>
    	</View>
    );
  }
}

export default Product;