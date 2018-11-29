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
      default:
        return state;
    }
  }
);

{/*Set up default users*/}
store.dispatch({ type: 'ADD_USER', user: {
  name: 'Zack Cinquini',
  icon: require('./assets/zack.jpeg'),
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

export const HamburgerMenuNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  HostEvent: {screen: HostEvent},
});

//App Navigator to move between screens
const AppNavigator = createStackNavigator(
  {
    Home: {screen: HamburgerMenuNavigator},
    Event: {screen: EventPage},
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: 'spark',
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

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer screenProps={{store: store}}/>;
  }
}
