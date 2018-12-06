import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { CheckBox, Button, Input} from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';

import { connect } from 'react-redux';
import { setUnread } from '../actions/User';
import { addMessage } from '../actions/User';
import { setInviteChecked } from '../actions/User';

import { styles } from './Styles';

class InviteLineItem extends Component {
  render() {
    const user = this.props.user;
    const unread = user.conversation.unread
    const messages = user.conversation.messages;
    if (user.key === 1) {
      return(<View/>);
    } else {
      return (
        <View style={styles.InboxLineItem}>
          <Image style={styles.UserProfileImage} source={user.icon} />
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>{user.name}</Text>
          </View>
          <CheckBox
            component={TouchableWithoutFeedback}
            checkedIcon={<Image style={styles.Checkbox} source={require('../assets/Checked.png')} />}
            uncheckedIcon={<Image style={styles.Checkbox} source={require('../assets/Unchecked.png')} />}
            checked={user.inviteChecked}
            onPress={() => {this.props.setInviteChecked(user, !user.inviteChecked)}}
          />
        </View>
      )
    }
  }
}

class InviteFriends extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Invite Friends',
    };
  }

  choiceMade = () => {
    let counter = 0
    this.props.users.forEach((user) => {
      if (user.inviteChecked) {
        counter+=1;
      }
    })
    return counter > 0;
  }

  submit = (event) => {
    if (!this.choiceMade()) return;
    this.props.users.forEach((user) => {
      if (user.inviteChecked) {
        this.props.setInviteChecked(user, false);
        this.props.addMessage(user,
          {
            _id: Math.random(),
            text: event.title + ' invitation',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'Sarah Caballo',
              avatar: require('../assets/sarah.jpg'),
            },
            eventKey: event.key,
          });
      }
    });
    this.props.navigation.navigate('InviteConfirmation', {event: event})
  }

  render() {
    const event = this.props.navigation.getParam('event', {});
    return(
      <View>
        {this.props.users.map(user => (
          <InviteLineItem
            key={user.key}
            user={user}
            setInviteChecked={this.props.setInviteChecked}
          />
        ))}
        <View>
          <TouchableOpacity
              activeOpacity={0.75}
              buttonStyle={styles.SendInviteButton}
              onPress={() => {this.submit(event)}}
          >
            <Image style={styles.SendInviteButton} source={this.choiceMade() ? require('../assets/SendInvite_Button.png') : require('../assets/SendInvite_Disabled.png')} />
          </TouchableOpacity>
        </View>
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
    setInviteChecked: (user, status) => {
      dispatch(setInviteChecked(user, status))
    },
    addMessage: (user, message) => {
      dispatch(addMessage(user, message))
    },
    setUnread: (user, status) =>{
      dispatch(setUnread(user, status))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteFriends)
