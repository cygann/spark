import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

//Style elements
export const styles = StyleSheet.create({
  //Font and text styles:
  EventTitleBox: {
      left: 15,
  },
  EventTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
  },
  BodyText: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  BodyTextGray: {
    fontFamily: 'Roboto',
    fontSize: 14,
    //color: #8D8D8D, //light gray
  },
  NameText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Map Styles
  mapcontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

//General Styles
  MapPreviewBox: {
    height: 150,
  },
  UserProfileImage: {
      height: 50,
      borderRadius: 25,
      width: 50
  },
  UserProfileImageSmall: {
    height: 30,
    borderRadius: 15,
    width: 30,
  },
  UserProfileBox: {
    flexDirection: 'row',
    left: 15,
    top: 15,
  },
  EventDetails: {
    left: 15,
    top: 30,
    height: 140,
    flexDirection: 'row',
  },
  EventAttendeesBox: {
    left: 25,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 175,
  },
  EventAbout: {
    left: 15,
    right: 30,
    height: 140,
  },

  //Button Styles
  EventButtonBox: {
    //flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  AttendButton: {
      backgroundColor: '#A4C537',
      padding: 10,
      alignItems: 'center',
      
  },
});