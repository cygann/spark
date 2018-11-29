import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { styles } from './Styles';

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export class EmptyScreen extends Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    return (
      <View />
    );
  }
}
