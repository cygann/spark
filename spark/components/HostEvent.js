import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

import t from 'tcomb-form-native';
import moment from 'moment';

import { connect } from 'react-redux';
import { addEvent } from '../actions/Event';

const Form = t.form.Form;

const UserEvent = t.struct({
    title: t.String,
    about: t.String,
    date: t.Date,
    startTime: t.Date,
    endTime: t.Date,
    addr1: t.String,
    addr2: t.String,
    
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
        addr1: {
            label: 'Address Line 1',
            error: 'Please enter the first address line for your event.',
        },
        addr2: {
            label: 'Address Line 2',
            error: 'Please enter the second address line for your event.',
        },
        
    },

};

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
class HostEvent extends Component {
  static navigationOptions = {
    title: 'Create an Event',
    drawerLabel: 'Host an Event',
  };

  handleSubmit = () => {
      const value = this.refs.form.getValue();
      if(value) {
        console.log(value);
      }
      this.props.addEvent({
          title: value.title,
          hostKey: 0,
          addr1: value.addr1,
          addr2: value.addr2,
          date: moment(value.date).format('dddd, MMMM Do'),
          time: moment(value.startTime).format('h:mm a') + ' - ' + moment(value.endTime).format('h:mm a'),
          coordinates: {
              latitude: Math.random() * (37.419053 - 34.434355) + 34.34355,
              longitude: Math.random() * (-122.160016 - -122.181045) + -122.160016
          },
          about: value.about,
          status: 'hosting',
          capacity: 20,
          attending: 0
      });
      console.log(this.props)
      
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.FormContainer}>
            <Form type={UserEvent} ref="form" options={formOptions}/>
        </View>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.SubmitFormButton}
                onPress={() => {
                  this.handleSubmit()}
                } >
                <Image style={styles.SubmitFormButton} source={require('../assets/done_button_green.png')} />
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
    addEvent: (event) => {
      dispatch(addEvent(event))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostEvent)
