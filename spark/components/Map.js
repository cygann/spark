import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MapView from 'react-native-maps';

import { styles } from './Styles';

export class Map extends Component {
  constructor(props) {
    super(props);
  }

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
      {this.props.store.getState().events.map(event => (
        <MapView.Marker
          coordinate={event.coordinates}
          title={event.title}
          image={require('../assets/PinOrange.png')}
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
