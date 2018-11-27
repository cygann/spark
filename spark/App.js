/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MapView from 'react-native-maps';
import { createStackNavigator, createAppContainer } from "react-navigation";

class Map extends Component {
  constructor(props) {
    super(props);
  {/*This is for sure NOT the best place for this lol, need storage for all events + users*/}
  this.state = {
      events: [{
        key: 1,
        title: 'Painting Workshop',
        host: 'Zack Cinquini',
        hostIcon: require('./assets/zack.jpeg'),
        addr1: 'Arizona Garden',
        addr2: 'Stanford, CA 94305',
        date: 'Sunday, December 9th',
        time: '2:00pm - 4:00pm',
        coordinates: {
          latitude: 37.425054,
          longitude:  -122.161875
        },
      },
      {
        key: 2,
        title: 'Botanical Art Workshop',
        host: 'Zack Cinquini',
        hostIcon: require('./assets/zack.jpeg'),
        addr1: '673 Escondido Rd',
        addr2: 'Stanford, CA 94305',
        date: 'Saturday, December 8th',
        time: '6:30pm - 8:30pm',
        coordinates: {
          latitude: 37.435866,
          longitude: -122.171112
        },
      }]
    }
  };

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.427398,
          longitude:  -122.169622,
          latitudeDelta: 0.0922/1.5,
          longitudeDelta: 0.0421/1.5,
        }}
      >
      {this.state.events.map(event => (
        <MapView.Marker
          coordinate={event.coordinates}
          title={event.title}
          image={require('./assets/PinOrange.png')}
          key={event.key}
          onPress={() => {
            this.props.nav.navigate('Event', {event: event})}
          }
        />
      ))}
      </MapView>
    );
  }
}

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

    return (
      <ScrollView>
        <View style={styles.MapPreviewBox}>
          <Map />
        </View>
        <View style={styles.EventTitleBox}>
          <Text style={styles.EventTitle}>{event.title}</Text>
        </View>
        <View style={{top: 25}, styles.UserProfileBox}>
          <Image source={event.hostIcon} style={styles.UserProfileImage} />
          <View style={{left: 15}}>
            <Text style={styles.BodyTextGray}>Hosted By</Text>
            <Text style={styles.NameText}>{event.host}</Text>
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

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
type Props = {};
class Homescreen extends Component<Props> {
  static navigationOptions = {
    title: 'spark',
  }
  render() {
    return (
      <View style={styles.mapcontainer}>
        <Map nav={this.props.navigation}/>
      </View>
    );
  }
}


//App Navigator to move between screens
const AppNavigator = createStackNavigator(
  {
    Home: {screen: Homescreen},
    Event: {screen: EventPage},
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2AACAD'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//Style elements
const styles = StyleSheet.create({
  //Font and text styles:
  EventTitleBox: {
      left: 15,
  },
  EventTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
  },
  BodyText: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  BodyTextGray: {
    fontFamily: 'Roboto',
    fontSize: 14,
    //color: #8D8D8D, //light gray
  },
  NameText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Map Styles
  mapcontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  //General Styles
  MapPreviewBox: {
    height: 150,
  },
  UserProfileImage: {
      height: 50,
      borderRadius: 25,
      width: 50
  },
  UserProfileBox: {
    flexDirection: 'row',
    left: 15,
    top: 15,
  },
  EventDateTime: {
    left: 15,
    top: 30,
    flexDirection: 'row',
  },
  EventAttendeesBox: {
    left: 15,
    flexDirection: 'row',
  }
});
