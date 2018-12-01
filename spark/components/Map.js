import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';

import { styles } from './Styles';

class Map extends Component {
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
      {this.props.events.map(event => (
        <MapView.Marker
          coordinate={event.coordinates}
          title={event.title}
          image={event.status === 'attending' ?
          require('../assets/PinGreen.png') : require('../assets/PinOrange.png') }
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

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    users: state.users.users,
  }
};

export default connect(mapStateToProps)(Map)
