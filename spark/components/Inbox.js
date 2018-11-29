import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { styles } from './Styles';

class InboxLineItem extends Component {
  render() {
    const user = this.props.user;
    if (!user.conversation) {
      return(<View/>);
    } else {
      return (
        <View style={styles.InboxLineItem}>
          <Image source={user.icon} style={styles.UserProfileImage} />
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>{user.name}</Text>
            <Text style={styles.BodyTextGray}>
              {user.conversation[0]}
            </Text>
          </View>
          <Image source={require('../assets/ArrowRight.png')} style={styles.ArrowRight}/>
        </View>
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
          user={user}
        />
      ))}
      </View>
    );
  }
}
