import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { styles } from './Styles';

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export class Inbox extends Component {
  static navigationOptions = {
    title: 'Inbox',
  };

  render() {
    return (
      <View />
    );
  }
}
