
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity} from 'react-native';

import { styles } from './Styles';

export default class HostConfirmation extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Hosting Event',
    };
  }

  render() {
    const event = this.props.navigation.getParam('event');

    const hoorayText = "Hooray! You're hosting:";
    const addr1 = event.addr1;
    const addr2 = event.addr2;
    const date = event.date;
    const time = event.time;

    return(
      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 45}}>
          <Text style={styles.BodyText, {fontSize: 20}}>{hoorayText}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.ConfirmEventTitle}>{event.title}</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Image style={{width: 150, height: 150}} source={require('../assets/Checkmark.png')} />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={styles.BodyText}>{addr1}</Text>
          <Text style={styles.BodyText}>{addr2}</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={styles.BodyText}>{date}</Text>
          <Text style={styles.BodyText}>{time}</Text>
        </View>
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => this.props.navigation.navigate('InviteFriends', {event: event})} // TODO
          >
            <Image style={{height: 50, width: 286}} source={require('../assets/InviteFriendsButton.png')} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {this.props.navigation.navigate('Event', {event: event})}}
          >
            <Image style={{height: 50, width: 286}} source={require('../assets/ViewEventButton.png')} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {this.props.navigation.navigate('Home')}}
          >
            <Image style={{height: 70, width: 70}}source={require('../assets/OkButton.png')} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
