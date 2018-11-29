import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image } from 'react-native';

import { styles } from './Styles';

class HamburgerMenuLineItem extends Component {
  render() {
    return (
      <View style={styles.HamburgerMenuButtonContainer}>
        <Image
          source={this.props.icon}
          style={styles.HamburgerMenuIcon}
        />
        <Button
          title={this.props.title}
          style={styles.HamburgerMenuButton}
          color='#333333'
          onPress={this.props.dest ? () => {
            this.props.nav.navigate(this.props.dest)
          } : () => {} }
        />
      </View>
    );
  }
}

class HamburgerMenuBlankSpace extends Component {
  render() {
    const h = this.props.size.height;
    return (
      <View style={{height: h}} />
    );
  }
}

export class HamburgerMenuContents extends Component {
  render() {
    return (
      <View style={styles.HamburgerMenuContainer}>
      <HamburgerMenuBlankSpace size={{height: 50}}/>
        <View style={styles.HamburgerMenuCenteredLine}>
          <Image source={require('../assets/zack.jpeg')} style={styles.HamburgerMenuProfilePic}/>
        </View>
        <HamburgerMenuBlankSpace size={{height: 10}}/>
        <View style={styles.HamburgerMenuCenteredLine}>
        <Button
          title="Sarah Caballo"
          style={styles.HamburgerMenuButton}
          color='#333333'
          onPress={() => {}}
        />
        </View>
        <HamburgerMenuBlankSpace size={{height: 50}}/>
        <HamburgerMenuLineItem nav={this.props.navigation} title='My Events' icon={require('../assets/HamEvents.png')}/>
        <HamburgerMenuLineItem nav={this.props.navigation} title='Host' dest='HostEvent' icon={require('../assets/HamHost.png')}/>
        <HamburgerMenuLineItem nav={this.props.navigation} title='Find Friends' icon={require('../assets/HamFriends.png')}/>
        <HamburgerMenuBlankSpace size={{height: 50}}/>
        <HamburgerMenuLineItem nav={this.props.navigation} title='Settings' icon={require('../assets/HamSettings.png')}/>
        <HamburgerMenuLineItem nav={this.props.navigation} title='Help' icon={require('../assets/HamHelp.png')}/>
        <HamburgerMenuLineItem nav={this.props.navigation} title='Logout' icon={require('../assets/HamLogout.png')}/>
      </View>
    );
  }
}
