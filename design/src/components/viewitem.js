import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Card, CardItem, Left, Right, Image, Icon, Body, Thumbnail } from 'native-base'



class Viewitem extends Component {
    render() {
        return (
            <View>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'Image URL' }} />
                        <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>
            </View>
        );
    }
}

export default Viewitem;