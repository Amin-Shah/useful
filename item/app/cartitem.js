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


class CartItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text> Name: {this.props.info.name} </Text>
                <Text> Count: {this.props.info.count} </Text>
                <Text> Price: {this.props.info.price} </Text>
                <Text> Brand: {this.props.info.brand} </Text>
                <Button
                    title="Remove from Cart"
                    onPress={this.props.remove_product.bind(this, this.props.info)}
                />
            </View>
        );
    }
}

export default CartItem;