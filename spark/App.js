/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import { createStore } from "redux";

import { styles } from './components/Styles';
import { HomeScreen } from './components/HomeScreen';
import { EventPage } from './components/EventPage';
import { HostEvent } from './components/HostEvent';
import { HamburgerMenuContents } from './components/HamburgerMenuContents';
import { Inbox } from './components/Inbox';
import { MessageScreen } from './components/MessageScreen';
import { EmptyScreen } from './components/EmptyScreen';

const store = createStore(
  (state = {events: [], users: []}, action) => {
    switch (action.type) {
      case 'ADD_EVENT':
        action.event.key = Math.random();
        action.event.host = state.users.find((user) => user.key === action.event.hostKey);
        return {
          events: [...state.events, action.event],
          users: state.users,
        }
      case 'ADD_USER':
        action.user.key = Math.random();
        return {
          events: state.events,
          users: [...state.users, action.user],
        }
      case 'READ_MESSAGE':
        const newUsers = state.users.map((user) => {
          if (user.key === action.user.key) {
            user.conversation.unread = false;
          } else {
            return user
          }
        });
        return {
          events: state.events,
          users: newUsers,
        };
      default:
        return state;
    }
  }
);

{/*Set up default users*/}
store.dispatch({ type: 'ADD_USER', user: {
  name: 'Zack Cinquini',
  icon: require('./assets/zack.jpeg'),
  conversation: {
    unread: true,
    messages: [
      [true, 'message', 'Hi Zack! Are there any contact improv workshops soon?'],
      [false,  'message', 'Yes! One sec let me invite you'],
      [false,  'invite', 'Painting Workshop'],
    ],
  }
}});
store.dispatch({ type: 'ADD_USER', user: {
  name: 'Bianca Yu',
  icon: require('./assets/zack.jpeg'),
  conversation: {
    unread: false,
    messages: [
      [false, 'message', 'Do you want to go to the painting workshop this week?']
    ],
  }
}});

{/*Set up default events*/}
const zackKey = store.getState().users[0].key;

store.dispatch({ type: 'ADD_EVENT', event: {
  title: 'Painting Workshop',
  hostKey: zackKey,
  addr1: 'Arizona Garden',
  addr2: 'Stanford, CA 94305',
  date: 'Sunday, December 9th',
  time: '2:00pm - 4:00pm',
  coordinates: {
    latitude: 37.425054,
    longitude:  -122.161875
  },
  status: 'standard',
}});
store.dispatch({ type: 'ADD_EVENT', event: {
  title: 'Botanical Art Workshop',
  hostKey: zackKey,
  addr1: '673 Escondido Rd',
  addr2: 'Stanford, CA 94305',
  date: 'Saturday, December 8th',
  time: '6:30pm - 8:30pm',
  coordinates: {
    latitude: 37.435866,
    longitude: -122.171112
  },
  status: 'standard',
}});

//App Navigator to move between screens
const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Event: {screen: EventPage},
    HostEvent: {screen: HostEvent},
    EmptyScreen: {screen: EmptyScreen},
    Inbox: {screen: Inbox},
    Message: {screen: MessageScreen},
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

export default class App extends React.Component {
  render() {
    return <AppContainer screenProps={{store: store}}/>;
  }
}
