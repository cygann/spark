import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

import t from 'tcomb-form-native';
import moment from 'moment';

const Form = t.form.Form;

const UserEvent = t.struct({
    title: t.String,
    about: t.String,
    date: t.Date,
    startTime: t.Date,
    endTime: t.Date,
    
});

const formOptions = {
    fields: {
        title: {
            label: 'Event Title',
            error: 'Please enter a title for your event.',
        },
        about: {
            label: 'Description',
            error: 'Please enter a brief description for your event.',
        },
        date: {
            label: 'Date',
            error: 'Please enter a date for your event.',
            mode: 'date',
            config: {
                format:(date) => moment(date).format('dddd, MMMM Do YYYY')
            }
        },
        startTime: {
            label: 'Start Time',
            error: 'Please enter a starting time for your event.',
            mode: 'time',
            config: {
                format:(date) => moment(date).format('h:mm a')
            }
        },
        endTime: {
            label: 'End Time',
            error: 'Please enter an ending time for your event.',
            mode: 'time',
            config: {
                format:(date) => moment(date).format('h:mm a')
            }
        },
        
    },
    auto: 'placeholders'

};

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
        <View style={styles.FormContainer}>
            <Form type={UserEvent} options={formOptions}/>
        </View>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.SubmitFormButton}
                onPress={() => {
                  this.handleSubmmit
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
