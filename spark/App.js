/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

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
        />
      ))}
      </MapView>
    );
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.mapcontainer}>
        <View style={styles.banner} />
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  banner: {
    backgroundColor: '#2AACAD',
    height: 75,
  },
});
