import {Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

//Style elements
export const styles = StyleSheet.create({
  //Font and text styles:
  EventTitleBox: {
      marginLeft: 15,
      marginTop: 15,
  },
  EventTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ConfirmEventTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a4c537',
  },
  BodyText: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  BodyTextGray: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#8D8D8D', //light gray
  },
  NameText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Header Styles
  HeaderLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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

  // Hamburger Menu Styles
  HamburgerMenuContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  HamburgerMenuButtonContainer: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
  },
  HamburgerMenuCenteredLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  HamburgerMenuProfilePic: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: '#2AACAD',
    borderWidth: 7,
  },
  HamburgerMenuIcon: {
    height: 28,
    width: 28,
    marginTop: 6,
  },
  HamburgerMenuButton: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  //Inbox Styles
  InboxLineItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
    paddingBottom: 60,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  InboxSummaryText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    marginLeft: 10,
  },
  ArrowRight: {
    width:24*0.6,
    height:39*0.6,
    marginTop: (70-39*0.6)*0.5-10,
    marginLeft: 10,
  },
  InboxUnreadBadge: {
    position: 'absolute',
    top: 1,
    left: 1,
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#2AACAD'
  },
  HomeScreenUnreadBadge: {
    position: 'absolute',
    top: -5,
    right: 5,
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2AACAD',
    backgroundColor: '#F64444',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeScreenUnreadBadgeNumber: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff', //light gray
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
    marginLeft: 15,
    marginTop: 30,
    height: 120,
  },
  EventDetail: {
    flexDirection: 'row',
    marginTop: 15,

  },
  EventAttendeesBox: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 175,
  },
  EventAbout: {
    marginLeft: 15,
    marginRight: 30,
    height: 140,
  },
  SpotsBox: {
      marginLeft: 25,
      marginBottom: 20,
  },
  EventDetailIconBox: {
      marginRight: 10,
      marginTop: 5,
      height: 30,
      width: 30,
  },
  EventDetailIcon: {
      height: 30,
      width: 30,
  },

  //Button Styles
  EventButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  AttendButton: {
      backgroundColor: '#A4C537',
      alignItems: 'center',
      borderRadius: 10,

  },
  EventButton: {
    height: 38,
    width: 160,
  },


  //Host Form Styles
  HostHeaderBox: {
      alignItems: 'center',
  },
  SubmitFormButton: {
      height: 41,
      width: 100,
  },
});
