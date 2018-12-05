import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity} from 'react-native';

import { styles } from './Styles';

export default class InviteConfirmation extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Invite Friends',
    };
  }

  render() {
    const event = this.props.navigation.getParam('event');

    return(
      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 100}}>
          <Image style={{height: 300, width: 300}} source={require('../assets/InvitesSent.png')} />
        </View>
        <View style={{marginTop: 85}}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {this.props.navigation.navigate('Event', {event: event})}}
          >
            <Image style={{height: 70, width: 70}} source={require('../assets/OkButton.png')} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
