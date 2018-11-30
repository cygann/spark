import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

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
        <View style={styles.EventDetails}>     
          <View>
            <View style={styles.EventDetail}>
                <View>
                    <Text style={styles.BodyText}>217 Coastal St.</Text>
                    <Text style={styles.BodyText}>Dana Point, CA</Text>
                </View>
            </View>
            <View style={styles.EventDetail, {top: 15}}>
                <View>
                    <Text style={styles.BodyText}>Tuesday, November 6th</Text>
                    <Text style={styles.BodyText}>6:30pm - 8:30pm</Text>
                </View>
            </View>
          </View>
        </View>
          <View style={styles.SpotsBox}>
            <View>
                  <Text style={styles.BodyText}>10/16 Spots Filled</Text>
            </View>
            <View style={styles.EventAttendeesBox}>
                  <Image source={require('../assets/landay.jpg')} style={styles.UserProfileImageSmall} />
                  <Image source={require('../assets/minhan.jpeg')} style={styles.UserProfileImageSmall} />
                  <Image source={require('../assets/ge.jpg')} style={styles.UserProfileImageSmall} />
                  <Image source={require('../assets/mtl.jpg')} style={styles.UserProfileImageSmall} />
                  <Image source={require('../assets/tyler.jpg')} style={styles.UserProfileImageSmall} />
            </View>
            <View>
                <Text style={styles.BodyText, textDecorationLine='underline'}> + 5 more...</Text>
            </View>
          </View>
        <View>
          <Text style={styles.NameText, {left: 15}}>About</Text>
        </View>
        <View style={styles.EventAbout}>
          <Text style={styles.BodyText}>Come join us for an evening of casual painting! I like to host these weekly on Tuesday nights. Each week, we have a different painting theme, where we all paint the same landscape, Bob Ross style almost! All materials are provided, so don’t worry about having to bring anything.</Text>
        </View>
        <View style={styles.EventButtonBox}>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.AttendButton}
                onPress={() => {nav.navigate('AttendConfirmation', {event: event})}}>
                <Image style={styles.EventButton} source={require('../assets/attend_button.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.AttendButton}
                onPress={() => {}}>
                <Image style={styles.EventButton} source={require('../assets/invitefriends_button.png')} />
            </TouchableOpacity>
        </View>
      </ScrollView>

    );
  }
}
