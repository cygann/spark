import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

class InboxLineItem extends Component {
  render() {
    const user = this.props.user;
    const unread = user.conversation.unread
    const messages = user.conversation.messages;
    console.log(user);
    if (!messages || !messages[0]) {
      return(<View/>);
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {this.props.nav.navigate('Message', {user: user})}}
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
              {messages[messages.length-1][2].length > 35
                ? messages[messages.length-1][2].substr(0,35)+'...'
                : messages[messages.length-1][2] }
            </Text>
          </View>
          <Image source={require('../assets/ArrowRight.png')} style={styles.ArrowRight}/>
        </TouchableOpacity>
      )
    }
  }
}

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
export class Inbox extends Component {
  static navigationOptions = {
    title: 'Inbox',
  };

  render() {
    const myStore = this.props.screenProps.store;
    return (
      <View style={styles.InboxLineItemContainer}>
      {myStore.getState().users.map(user => (
        <InboxLineItem
          key={user.key}
          nav={this.props.navigation}
          user={user}
        />
      ))}
      </View>
    );
  }
}
