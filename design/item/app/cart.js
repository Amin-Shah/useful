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
import CartItem from './cartitem'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { added_cart_items: props.cart_items }
    }

    componentWillReceiveProps(props) {
        this.setState({ added_cart_items: props.cart_items })
    }

    render() {
        var cart_items = []

        for (var i = 0; i < this.state.added_cart_items.length; i++) {
            cart_items.push(<CartItem info={this.state.added_cart_items[i]} remove_product={this.props.remove_product} />)
        }

        return (
            <View>
                <Text> Cart </Text>
                {cart_items}
            </View>
        );
    }
}

export default Cart;