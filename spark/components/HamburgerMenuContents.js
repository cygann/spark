import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { styles } from './Styles';

export class HamburgerMenuNavigator extends Component {
  static navigationOptions = {
    drawerLabel: 'Host an Event',
  };

  render() {
    return (
      <View />
    );
  }
}
