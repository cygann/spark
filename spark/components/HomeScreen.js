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
    return (
      <View style={styles.mapcontainer}>
        <Map nav={this.props.navigation} store={myStore}/>
      </View>
    );
  }
}
