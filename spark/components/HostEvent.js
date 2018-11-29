import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { styles } from './Styles';

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export class HostEvent extends Component {
  static navigationOptions = {
    drawerLabel: 'Host an Event',
  };

  render() {
    return (
      <View />
    );
  }
}
