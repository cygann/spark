import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';

import { connect } from 'react-redux';
import { setAttending } from '../actions/Event';

import Map from './Map';
import { styles } from './Styles';

//Event page that shows event details
class EventPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('event', {title: 'Event Page'}).title,
    };
  }

  render(){
    const nav = this.props.navigation;
    const event = nav.getParam('event', {});
    event.host = this.props.users.find((user) => user.key === event.hostKey);
    console.log(this.props)
    console.log(event)
    return (
      <ScrollView>
        <View style={styles.MapPreviewBox}>
          <Map nav={nav} zoom={10} center={event.coordinates}/>
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
                <View style={styles.EventDetailIconBox}>
                    <Image source={require('../assets/location_icon.png')} style={styles.EventDetailIcon} />
                </View>
                <View>
                    <Text style={styles.BodyText}>{event.addr1}</Text>
                    <Text style={styles.BodyText}>{event.addr2}</Text>
                </View>
            </View>
            <View style={styles.EventDetail}>
                <View style={styles.EventDeatilIconBox}>
                    <Image source={require('../assets/date_icon.png')} style={styles.EventDetailIcon} />
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={styles.BodyText}>{event.date}</Text>
                    <Text style={styles.BodyText}>{event.time}</Text>
                </View>
            </View>
          </View>
        </View>
          <View style={styles.SpotsBox}>
            <View>
                  <Text style={styles.BodyText}>{event.attending}/{event.capacity} Spots Filled</Text>
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
          <Text style={styles.NameText, {marginLeft: 15}}>About</Text>
        </View>
        <View style={styles.EventAbout}>
          <Text style={styles.BodyText}>{event.about}</Text>
        </View>
        <View style={styles.EventButtonBox}>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.AttendButton}
                onPress={() => {
                  this.props.setAttending(event, event.status === 'attending' ? 'standard' : 'attending');
                  if (event.status === 'attending') nav.navigate('AttendConfirmation', {event: event})}
                }>

                <Image style={styles.EventButton} source={event.status === 'attending' ?
                    require('../assets/unattend_button.png') : require('../assets/attend_button.png') } />
                {/*<Image style={styles.EventButton} source={require('../assets/attend_button.png')} />*/}
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.AttendButton}
                onPress={() => nav.navigate('InviteFriends', {event: event})}>
                <Image style={styles.EventButton} source={require('../assets/invitefriends_button.png')} />
            </TouchableOpacity>
        </View>
      </ScrollView>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    users: state.users.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAttending: (event, status) => {
      dispatch(setAttending(event, status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
