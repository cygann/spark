import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { setUnread } from '../actions/User';

import { styles } from './Styles';

class InboxLineItem extends Component {
  render() {
    const user = this.props.user;
    const unread = user.conversation.unread
    const messages = user.conversation.messages;
    if (!messages || !messages[0]) {
      return(<View/>);
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            this.props.setUnread(user, false);
            this.props.nav.navigate('Message', {user: user});
          }}
          style={styles.InboxLineItem}
        >
          <View>
            <Image source={user.icon} style={styles.UserProfileImage}/>
            {unread
              ? <View style={styles.InboxUnreadBadge}/>
              : <View/>
            }
          </View>
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>{user.name}</Text>
            <Text style={styles.BodyTextGray}>
              {messages[0].text.length > 35
                ? messages[0].text.substr(0,35)+'...'
                : messages[0].text }
            </Text>
          </View>
          <Image source={require('../assets/ArrowRight.png')} style={styles.ArrowRight}/>
        </TouchableOpacity>
      )
    }
  }
}

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
class Inbox extends Component {
  static navigationOptions = {
    title: 'Inbox',
  };

  render() {
    return (
      <View style={styles.InboxLineItemContainer}>
      {this.props.users.map(user => (
        <InboxLineItem
          key={user.key}
          nav={this.props.navigation}
          user={user}
          setUnread={this.props.setUnread}
        />
      ))}
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
    setUnread: (user, status) => {
      dispatch(setUnread(user, status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)
