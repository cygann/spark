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
import HostConfirmation from './components/HostConfirmation';
import InviteFriends from './components/InviteFriends';
import InviteConfirmation from './components/InviteConfirmation';

console.disableYellowBox = true;

// App Navigator to move between screens
const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Event: {screen: EventPage},
    HostEvent: {screen: HostEvent},
    EmptyScreen: {screen: EmptyScreen},
    Inbox: {screen: Inbox},
    Message: {screen: MessageScreen},
    AttendConfirmation: {screen: AttendConfirmation},
    HostConfirmation: {screen: HostConfirmation},
    InviteFriends: {screen: InviteFriends},
    InviteConfirmation: {screen: InviteConfirmation},
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

      const paintingWorkshopKey = 1;
      const botanicalArtKey = 2;
      const contactImprovKey = 3;
      const jamSessionKey = 4;
      const appleKidsHourKey = 5;

      const userKey = 1; // Sarah Caballo
      const userPic = require('./assets/sarah.jpg');
      this.props.addUser({
          key: userKey,
          name: 'Sarah Caballo',
          icon: userPic,
          inviteChecked: false,
          conversation: {
            unread: false,
            messages: [],
          },
      });

      const zackKey = 2;
      const zackIcon = require('./assets/zack.jpeg');
      this.props.addUser({
        key: zackKey,
        name: 'Zack Cinquini',
        icon: zackIcon,
        inviteChecked: false,
        conversation: {
          unread: true,
          messages: [
            {
              _id: '3',
              text: 'Painting Workshop invitation',
              createdAt: new Date(),
              user: {
                _id: zackKey,
                name: 'Zack Cinquini',
                avatar: zackIcon,
              },
              eventKey: paintingWorkshopKey,
            },
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
              text: 'Hi Zack! Are there any painting workshops coming up soon?',
              createdAt: new Date(),
              user: {
                _id: userKey,
              },
            },
          ],
        }
      });

      const biancaIcon = require('./assets/Bianca.png');
      const biancaKey = 3;
      this.props.addUser({
        key: biancaKey,
        name: 'Bianca Yu',
        icon: biancaIcon,
        inviteChecked: false,
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
      const judyKey = 4
      this.props.addUser({
          key: judyKey,
          name: 'Judy Smith',
          icon: judyIcon,
          inviteChecked: false,
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

        const anthonyIcon = require('./assets/Anthony.png');
        const anthonyKey = 5
        this.props.addUser({
          key: anthonyKey,
          name: 'Anthony John',
          icon: anthonyIcon,
          inviteChecked: false,
          conversation: {
              unread: false,
              messages: [],
            }
        });

      const natalieIcon = require('./assets/Natalie.png');
      const natalieKey = 6
      this.props.addUser({
        key: natalieKey,
        name: 'Natalie Cygan',
        icon: natalieIcon,
        inviteChecked: false,
        conversation: {
            unread: false,
            messages: [],
          }
      });

      this.props.addEvent({
        title: 'Painting Workshop',
        key: paintingWorkshopKey,
        hostKey: zackKey,
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
        numAttending: 5,
      });

      this.props.addEvent({
        title: 'Contact Improv Intro Class',
        key: contactImprovKey,
        hostKey: natalieKey,
        addr1: 'Roble Arts Gym',
        addr2: 'Stanford, CA 94305',
        date: 'Sunday, December 9th',
        time: '9:30pm - 10:30pm',
        coordinates: {
          latitude: 37.426408,
          longitude:  -122.174904
        },
        about: 'Contact improv is a form of spontaneous dance without music, usually done in groups. Wear comfortable clothing and come learn the basics!',
        status: 'standard',
        capacity: 12,
        numAttending: 6,
      });

      this.props.addEvent({
        title: 'Jam Session',
        key: jamSessionKey,
        hostKey: biancaKey,
        addr1: 'Crothers Music Room',
        addr2: 'Stanford, CA 94305',
        date: 'Sunday, December 9th',
        time: '9:00pm - 11:00pm',
        coordinates: {
          latitude: 37.426050,
          longitude:  -122.165634
        },
        about: "Play an instrument or sing? Have a song in mind? Want to learn? Let's chill out and play music together. Bring your own instruments if you can!",
        status: 'standard',
        capacity: 5,
        numAttending: 1,
      });

      this.props.addEvent({
        title: 'Botanical Art Workshop',
        key: botanicalArtKey,
        hostKey: judyKey,
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
        numAttending: 3,
      });

      this.props.addEvent({
        title: 'Apple Kids Hour',
        key: appleKidsHourKey,
        hostKey: anthonyKey,
        addr1: '340 University Ave',
        addr2: 'Palo Alto, CA 94301',
        date: 'Saturday, December 8th',
        time: '1:00pm - 2:00pm',
        coordinates: {
          latitude: 37.446451,
          longitude: -122.160731
        },
        about: 'An adventure awaits each week as kids create fun, hands-on projects. Designed to spark imagination and creativity, kids will explore coding, storytelling, illustration, movie making, music, and more.',
        status: 'standard',
        capacity: 50,
        numAttending: 8,
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
