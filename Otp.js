import React, {Component} from 'react';
import { StyleSheet, Text,AsyncStorage,Platform, View,ActivityIndicator ,Image,NetInfo,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
import DeviceInfo from 'react-native-device-info';

const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class Otp extends Component {
 


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
        username: '',
      password: '',
      status :'',
      ipAdd : '',
      loading:'',
      results: [],
     
    }
  }
 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }
resPress = (resId,resName) => {
   this.setState({isScreen: '1'});
  
  }
 buttonClickListener = () =>{


    if (this.state.username == ''){
      alert('Please Enter Username')
    } else if (this.state.username != GLOBAL.otps){
       alert('Otp not Match')
    }


       else if (this.state.status == false){
      alert('Please Connect to Internet')
    }  else {
      const url = GLOBAL.BASE_URL +  GLOBAL.Signup
      this.showLoading()
      fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: GLOBAL.username,
    mobile: GLOBAL.mobile,
    email: GLOBAL.email,
    password: GLOBAL.password,
    deviceID: DeviceInfo.getUniqueID(),
    deviceType: Platform.OS,
    deviceToken: '',
    model_name: DeviceInfo.getModel(),
    carrier_name: DeviceInfo.getCarrier(),
    device_country: DeviceInfo.getDeviceCountry(),
    device_memory: DeviceInfo.getTotalMemory(),
    has_notch: DeviceInfo.hasNotch(),
    manufacture: DeviceInfo.getManufacturer(),
    ip_address: '',

  }),
}).then((response) => response.json())
    .then((responseJson) => {
      
      
       this.hideLoading()
       if (responseJson.status == true) {

      this.setState({ results: responseJson.user_detail })
          AsyncStorage.setItem('userID', this.state.results.user_id);
      AsyncStorage.setItem('name', this.state.results.name);
      AsyncStorage.setItem('email', this.state.results.email);
      AsyncStorage.setItem('mobile', this.state.results.mobile);
     AsyncStorage.setItem('image', this.state.results.image);
      
        this.props.navigation.navigate('Home')
       }else {
        alert('Please enter Valid Credentials.')
       }
    })
    .catch((error) => {
      console.error(error);
       alert('Unable to process your request Please try again after some time')
    });
    }
  }



showLoading() {
       this.setState({loading: true})
    }

    hideLoading() {
       this.setState({loading: false})
    }

    componentDidMount() {
     
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ status: isConnected }); }
    );
}
componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
}

handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
        if (this.state.status == false){
          alert('You are not Connected to Internet')
        }
        console.log(`is connected: ${this.state.status}`);
}
  render() {
     if(this.state.loading){
      return(
        <View style={{flex: 1}}>
        <ActivityIndicator style = {styles.loading}

       size="large" color="#ce8c04" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
    
      <View style={{ width: window.width, height: window.height, flexDirection: 'column' }}>
        <Container/>
        
        { GLOBAL.screen == '' && (

          
        <View style={styles.content}>

        <KeyboardAwareScrollView >

         <Image style={styles.logoImage1}
           source={require('./logo.png')} />


           <Text style = {{margin : 10,marginTop : 200,fontWeight :'bold' ,color : 'white',fontSize: 18}}>
           Please Enter Otp From Your Registered Email Id

           </Text>

             <TextInput
        style={{marginLeft : 15,borderBottomWidth: 1,
    marginBottom: 20,marginTop : 30,fontWeight :'bold',width : window.width - 30,height: 40,color:'white',fontSize: 14}}
        placeholder="Enter Otp"
        placeholderTextColor={'white'}
        onChangeText={(text) => this.setState({username:text})} 
        
      />

      <Button
           containerStyle={{marginLeft : 25,marginTop : 20,marginBottom : 5, marginRight:25, padding:10, height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#ce8c04'}}
   
            style={{fontSize: 14, color: 'black'}}
          onPress={this.buttonClickListener}
        >
       
        SUBMIT
        </Button>


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
