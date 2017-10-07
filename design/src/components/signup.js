'use strict';

import { AppRegistry, Text, TextInput, View, StyleSheet, TouchableHighlight, BackHandler, ToolbarAndroid, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Footer, FooterTab, Left, Col, Grid, Row, Header, Right, Title, Icon } from 'native-base'
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '' };

        this.nameRef = this.updateRef.bind(this, 'name');
        this.emailRef = this.updateRef.bind(this, 'email');
        this.passwordRef = this.updateRef.bind(this, 'password');
    }

    onFocus = () => {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }
        this.setState({ errors });
    }

    onChangeText = (text) => {
        ['name', 'email', 'password']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        let errors = {};
        if (this.nameRef && this.emailRef && this.passwordRef) {
            ['name', 'email', 'password']
                .forEach((name) => {
                    let value = this[name].value();
                    if (!value) {
                        errors[name] = 'Should not be empty';
                    } else {
                        if ('password' === name && value.length < 6) {
                            errors[name] = 'Too short';
                        }
                    }
                });

            this.setState({ errors });
        }
        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var userObj = { email: email, password: password, name: name };
        this.props.signupReq(userObj);
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    onSubmitName = () => {
        this.email.focus();
    }

    onSubmitEmail = () => {
        this.password.focus();
    }

    onSubmitPassword = () => {
        this.password.blur();
    }

    goToLogin = () => {
        return Actions.login();
    }

    handleClose = () => {
        BackHandler.exitApp();
    }

    render() {
        let { errors = {}, ...data } = this.state;
        return (
            <Image source={require('../images/back2.png')} style={styles.container}>
                <Button onPress={this.handleClose} transparent style={{ position: 'absolute', paddingLeft: -1 }}>
                    <Icon style={{ color: '#B82146' }} name='close-circle' />
                </Button>
                <Grid style={{ position: 'absolute', zIndex: 1000, marginTop: '11%', marginLeft: '46%' }} >
                    <Col>
                        <Image source={require('../images/logo3.png')} style={{ width: 90, height: 90 }} />
                    </Col>
                </Grid>
                <View style={styles.container1}>
                    <ScrollView keyboardShouldPersistTaps='never'>
                        <View style={styles.container2}>
                            <TextField
                                ref={this.nameRef}
                                value={data.name}
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitName}
                                returnKeyType='next'
                                label='Name'
                                error={errors.name}
                                autoFocus={true}
                                style={styles.input}
                            />
                            <TextField
                                ref={this.emailRef}
                                value={data.email}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitEmail}
                                returnKeyType='next'
                                label='Email Address'
                                error={errors.email}
                                style={styles.input}
                            />
                            <TextField
                                ref={this.passwordRef}
                                value={data.password}
                                secureTextEntry={true}
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitPassword}
                                returnKeyType='done'
                                label='Password'
                                error={errors.password}
                                maxLength={30}
                                characterRestriction={20}
                                style={styles.input}
                            />
                        </View>
                        <TouchableHighlight onPress={this.onSubmit} style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>Signup</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.goToLogin} style={styles.transparentButton}>
                        <Text style={styles.transparentButtonText}>Have an account. Login?</Text>
                    </TouchableHighlight>
                    </ScrollView>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: null,
        height: 700,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        paddingTop: "19%",
        paddingRight: "10%",
        paddingLeft: "10%"
    },
    container1: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: 460,
        borderRadius: 10
    },
    container2: {
        padding: "12%",
        marginTop: '7%',
        borderRadius: 20
    },
    input: {
        fontSize: 18,
        fontFamily: 'Arial'
    },
    primaryButton: {
        marginLeft: '12%',
        padding: '2.5%',
        width: '76%',
        marginTop: '5%',
        backgroundColor: '#0091EA'
    },
    primaryButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    },
    transparentButton: {
        marginTop: '7%',
        padding: '6%'
    },
    transparentButtonText: {
        color: '#0091EA',
        textAlign: 'center',
        fontSize: 16
    }
});


export default Signup