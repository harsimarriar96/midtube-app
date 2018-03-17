import React from 'react';
import { Text, StyleSheet, View, Image, Button } from 'react-native';
import {} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const logo = require('./assets/logo.png');

class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} />
        <Button title='login' onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to login page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4021'
  }
});

export default StackNavigator({
  Intro: {
    screen: IntroScreen,
  },
  Login: { screen: LoginScreen }
});