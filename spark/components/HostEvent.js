import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

import t from 'tcomb-form-native';
import moment from 'moment';

import { connect } from 'react-redux';
import { addEvent } from '../actions/Event';

const Form = t.form.Form;
navEvent = {};

const UserEvent = t.struct({
    title: t.String,
    about: t.String,
    date: t.Date,
    addr1: t.String,
    addr2: t.String,
    startTime: t.Date,
    endTime: t.Date,
    capacity: t.Number,

});

const EventDate = t.struct({
    startTime: t.Date,
    endTime: t.Date,
});

var _ = require('lodash');
const datesStylesheet = _.cloneDeep(t.form.Form.stylesheet);

datesStylesheet.fieldset = {
    flexDirecton: 'row'
};

var AboutStylesheet = {
    height: 72,
};

function template(locals) {
    return(
        <View>
            {locals.inputs.title}
            {locals.inputs.about}
            {locals.inputs.capacity}
            {locals.inputs.date}
            <View style ={{flexDirecton: 'row'}}>
                <View style>
                    {locals.inputs.startTime}
                </View>
                <View>
                    {locals.inputs.endTime}
                </View>
            </View>
            {locals.inputs.addr1}
            {locals.inputs.addr2}
            
        </View>
    );
}

const formOptions = {
    template: template,

    fields: {
        title: {
            label: 'Event Title',
            error: 'Please enter a title for your event.',
        },
        about: {
            multiline: true,
            label: 'Description',
            error: 'Please enter a brief description for your event.',
            type: 'textarea',
            normal: {
                stylesheet: AboutStylesheet,
            }
        },
        capacity: {
            label: 'Event Capacity',
            error: 'Please enter an attendance cap for your event',
        },
        date: {
            label: 'Date',
            error: 'Please enter a date for your event.',
            mode: 'date',
            config: {
                format:(date) => moment(date).format('dddd, MMMM Do YYYY'),
                defaultValueText: 'Tap to select a date',
            }
        },
        startTime: {
            label: 'Start Time',
            error: 'Please enter a starting time for your event.',
            mode: 'time',
            config: {
                format:(date) => moment(date).format('h:mm a'),
                defaultValueText: 'Tap to select a time',
            }
        },
        endTime: {
            label: 'End Time',
            error: 'Please enter an ending time for your event.',
            mode: 'time',
            config: {
                format:(date) => moment(date).format('h:mm a'),
                defaultValueText: 'Tap to select a time',
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
  }

  handleSubmit = () => {
      const value = this.refs.form.getValue();
      
      if(value){
        navEvent = {
            title: value.title,
            hostKey: 1,
            addr1: value.addr1,
            addr2: value.addr2,
            date: moment(value.date).format('dddd, MMMM Do'),
            time: moment(value.startTime).format('h:mm a') + ' - ' + moment(value.endTime).format('h:mm a'),
            coordinates: {
                latitude: Math.random() * (37.45289-37.402573) + 37.402573,
                longitude: Math.random() * (-122.157452 - -122.185841) + -122.185841
            },
            about: value.about,
            status: 'hosting',
            capacity: value.capacity,
            attending: 0
        };
      } else {
          return false;
          // navEvent = {
              // 
            // title: 'Creative Workshop',
            // hostKey: 1,
            // about: 'This creative workshop will be all about discovering our creative outlets and sharing different arts with others. Feel free to drop by and learn about arts that others are involved with, and even share your own!',
            // date: moment(new Date()).format('dddd, MMMM Do'),
            // time: moment(new Date()).format('h:mm a') + ' - ' + moment(new Date()).format('h:mm a'),
            // addr1: '455 Arguello Way',
            // addr2: 'Stanford, CA 94305',
            // capacity: 20,
            // status: 'hosting',
            // attending: 0,
            // coordinates: {
                // latitude: Math.random() * (37.45289-37.402573) + 37.402573,
                // longitude: Math.random() * (-122.157452 - -122.185841) + -122.185841
            // },
          // }
      }

      this.props.addEvent(navEvent);
      return true;
  }

  render() {
    const nav = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.FormContainer}>
            <Form type={UserEvent} ref="form" options={formOptions} />
        </View>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                activeOpacity={0.75}
                buttonStyle={styles.SubmitFormButton}
                onPress={() => {
                    const result = this.handleSubmit();
                    if(result) {
                        nav.navigate('HostConfirmation', {event:navEvent}) 
                    }
                  }
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
