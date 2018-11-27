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
    this.state = {
      markers: [{
        title: 'Painting Workshop',
        key: 1,
        coordinates: {
          latitude: 37.425054,
          longitude:  -122.161875
        },
      },
      {
        title: 'Botanical Art Workshop',
        key: 2,
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
      {this.state.markers.map(marker => (
        <MapView.Marker
          coordinate={marker.coordinates}
          title={marker.title}
          image={require('./assets/PinOrange.png')}
          key={marker.key}
          onPress={() => {
            this.props.nav.navigate('Event', {eventKey: marker.key})}
          }
        />
      ))}
      </MapView>
    );
  }
}

//Event page that shows event details
class EventPage extends Component {
    render(){
      const nav = this.props.navigation;
      const eventKey = nav.getParam('eventKey', 0);

      return (
        <ScrollView>
          <View style={styles.banner} />
          <View style={styles.MapPreviewBox}>
            <Map />
          </View>
          <View style={styles.EventTitleBox}>
            <Text style={styles.EventTitle}>Painting Workshop</Text>
          </View>
          <View style={{top: 25}, styles.UserProfileBox}>
            <Image source={require('./assets/zack.jpeg')} style={styles.UserProfileImage} />
            <View style={{left: 15}}>
              <Text style={styles.BodyTextGray}>Hosted By</Text>
              <Text style={styles.NameText}>Zack Cinquini</Text>
            </View>
          </View>
          <View style={styles.EventDateTime}>
            <View>
              <Text style={styles.BodyText}>217 Coastal St.</Text>
              <Text style={styles.BodyText}>Dana Point, CA</Text>
            </View>
            <View style={{left: 30}}>
              <Text style={styles.BodyText}>Tuesday, November 6th</Text>
              <Text style={styles.BodyText}>6:30pm - 8:30pm</Text>
            </View>
          </View>
        </ScrollView>

      );
    }
}

/*class UserProfile extends Component {
  render() {
    return (

    );
  }
}*/

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
type Props = {};
class Homescreen extends Component<Props> {
  render() {
    return (
      <View style={styles.mapcontainer}>
        <View style={styles.banner} />

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
    initialRouteName: "Home"
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
    top: 75,
    left: 0,
    right: 0,
    bottom: 0,
  },

  //General Styles
  banner: {
    backgroundColor: '#2AACAD',
    height: 75,
  },
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
