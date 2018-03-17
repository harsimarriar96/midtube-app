import React from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

import Tile from '../components/Tile';

class Home extends React.Component {
    static navigationOptions = {
      header: null
    }
    render() {
      return (
        <View style={styles.container}>
            <Header
              placement="left"
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Top Songs', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={{ flex: 7 }}>
              <ScrollView style={{ paddingHorizontal: 5,  paddingBottom: 30, flex: 1, marginHorizontal: 10}}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  
                  <Tile />
                  <Tile />
                  <View style={{ width: '100%' }}></View>
                  <Tile />
                  <Tile />
                  <View style={{ width: '100%' }}></View>
                  <Tile />
                  <Tile />
                  <View style={{ width: '100%' }}></View>
                  <Tile />

                </View>
              </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Upload")} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF4021' }}>
                <Text style={{ fontSize: 20,color: '#ffffff', fontWeight: 'bold' }}>UPLOAD ALBUM</Text>
              </TouchableHighlight>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

  export default Home;