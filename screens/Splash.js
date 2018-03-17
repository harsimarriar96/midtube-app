import React from 'react';
import { View, Image, StyleSheet } from 'react-native'; 

import logo from '../assets/logo.png';
class Splash extends React.Component {
    static navigationOptions = {
      header: null
    }
    constructor(props) {
      super(props);
      const { navigate } = this.props.navigation;
      setTimeout(() => navigate('Home'), 3000);
    }
    render() {
      return (
        <View style={styles.container}>
          <Image source={logo} />
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

  export default Splash;