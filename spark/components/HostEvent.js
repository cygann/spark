import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Event = t.struct({
    
});

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export default class HostEvent extends Component {
  static navigationOptions = {
    drawerLabel: 'Host an Event',
  };

  handleSubmit = () => {
      const value = this._form.getValue();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.HostHeaderBox}>
            <Text style={styles.EventTitle}>Create an Event</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.SubmitFormButton}
                onPress={() => {
                  this.props.setAttending(event, 'attending')
                  nav.navigate('AttendConfirmation', {event: event})}
                }>

                <Image style={styles.SubmitFormButton} source={require('../assets/done_button_green.png') } />
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
