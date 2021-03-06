import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image,Alert,Dimensions,AsyncStorage,Platform,ActivityIndicator,NetInfo ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
import DeviceInfo from 'react-native-device-info';
var randomString = require('random-string');
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class Login extends Component {
   static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      name :'',
      email :'',
      mobile : '',
      password : '',
      status :'',
      loading:'',
     
    }
  }
 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }
resPress = (resId,resName) => {
   this.setState({isScreen: '1'});
  
  }


buttonClickListener = () =>{
 var x = randomString({
length: 4,
numeric: true,
letters: false,
special: false,

});

    if (this.state.name == ''){
      alert('Please Enter Username')
    } else if (this.state.email == ''){
      alert('Please Enter Email')
    }else if (this.state.mobile == ''){
      alert('Please Enter Mobile')
    }

       else if (this.state.password == ''){
      alert('Please Enter Password')
    }  else if (this.state.status == false){
      alert('Please Connect to Internet')
    }  else {
        GLOBAL.username = this.state.name,
  GLOBAL.email  = this.state.email,
  GLOBAL.mobile  = this.state.mobile,
  GLOBAL.password  = this.state.password,
  GLOBAL.otps = x
      const url = GLOBAL.BASE_URL +  GLOBAL.otp
      alert(url)
      this.showLoading()
      fetch(url, {


          

  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: this.state.email,
    mobile: this.state.mobile,
    otp: GLOBAL.otps,
   

  }),
}).then((response) => response.json())
    .then((responseJson) => {
     
      
       this.hideLoading()
       if (responseJson.status == true) {

      
        this.props.navigation.navigate('Otp')
       }else {
        alert('Unable to process your request Please try again after some time')
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
      DeviceInfo.getUniqueID()
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


           <View style = {{height : 550,width : window.width - 20,marginTop : 160 ,marginLeft :10 , marginRight :10}}>
           
           <Image style={styles.logoImage2}
           source={require('./loginbg.png')} />
           <View  style  = {{width : 150,height : 40 ,marginTop :70 ,marginLeft : window.width - 100 }}>
           <Text style = {{fontWeight: 'bold', fontSize: 15,textDecorationLine: 'underline',alignSelf: 'flex-end',width :150 ,height : 40 ,color :'#ce8c04'}}>
           SIGNUP
           </Text>


           </View>
           
           <View style = {{marginLeft : 15 ,marginTop : 22 ,marginRight :15 }}>

           <View style = {{padding : 5,flexDirection :'row', borderBottomColor: 'rgba(255,255,255,0.4)',
    borderBottomWidth: 1,
    marginBottom: 20}}>
             
          <Image style={{marginTop : 8,width :25,height:20 , resizeMode: 'contain'}}
           source={require('./name.png')} />

           <TextInput
        style={{marginLeft : 10,width : window.width - 90,height: 40,color:'white',fontSize: 15}}
        placeholder="Name"
        placeholderTextColor={'white'}
        onChangeText={(text) => this.setState({name:text})}

        
      />
           </View>

           <View style = {{padding : 5,flexDirection :'row', borderBottomColor: 'rgba(255,255,255,0.4)',
    borderBottomWidth: 1,
    marginBottom: 20}}>
             
          <Image style={{marginTop : 8,width :25,height:20 , resizeMode: 'contain'}}
           source={require('./email.png')} />

           <TextInput
        style={{marginLeft : 10,width : window.width - 90,height: 40,color:'white',fontSize: 15}}
        placeholder="Email"
        placeholderTextColor={'white'}
       onChangeText={(text) => this.setState({email:text})}
        
      />
           </View>

           <View style = {{padding : 5,flexDirection :'row', borderBottomColor: 'rgba(255,255,255,0.4)',
    borderBottomWidth: 1,
    marginBottom: 20}}>
             
          <Image style={{marginTop : 8,width :25,height:20 , resizeMode: 'contain'}}
           source={require('./mobile.png')} />

           <TextInput
        style={{marginLeft : 10,width : window.width - 90,height: 40,color:'white',fontSize: 15}}
        placeholder="Mobile"
        placeholderTextColor={'white'}
        onChangeText={(text) => this.setState({mobile:text})}
        
      />
           </View>

           <View style = {{padding : 5,flexDirection :'row', borderBottomColor: 'rgba(255,255,255,0.4)',
    borderBottomWidth: 1,
    marginBottom: 0}}>
             
          <Image style={{marginTop : 8,width :25,height:20 , resizeMode: 'contain'}}
           source={require('./password.png')} />

           <TextInput
        style={{marginLeft : 10,width : window.width - 90,height: 40,color:'white',fontSize: 15}}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={'white'}
        onChangeText={(text) => this.setState({password:text})}
        
      />
           </View>
           <Button
           containerStyle={{margin : 25,padding:10, height:40, overflow:'hidden', borderRadius:20, backgroundColor: '#ce8c04'}}
   
            style={{fontSize: 14, color: 'black'}}
          onPress={this.buttonClickListener}
        >
       
         Sign UP
        </Button>


                     </View>
             
      <Text style={styles.createaccount} >
        <Text style={styles.account} >
        Already have an account ? 
        </Text>
         Login
        </Text>




           </View>

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
