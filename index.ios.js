/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Root from './components/Root';
class GameOn extends Component {

  renderScene(route, navigator){
    if (route.name == "root") {
      return <Root navigator={navigator} />
    }
    if (route.name == "login") {
      return <Login navigator={navigator} userInfo={route.passProps} />
    }
    if (route.name == "home") {
      return <Home navigator={navigator} userInfo={route.passProps} />
    }
    if (route.name == "register") {
      return <Register navigator={navigator} />
    }

  }

  render() {
    return (
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}
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

AppRegistry.registerComponent('GameOn', () => GameOn);