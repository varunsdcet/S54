import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { showLocation } from 'react-native-map-link';
import { Popup } from 'react-native-map-link';


  const markers = [
  {
    latitude: 45.65,
    longitude: -78.90,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class Location extends Component {
  


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      isVisible: true
     
    }
  }


 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }
resPress = (resId,resName) => {
   this.setState({isScreen: '1'});
  
  }
 markerClick = () =>{
 
  showLocation({
    latitude: 38.8976763,
    longitude: -77.0387185,
   // not optional if sourceLatitude is specified
    title: 'Studio 54',  // optional
    googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
      // optionally specify the google-place-id
    dialogTitle: 'Please Select', // optional (default: 'Open in Maps')
    dialogMessage: '', // optional (default: 'What app would you like to use?')
    cancelText: 'Cancel', // optional (default: 'Cancel')
    appsWhiteList: ['noga','moovit','citymapper','transit','apple-maps','google-maps','uber','lyft'] ,// optionally you can set which apps to show (default: will show all supported apps installed on device)
      // optionally specify specific app to use
});
};

   buttonClickListener = () =>{
    this.props.navigation.navigate('Home')
};

  

  render() {
    
    
    return (
 
  <View style={styles.container}>
        <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
 
          initialRegion={{
              latitude: GLOBAL.latiude,
              longitude: GLOBAL.longitude,
              latitudeDelta: 5.0,
              longitudeDelta: 5.0,
          }}
        >


        <MapView.Marker
            coordinate={{latitude: GLOBAL.latiude,
            longitude: GLOBAL.longitude}}
           
             onPress={() => this.markerClick()}
         />
      </MapView>
     
      <View style = {{flexDirection :'column',backgroundColor :'rgba(0,0,0,1.0)' ,marginTop : window.height - 215 ,height :150}}>
      <Text style = {{padding :5,fontWeight: 'bold',textDecorationLine: 'underline',color :'white' }}>
      Studio 54
      </Text>
      <Text style = {{padding :15,color :'white' }}>
      {GLOBAL.address}
      </Text>
       

      </View>
     








 </View>
      
    
     
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 150,
    },
  video: {
    position: 'relative',
    width :  window.width,
    height :  window.height,
  },
  content: {
    flex: 1,
    marginTop : - window.height ,
    height: window.height,

    width : window.width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
   logoImage1: {
        marginLeft : window.width/2 - 65,
        marginTop : 60,
        width : 130,
        height :120,
        position: 'absolute',
     
    },

     logoImage2: {
        resizeMode: 'contain',
        width : window.width - 20,
        height :800,
        position: 'absolute',
     
    },
  text: {
    color : 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
     marginTop: 150,
      marginLeft: 0 ,
      width :  window.width,
      textAlign:'center'
  },
  container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    account :{
     margin : 30,
    textAlign : 'center',
    color : '#ffffff',

  } ,

createaccount :{
     margin : 30,
    color : '#ce8c04',

  } ,
  facebookicon: {
    width: 15,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },
  facebookColor: {

  
   flexDirection :'row',
    margin: 20,
    height: 40,
    
    backgroundColor: '#284ca0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },


  gmailColor: {
//de584e

   flexDirection :'row',
    marginLeft: 20,
    height: 40,
    marginTop : 0,
    marginRight : 20,
    backgroundColor: '#de584e',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: '#DCDCDC',
    // borderRadius: 10,




  },  
  textColor : {
    marginLeft : 50,
    marginTop : 8,
    color : '#ffffff',
    fontSize: 18,
      
   textAlign: 'center',
    

  },
   gmailIcon: {
    width: 27,
    height: 27,
    marginLeft : 15 ,
    marginTop : 6,


  },


});
