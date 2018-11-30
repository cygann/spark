import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { styles } from './Styles';

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export class MessageScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('user', {name: 'Name'}).name,
    };
  }

  render() {
    const nav = this.props.navigation;
    const user = nav.getParam('user', {});
    const myStore = this.props.screenProps.store;
    myStore.dispatch({ type: 'READ_MESSAGE', user: user});
    return (
      <View />
    );
  }
}
