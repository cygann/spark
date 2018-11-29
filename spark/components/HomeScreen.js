import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { Map } from './Map';
import { styles } from './Styles';

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'spark',
  }
  render() {
    const myStore = this.props.screenProps.store;
    {/*Set up default users*/}
    myStore.dispatch({ type: 'ADD_USER', user: {
      name: 'Zack Cinquini',
      icon: require('../assets/zack.jpeg'),
    }});

    {/*Set up default events*/}
    const zackKey = myStore.getState().users[0].key;
    myStore.dispatch({ type: 'ADD_EVENT', event: {
      title: 'Painting Workshop',
      hostKey: zackKey,
      addr1: 'Arizona Garden',
      addr2: 'Stanford, CA 94305',
      date: 'Sunday, December 9th',
      time: '2:00pm - 4:00pm',
      coordinates: {
        latitude: 37.425054,
        longitude:  -122.161875
      },
    }});
    myStore.dispatch({ type: 'ADD_EVENT', event: {
      title: 'Botanical Art Workshop',
      hostKey: zackKey,
      addr1: '673 Escondido Rd',
      addr2: 'Stanford, CA 94305',
      date: 'Saturday, December 8th',
      time: '6:30pm - 8:30pm',
      coordinates: {
        latitude: 37.435866,
        longitude: -122.171112
      },
    }});
    return (
      <View style={styles.mapcontainer}>
        <Map nav={this.props.navigation} store={myStore}/>
      </View>
    );
  }
}
