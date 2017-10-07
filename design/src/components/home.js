import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CardItem, Header, Title, Button, Label, Badge, Form, Input, Body, Item, List, ListItem, Right, Left, Icon } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid";


class Home extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Left></Left>
                    <Body>
                        <Title style={{marginLeft: '16%'}}>Shopping App</Title>
                    </Body>
                    <Right>
                    <Button transparent>
                            <Icon name='ios-log-out' />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.wrapper}>
                    <Grid>
                        <Row>
                            <Col size={20}>
                                <Button block style={styles.btn}>
                                    <Text>Electronics</Text>
                                </Button>
                            </Col>
                            <Col size={20} style={styles.col}>
                                <Button block style={styles.btn}>
                                    <Text>Mobiles</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '30%'}}>
                            <Col size={20}>
                                <Button block style={styles.btn}>
                                    <Text>Home Decorators</Text>
                                </Button>
                            </Col>
                            <Col size={20} style={styles.col}>
                                <Button block style={styles.btn}>
                                    <Text>Books</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '30%'}}>
                            <Col size={20}>
                                <Button block style={styles.btn}>
                                    <Text>Hobbies</Text>
                                </Button>
                            </Col>
                            <Col size={20} style={styles.col}>
                                <Button block style={styles.btn}>
                                    <Text>Electronics</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingLeft: '8%',
        paddingRight: '7%',
        paddingTop: '30%'
    },
    col: {
        marginLeft: '3%'
    },
    btn: {
        backgroundColor: '#fff',
        elevation: 10,
        height: 80,
        width: '100%'
    }
})

export default Home;