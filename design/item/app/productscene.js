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
import ProductList from './productlist'
import Cart from './cart'

import _ from 'lodash'

let product_list = {
	"SD2014-CF-P":{
		"category": "electronics",
		"name":"Nexus 6",
		"price": 3500,
		"brand": "LG",
		"sku": "SD2014-CF-P"
	},
	"SD2015-CF-P":{
		"category": "electronics",
		"name":"Apple Watch",
		"price": 6000,
		"brand":"Apple",
		"sku":"SD2015-CF-P"
	},
	"SD2016-CF-P":{
		"category": "electronics",
		"name":"Havels Switch",
		"price": 120,
		"brand":"Havels",
		"sku":"SD2016-CF-P"
	},
	"SD2017-CF-P":{
		"category": "electronics",
		"name":"Laser Mouse",
		"price": 450,
		"brand":"Logitech",
		"sku":"SD2017-CF-P"
	},
	"SD2018-CF-P":{
		"category": "electronics",
		"name":"Mini Keyboard",
		"price": 850,
		"brand":"Logitech",
		"sku":"SD2018-CF-P"
	},
	"SD2019-CF-P":{
		"category": "clothing",
		"name":"Tracks",
		"price": 120,
		"brand":"Nike",
		"sku":"SD2019-CF-P"
	},
	"SD2020-CF-P":{
		"category": "clothing",
		"name":"Swim Suit",
		"price": 120,
		"brand":"Puma",
		"sku":"SD2020-CF-P"
	}
};

class ProductScene extends Component{
	constructor(props) {
		super(props);
		this.state = { cart_items : [] };
		this.add_product_to_cart = this.add_product_to_cart.bind(this);
		this.remove_product_from_cart = this.remove_product_from_cart.bind(this);
	}

	add_product_to_cart(product) {
		var present_in_cart = false;

		for(var i=0; i < this.state.cart_items.length; i++){
			if(this.state.cart_items[i].sku == product.sku){
				present_in_cart = true
				this.state.cart_items[i].count = this.state.cart_items[i].count + 1
				this.state.cart_items[i].price = this.state.cart_items[i].price + product.price
			}
		}

		if(!present_in_cart){
			var new_product = _.clone(product)
			new_product.count = 1
			this.state.cart_items.push(new_product)
		}
  		this.setState({cart_items: this.state.cart_items } );
  	}

  	remove_product_from_cart(product) {
  		var cart_items = _.reject(this.state.cart_items, function(item){ return product.sku == item.sku})
  		this.setState({cart_items: cart_items});
  	}


  render(){
    return(
    	<ScrollView>
    		<ProductList product_list={product_list} add_product={this.add_product_to_cart} />
    		<Cart cart_items={this.state.cart_items} remove_product={this.remove_product_from_cart} />
    	</ScrollView>
    );
  }
}

export default ProductScene;