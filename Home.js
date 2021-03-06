import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image,Alert,Dimensions,AsyncStorage ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';

const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class Home extends Component {
   static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}


constructor(props) {
    super(props)
    this.state = {
      isScreen :''
     
    }
  }
 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }
resPress = (resId,resName) => {
   this.setState({isScreen: '1'});
  
  }
   buttonClickListener = () =>{
    this.props.navigation.navigate('Signup')
};

componentWillMount() {
      this.getMoviesFromApiAsync()
    
  }

 getMoviesFromApiAsync = () => {
      
      const url = GLOBAL.BASE_URL +  GLOBAL.get_settings
     
      fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userID : '1'
    
  }),
}).then((response) => response.json())
    .then((responseJson) => {
     
  
      GLOBAL.longitude = parseFloat(responseJson.longitude) 
      GLOBAL.latiude = parseFloat(responseJson.latitude) 
      GLOBAL.address = responseJson.address
      
     
      
    })
    .catch((error) => {
      console.error(error);
      
    });
 }

  render() {
    var value =  AsyncStorage.getItem('userID');
    value.then((e)=>{
      GLOBAL.userid = e
      alert(GLOBAL.userid)
    }) 


     var valued =  AsyncStorage.getItem('name');
    valued.then((e)=>{
      GLOBAL.name = e
      alert(GLOBAL.userid)
    }) 


     var valuedd =  AsyncStorage.getItem('email');
    valuedd.then((e)=>{
      GLOBAL.email = e
      alert(GLOBAL.userid)
    }) 


     var values =  AsyncStorage.getItem('mobile');
    values.then((e)=>{
      GLOBAL.mobile = e
      alert(GLOBAL.userid)
    }) 


     var valu =  AsyncStorage.getItem('image');
    valu.then((e)=>{
      GLOBAL.image = e
      alert(GLOBAL.userid)
    }) 
    return (
      <View style={styles.container}>
    
      <View style={{ width: window.width, height: window.height, flexDirection: 'column' }}>
        <Container/>
        
        { GLOBAL.screen == '' && (

          
        <View style={styles.content}>
           <Image style={styles.logoImage1}
           source={require('./logo.png')} />
        <KeyboardAwareScrollView >

        
            <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Profile')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./profile.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Profile
           </Text>

           </View>
            </TouchableOpacity>

             <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('EventList')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./event.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Events
           </Text>

           </View>
            </TouchableOpacity>
         <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('TimeLine')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./photo.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Photos
           </Text>

           </View>
            </TouchableOpacity>
         <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Video')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./video.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Videos
           </Text>

           </View>
           </TouchableOpacity>
          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Notification')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./notification.png')} />

           <Text style = {{marginLeft : -30,marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Notification
           </Text>

           </View>
           </TouchableOpacity>

          <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Locations')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./location.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Location
           </Text>

           </View>
           </TouchableOpacity>
        <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Media')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./media.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Media
           </Text>

           </View>
            </TouchableOpacity>
           
             <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Menu')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./menu.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Menu
           </Text>

           </View>
           </TouchableOpacity>

              <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Partner')}>
           <View style = {{marginLeft :window.width - 90,height : 90 ,width :90 }}>
           <Image style={{marginLeft : 30,marginTop : 30,width :25,height:25 , resizeMode: 'contain'}}
           source={require('./partner.png')} />

           <Text style = {{marginTop : 5,textAlign :'center',color :'white',fontSize :20}}>

           Partner
           </Text>

           </View>
            </TouchableOpacity>

            </KeyboardAwareScrollView>
      
       </View>
      

       )}


        { GLOBAL.screen == '1' && (
        <View style={styles.content}>


         
         <Signup/>
      

         
      
       </View>
       )}
        </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        marginLeft : 5,
        marginTop : 30,
        width : 130,
        height :120,
        position: 'absolute',
     
    },

     logoImage2: {
        resizeMode: 'contain',
        width : window.width - 20,
        height :550,
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
     margin : 15,
    textAlign : 'center',
    color : '#ffffff',

  } ,

createaccount :{
     margin : 15,
    color : '#ce8c04',

  } ,
});
