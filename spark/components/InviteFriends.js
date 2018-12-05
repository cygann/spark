import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { CheckBox, Button, Input} from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';

import { styles } from './Styles';

export default class InviteFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AnthonyChecked: false,
      BiancaChecked: false,
      NatalieChecked: false,
      ZackChecked: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {    
      title: 'Invite Friends',
    };
  }

  choiceMade = () => {
    return (this.state.AnthonyChecked || this.state.BiancaChecked || this.state.NatalieChecked || this.state.ZackChecked);
  }

  render() {
    const event = this.props.navigation.getParam('event', {});

    return(
      <View>
        <View style={styles.InboxLineItem}>
          <Image style={styles.UserProfileImage} source={require('../assets/Anthony.png')} />
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>Anthony John</Text>
          </View>
          <CheckBox
            component={TouchableWithoutFeedback} 
            checkedIcon={<Image style={styles.Checkbox} source={require('../assets/Checked.png')} />}
            uncheckedIcon={<Image style={styles.Checkbox} source={require('../assets/Unchecked.png')} />}
            checked={this.state.AnthonyChecked} 
            onPress={() => this.setState({AnthonyChecked: !this.state.AnthonyChecked})}
          />
        </View>

        <View style={styles.InboxLineItem}>
          <Image style={styles.UserProfileImage} source={require('../assets/Bianca.png')} />
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>Bianca Yu</Text>
          </View>
          <CheckBox
            component={TouchableWithoutFeedback} 
            checkedIcon={<Image style={styles.Checkbox} source={require('../assets/Checked.png')} />}
            uncheckedIcon={<Image style={styles.Checkbox} source={require('../assets/Unchecked.png')} />}
            checked={this.state.BiancaChecked} 
            onPress={() => this.setState({BiancaChecked: !this.state.BiancaChecked})}
          />
        </View>

        <View style={styles.InboxLineItem}>
          <Image style={styles.UserProfileImage} source={require('../assets/Natalie.png')} />
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>Natalie Cygan</Text>
          </View>
          <CheckBox
            component={TouchableWithoutFeedback} 
            checkedIcon={<Image style={styles.Checkbox} source={require('../assets/Checked.png')} />}
            uncheckedIcon={<Image style={styles.Checkbox} source={require('../assets/Unchecked.png')} />}
            checked={this.state.NatalieChecked} 
            onPress={() => this.setState({NatalieChecked: !this.state.NatalieChecked})}
          />
        </View>

        <View style={styles.InboxLineItem}>
          <Image style={styles.UserProfileImage} source={require('../assets/zack.jpeg')} />
          <View style={styles.InboxSummaryText}>
            <Text style={styles.NameText}>Zack Cinquini</Text>
          </View>
          <CheckBox
            component={TouchableWithoutFeedback} 
            checkedIcon={<Image style={styles.Checkbox} source={require('../assets/Checked.png')} />}
            uncheckedIcon={<Image style={styles.Checkbox} source={require('../assets/Unchecked.png')} />}
            checked={this.state.ZackChecked} 
            onPress={() => this.setState({ZackChecked: !this.state.ZackChecked})}
          />
        </View>

        <View>
          <Button
            disabled={!this.choiceMade()}
            icon={<Image style={styles.SendInviteButton} source={this.choiceMade() ? require('../assets/SendInvite_Button.png') : require('../assets/SendInvite_Disabled.png')} />}
            iconContainerStyle={styles.SendInviteButton}
            title=""
            onPress={() => this.props.navigation.navigate('InviteConfirmation', {event: event})}
          />
        </View> 
      </View>

    );
  }
}


        //<View style={{alignItems: 'center'}}>
        //  <Input
        //    placeholder="Add a message (optional)"
        //    inputContainerStyle={styles.InviteTextBox}
        //  />
        //</View>


