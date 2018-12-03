/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";

import { connect } from 'react-redux';
import { addEvent } from './actions/Event';
import { addUser } from './actions/User';

import t from 'tcomb-form-native';
import moment from 'moment';

import { styles } from './components/Styles';
import HomeScreen from './components/HomeScreen';
import EventPage from './components/EventPage';
import HostEvent from './components/HostEvent';
import HamburgerMenuContents from './components/HamburgerMenuContents';
import Inbox from './components/Inbox';
import MessageScreen from './components/MessageScreen';
import EmptyScreen from './components/EmptyScreen';
import AttendConfirmation from './components/AttendConfirmation';

//App Navigator to move between screens
const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Event: {screen: EventPage},
    HostEvent: {screen: HostEvent},
    EmptyScreen: {screen: EmptyScreen},
    Inbox: {screen: Inbox},
    Message: {screen: MessageScreen},
    AttendConfirmation: {screen: AttendConfirmation},
  },
  {
    initialRouteName: "Home",
    headerBackTitleVisible: false,
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

export const HamburgerMenuNavigator = createDrawerNavigator(
  {
    Home: {screen: AppNavigator},
  },
  {
     contentComponent: HamburgerMenuContents,
  }
);

const AppContainer = createAppContainer(HamburgerMenuNavigator);

class App extends React.Component {
  state = {
    users:[],
    events:[],
  }
  first = true;
  render() {
    if (this.first) {
      // DEFAULT USERS
      this.first = false;

      const userKey = 0; // Sarah Caballo
      const zackKey = 1;
      const zackIcon = require('./assets/zack.jpeg');
      this.props.addUser({
        key: zackKey,
        name: 'Zack Cinquini',
        icon: zackIcon,
        conversation: {
          unread: true,
          messages: [
            {
              _id: '2',
              text: 'Yes! One sec let me invite you',
              createdAt: new Date(),
              user: {
                _id: zackKey,
                name: 'Zack Cinquini',
                avatar: zackIcon,
              },
            },
            {
              _id: '1',
              text: 'Hi Zack! Are there any painging workshops coming up soon?',
              createdAt: new Date(),
              user: {
                _id: userKey,
              },
            },
          ],
        }
      });

      const biancaIcon = require('./assets/zack.jpeg');
      const biancaKey = 2;
      this.props.addUser({
        key: biancaKey,
        name: 'Bianca Yu',
        icon: biancaIcon,
        conversation: {
          unread: true,
          messages: [
            {
              _id: '2',
              text: 'Do you want to go to the painting workshop this week?',
              createdAt: new Date(),
              user: {
                _id: biancaKey,
                name: 'Zack Cinquini',
                avatar: biancaIcon,
              },
            },
          ],
        }
      });

      const judyIcon = require('./assets/judy.jpg');
      const judyKey = 3
      this.props.addUser({
          key: judyKey,
          name: 'Judy Smith',
          icon: judyIcon,
          conversation: {
              unread: false,
              messages: [
                {
                  _id: '2',
                  text: 'Hi Darling! I hope you see my botanical art workshop!',
                  createdAt: new Date(),
                  user: {
                    _id: judyKey,
                    name: 'Zack Cinquini',
                    avatar: judyIcon,
                  },
                },
              ],
            }
        });

      this.props.addEvent({
        title: 'Painting Workshop',
        hostKey: 1,
        addr1: 'Arizona Garden',
        addr2: 'Stanford, CA 94305',
        date: 'Sunday, December 9th',
        time: '2:00pm - 4:00pm',
        coordinates: {
          latitude: 37.425054,
          longitude:  -122.161875
        },
        about: 'Come join us for an evening of casual painting! I like to host these weekly on Tuesday nights. Each week, we have a different painting theme, where we all paint the same landscape, Bob Ross style almost! All materials are provided, so don’t worry about having to bring anything.',
        status: 'standard',
        capacity: 20,
        attending: 8,
      });

      this.props.addEvent({
        title: 'Botanical Art Workshop',
        hostKey: 3,
        addr1: '673 Escondido Rd',
        addr2: 'Stanford, CA 94305',
        date: 'Saturday, December 8th',
        time: '6:30pm - 8:30pm',
        coordinates: {
          latitude: 37.435866,
          longitude: -122.171112
        },
        about: 'Check out this amazing opportunity to learn about the world of Botanical Art! This is a way to connect with the natural world while creating beautiful watercolor paintings of plants. There is an emphasis on botanical accuracy and detail with botanical art, which we will learn how to approach!',
        status: 'standard',
        capacity: 15,
        attending: 8,
      });
    }
    return <AppContainer/>;
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
    },
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
