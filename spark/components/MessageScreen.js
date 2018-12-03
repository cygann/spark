import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

import { connect } from 'react-redux';
import { addMessage } from '../actions/User';

import { styles } from './Styles';

//Main home page that displays the map. Inside of this screen is an instance of the Map class.
class MessageScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('user', {name: 'Name'}).name,
    };
  }

  renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2AACAD',
          }
        }}
      />
    )
  }

  render() {
    const targetKey = this.props.navigation.getParam('user', {key: 'Key'}).key;
    const user = this.props.users.find((user) => user.key == targetKey);
    const messages = user.conversation.messages;
    console.log(messages);
    return (
      <GiftedChat
        textInputProps={{autoFocus: true}}
        messages={messages}
        onSend={(messages) => this.props.addMessage(user, messages[0])}
        user={{
          _id: 0,
        }}
        renderBubble={this.renderBubble}
      />
    )
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
    addMessage: (user, message) => {
      dispatch(addMessage(user, message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen)
