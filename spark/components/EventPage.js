import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { Map } from './Map';
import { styles } from './Styles';

//Event page that shows event details
export class EventPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('event', {title: 'Event Page'}).title,
    };
  }

  render(){
    const nav = this.props.navigation;
    const event = nav.getParam('event', {});
    const myStore = this.props.screenProps.store;

    return (
      <ScrollView>
        <View style={styles.MapPreviewBox}>
          <Map store={myStore}/>
        </View>
        <View style={styles.EventTitleBox}>
          <Text style={styles.EventTitle}>{event.title}</Text>
        </View>
        <View style={{top: 25}, styles.UserProfileBox}>
          <Image source={event.host.icon} style={styles.UserProfileImage} />
          <View style={{left: 15}}>
            <Text style={styles.BodyTextGray}>Hosted By</Text>
            <Text style={styles.NameText}>{event.host.name}</Text>
          </View>
        </View>
        <View style={styles.EventDateTime}>
          <View>
            <Text style={styles.BodyText}>{event.addr1}</Text>
            <Text style={styles.BodyText}>{event.addr2}</Text>
          </View>
          <View style={{left: 30}}>
            <Text style={styles.BodyText}>{event.date}</Text>
            <Text style={styles.BodyText}>{event.time}</Text>
          </View>
        </View>
      </ScrollView>

    );
  }
}
