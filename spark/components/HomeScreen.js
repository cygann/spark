import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import Map from './Map';
import { styles } from './Styles';

class LogoTitle extends Component {
  render() {
    return (
      <View style={styles.HeaderLogo}>
      <Image
        source={require('../assets/SparkLogoWhite.png')}
        style={{
          height: 122*0.3,
          width: 108*0.3,
          marginTop: 3,
        }}
      />
      <Text style={{
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 4,
        marginRight: 20,
      }}
      >spark</Text>
      </View>
    )
  }
}

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const notifications = navigation.getParam('unreadCount');
    return {
      title: 'spark',
      headerTitle: <LogoTitle/>,
      headerRight: (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {navigation.navigate('Inbox')}}>
            <Image
              source={require('../assets/MailIcon.png')}
              style={{
                height: 24*0.8,
                width: 35*0.8,
                marginRight: 10,
              }}
            />
            {notifications > 0
              ? <View style={styles.HomeScreenUnreadBadge}>
                  <Text style={styles.HomeScreenUnreadBadgeNumber}>{notifications}</Text>
                </View>
              : <View/>
            }
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {navigation.openDrawer()}}>
            <Image
              source={require('../assets/HamburgerIcon.png')}
              style={{
                height: 24*0.8,
                width: 35*0.8,
                marginLeft: 10,
              }}
            />
        </TouchableOpacity>
      ),
    };
  }
  lastUnreadCount = -1;
  render() {
    let unreadCount = 0;
    this.props.users.forEach((user) => {
      if (user.conversation.unread) unreadCount+=1;
    })
    if (unreadCount!=this.lastUnreadCount) {
      this.lastUnreadCount = unreadCount;
      this.props.navigation.setParams({unreadCount: unreadCount});
    }
    return (
      <View style={styles.mapcontainer}>
        <Map nav={this.props.navigation}/>
      </View>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
