'use strict';

import { AppRegistry, Text, TextInput, View, StyleSheet, TouchableHighlight, BackHandler, ToolbarAndroid, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Footer, FooterTab, Left, Col, Grid, Row, Header, Right, Title, Icon } from 'native-base'
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';
import * as db from '../db/fbConf'
import RNFetchBlob from 'react-native-fetch-blob'

var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Logo',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob



class Additem extends Component {
    constructor(props) {
        super(props);
        this.state = { category: '', image: 'https://avatars0.githubusercontent.com/u/12028011?v=3&s=200', name: '', price: '', brand: '' };

        this.categoryRef = this.updateRef.bind(this, 'category');
        this.nameRef = this.updateRef.bind(this, 'name');
        this.priceRef = this.updateRef.bind(this, 'price');
        this.brandRef = this.updateRef.bind(this, 'brand');
    }

    uploadImage(uri, mime = 'application/octet-stream') {
        return new Promise((resolve, reject) => {
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            let uploadBlob = null
            let currentUser = db.auth.currentUser.uid;
            const imageRef = db.storage.ref(`${currentUser}/`).child('image_001')

            fs.readFile(uploadUri, 'base64')
                .then((data) => {
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                })
                .then(() => {
                    uploadBlob.close()
                    return imageRef.getDownloadURL()
                })
                .then((url) => {
                    resolve(url)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    getImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.uploadImage(response.uri)
                    .then(url => { ToastAndroid.show('Image uploaded Successfully', ToastAndroid.SHORT); this.setState({ image_uri: url }) })
                    .catch(error => console.log(error))
            }
        });
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
        ['category', 'name', 'price', 'brand']
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
        if (this.categoryRef && this.nameRef) {
            ['category', 'name', 'price', 'brand']
                .forEach((name) => {
                    let value = this[name].value();
                    if (!value) {
                        errors[name] = 'Should not be empty';
                    }
                });

            this.setState({ errors });
        }
        // const { email, password } = this.state
        // var userObj = { 'email': email, 'password': password };
        // this.props.AdditemReq(userObj);

    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    onSubmitCategory = () => {
        this.name.focus();
    }

    onSubmitName = () => {
        this.price.focus();
    }
    onSubmitPrice = () => {
        this.brand.focus();
    }

    onSubmitBrand = () => {
        this.brand.blur();
    }

    render() {
        let { errors = {}, ...data } = this.state;
        return (
            <Image source={require('../images/back2.png')} style={styles.container}>
                <Grid style={{ position: 'absolute', zIndex: 1000, marginTop: '5%', marginLeft: '46%' }} >
                    <Col>
                        <Image source={{ uri: this.state.image }} style={{ borderRadius: 50, borderWidth: 1, borderColor: '#BD2141', width: 100, height: 100 }} />
                        <Button onPress={this.getImage} style={{ height: 27, marginLeft: '-1.5%', marginTop: '2%', width: '61.8%' }} info>
                            <Text style={{ fontSize: 11, color: '#fff' }}>Choose Image</Text>
                        </Button>
                    </Col>
                </Grid>
                <View style={styles.container1}>
                    <ScrollView keyboardShouldPersistTaps='never'>
                        <View style={styles.container2}>
                            <TextField
                                ref={this.categoryRef}
                                value={data.category}
                                keyboardType='text'
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitCategory}
                                returnKeyType='next'
                                label='Category'
                                error={errors.category}
                                autoFocus={true}
                                style={styles.input}
                            />
                            <TextField
                                ref={this.nameRef}
                                value={data.name}
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitName}
                                returnKeyType='next'
                                label='Name'
                                error={errors.name}
                                maxLength={30}
                                style={styles.input}
                            />
                            <TextField
                                ref={this.priceRef}
                                value={data.price}
                                keyboardType='text'
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitPrice}
                                returnKeyType='next'
                                label='Price'
                                error={errors.price}
                                style={styles.input}
                            />
                            <TextField
                                ref={this.brandRef}
                                value={data.brand}
                                autoCapitalize='none'
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                onFocus={this.onFocus}
                                onChangeText={this.onChangeText}
                                onSubmitEditing={this.onSubmitBrand}
                                returnKeyType='done'
                                label='Brand'
                                error={errors.brand}
                                style={styles.input}
                            />
                        </View>
                        <TouchableHighlight onPress={this.onSubmit} style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>Additem</Text>
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
        paddingTop: "12%",
        paddingRight: "10%",
        paddingLeft: "10%"
    },
    container1: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: 515,
        borderRadius: 10
    },
    container2: {
        padding: "12%",
        marginTop: '27%',
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
        marginTop: '3%',
        backgroundColor: '#0091EA'
    },
    primaryButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    },
    transparentButton: {
        marginTop: '8%',
        padding: '6%'
    },
    transparentButtonText: {
        color: '#0091EA',
        textAlign: 'center',
        fontSize: 16
    }
});


export default Additem;