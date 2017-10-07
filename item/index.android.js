/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import App from './src/App';
import ProductScene from './app/productscene'


export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
            initialRoute={{ title: 'My Initial Scene', index: 0 }}
            renderScene={(route, navigator) => {
              return <ProductScene title={route.title}
                    onForward={ () => {
                        const nextIndex = route.index + 1;
                        navigator.push({
                          title: 'Scene ' + nextIndex,
                          index: nextIndex,
                        });
                    }}

                    onBack={() => {
                      if (route.index > 0) {
                        navigator.pop();
                      }
                    }}
              />
            }}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
