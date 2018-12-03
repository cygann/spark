import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';

import { styles } from './Styles';

class InviteMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const event = this.props.events.find((event) => event.key == this.props.eventKey);
    return (
      <TouchableOpacity activeOpacity={0.75}>
          <View style={{height:100}}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: event.coordinates.latitude,
                longitude:  event.coordinates.longitude,
                latitudeDelta: 0.0922/1.5/10,
                longitudeDelta: 0.0421/1.5/10,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
              onPress={() => {
                this.props.nav.navigate('Event', {event: event})}
              }>
              <MapView.Marker
                coordinate={event.coordinates}
                title={event.title}
                image={event.status === 'attending' ?
                require('../assets/PinGreen.png') : require('../assets/PinOrange.png') }
                key={event.key}
              />
            </MapView>
          </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    users: state.users.users,
  }
};

export default connect(mapStateToProps)(InviteMap)
