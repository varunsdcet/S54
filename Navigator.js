import { createStackNavigator ,createAppContainer ,createDrawerNavigator} from 'react-navigation';
import Splash from './Splash.js';
import Signup from './Signup.js';
import Login from './Login.js';
import TimeLine from './TimeLine.js';
import Landing from './Landing.js';
import Home from './Home.js';
import Menu from './Menu.js';

import Locations from './Locations.js';
import Media from './Media.js';
import BookTable from './BookTable.js';
import Partner from './Partner.js';
import EventList from './EventList.js';
import Notification from './Notification.js';
import PhotoList from './PhotoList.js';
import ZoomList from './ZoomList.js';
import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Button} from 'react-native';



const StackNavigator = createStackNavigator({
   Splash: { screen: Splash },
   Login: { screen: Login },
   Landing: { screen: Landing },
   Signup: { screen: Signup },
    Home: { screen: Home },
   
     Menu: { screen: Menu ,
 navigationOptions: ({ navigation }) => ({
 	 headerTintColor: '#ce8c04',
 	   title: 'Menu',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
   EventList: { screen: EventList ,
 navigationOptions: ({ navigation }) => ({
 	 headerTintColor: '#ce8c04',
 	   title: 'EVENTS',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },

   BookTable: { screen: BookTable ,
 navigationOptions: ({ navigation }) => ({
 	 headerTintColor: '#ce8c04',
 	   title: 'BOOKTABLE',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
   Notification: { screen: Notification ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: '#ce8c04',
     title: 'NOTIFICATION',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
  Locations: { screen: Locations ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: '#ce8c04',
     title: 'STUDIO54',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
    Media: { screen: Media ,
 navigationOptions: ({ navigation }) => ({
 	 headerTintColor: '#ce8c04',
 	   title: 'Media',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
   Partner: { screen: Partner ,
 navigationOptions: ({ navigation }) => ({
 	 headerTintColor: '#ce8c04',
 	   title: 'PARTNERS',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },

  PhotoList: { screen: PhotoList ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: '#ce8c04',
     title: 'PhotoList',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
  ZoomList: { screen: ZoomList ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: '#ce8c04',
     title: 'PhotoList',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },

  TimeLine: { screen: TimeLine ,
 navigationOptions: ({ navigation }) => ({
   headerTintColor: '#ce8c04',
     title: 'PHOTOS',
      headerStyle: {
      backgroundColor: 'black'

    },
 
  }),
  },
   
});

export default createAppContainer(StackNavigator);
