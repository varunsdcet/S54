import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View,NetInfo,ActivityIndicator ,Image,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import DeviceInfo from 'react-native-device-info';
const equalWidth =  (width -20 )
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class BookTable extends Component {


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
        moviesList: [],
        date :'',
        times :'',
        guest:'',
        name :'',
        mobile : '',
        email : '',
        status :'',
      loading:'',
     
    }
  }

 _keyExtractor = (item, index) => item.id;


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



buttonClickListener = () =>{


    if (this.state.name == ''){
      alert('Please Enter Username')
    } else if (this.state.email == ''){
      alert('Please Enter Email')
    }else if (this.state.mobile == ''){
      alert('Please Enter Mobile')
    }

       else if (this.state.date == ''){
      alert('Please Enter Date')
    } else if (this.state.timesi == ''){
      alert('Please Enter Time')
    }else if (this.state.guest == ''){
      alert('Please Enter Guest')
    }


      else if (this.state.status == false){
      alert('Please Connect to Internet')
    }  else {
    
      const url = GLOBAL.BASE_URL +  GLOBAL.booking_event
      alert(url)
      this.showLoading()
      fetch(url, {


  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    booking_date:this.state.name,
  no_of_guest:this.state.guest,
  time:this.state.times,
  full_name:this.state.name,
  mobile:this.state.mobile,
  email:this.state.email,
  foreign_id:GLOBAL.foreign_id,
  user_id: GLOBAL.userid,
  device_id: '',
  device_token: '',
  device_type: '',
  loginTime: '',
  model_name: '',
  carrier_name: '',
  device_country: '',
  device_memory: '',
  have_notch: '',
  manufacture: ''
   

  }),
}).then((response) => response.json())
    .then((responseJson) => {
     
      
       this.hideLoading()
       if (responseJson.status == true) {

       alert('Your Table Book Successfully.')
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
handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
        if (this.state.status == false){
          alert('You are not Connected to Internet')
        }
        console.log(`is connected: ${this.state.status}`);
}

  getMoviesFromApiAsync = () => {
      
       const url = 'http://139.59.76.223/test_api/index.php';
     alert(url)
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
      alert(JSON.stringify(responseJson))
  
       this.setState({ moviesList: responseJson.data}) 
      
      alert(JSON.stringify(responseJson))
      
    })
    .catch((error) => {
      console.error(error);
      
    });
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
      
        <KeyboardAwareScrollView style = {{flex :1}}
      
        >
       

         <View style = {{flexDirection : 'column' ,flex :1}}>
          

         <Text style = {{margin :10,color :'white' ,fontSize : 18}}>
          Please select your booking details.


          </Text>

          <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Select a date
          </Text>
         
         <View style={{ height:30, backgroundColor: 'transparent', marginLeft: 3 }}>
            <DatePicker date={this.state.date} showIcon={false} placeholder="" mode="date" format="DD-MM-YYYY" confirmBtnText="Confirm"
        cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  height: 40,
                  width: width - 36,

                
                },
                dateText: {
                  marginTop: 3,
                  color: 'white',
                  fontSize: 18,

                },
                placeholderText: {
                  marginTop: 3,
                  marginLeft: 0,
                  color: 'white',
                  fontSize: 18,
                }
              }
              }
              onDateChange={(date) => { this.setState({ date: date }) }} placeholderTextColor="white" underlineColorAndroid={'rgba(0,0,0,0)'} style={{ height: 40, width: width - 20, marginLeft :10, backgroundColor: 'rgba(0,0,0,0.5)' }}></DatePicker>
          </View>
         


         
          <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Number of Guest
          </Text>
         
          <View style={{justifyContent: 'center',height : 40,backgroundColor :'rgba(0,0,0,0.5)',width :width - 20,marginLeft :10}}>
           <TextInput style = {{width :width - 36,color :'white' ,fontSize : 18,marginLeft :18}}
          placeholder="Enter Number of Guest"
        placeholderTextColor={'white'}
        keyboardType={"number-pad"}
        onChangeText={(text) => this.setState({guest:text})}
          />
           </View>



          <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Time
          </Text>
         
          <View style={{ height:30, backgroundColor: 'transparent', marginLeft: 3 }}>
            <DatePicker date={this.state.times} showIcon={false} placeholder="" mode="time" format="hh.mm a" confirmBtnText="Confirm"
        cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  height: 40,
                  width: width - 36,

                
                },
                dateText: {
                  marginTop: 3,
                  color: 'white',
                  fontSize: 18,

                },
                placeholderText: {
                  marginTop: 3,
                  marginLeft: 0,
                  color: 'white',
                  fontSize: 18,
                }
              }
              }
              onDateChange={(date) => { this.setState({ times: date }) }} placeholderTextColor="white" underlineColorAndroid={'rgba(0,0,0,0)'} style={{ height: 40, width: width - 20, marginLeft :10, backgroundColor: 'rgba(0,0,0,0.5)' }}></DatePicker>
          </View>

           <Text style = {{margin :10,color :'white' ,fontSize : 18}}>
          Personal details.


          </Text>


           <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Full Name
          </Text>
         
          <View style={{justifyContent: 'center',height : 40,backgroundColor :'rgba(0,0,0,0.5)',width :width - 20,marginLeft :10}}>
           <TextInput style = {{width :width - 36,color :'white' ,fontSize : 18,marginLeft :18}}
          placeholder="Enter Full Name"
        placeholderTextColor={'white'}
        onChangeText={(text) => this.setState({name:text})}
          />
           </View>



            <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Mobile Number
          </Text>
         
          <View style={{justifyContent: 'center',height : 40,backgroundColor :'rgba(0,0,0,0.5)',width :width - 20,marginLeft :10}}>
           <TextInput style = {{width :width - 36,color :'white' ,fontSize : 18,marginLeft :18}}
          placeholder="Enter Mobile Number "
        placeholderTextColor={'white'}
         onChangeText={(text) => this.setState({mobile:text})}
          />
           </View>


            <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Email
          </Text>
         
          <View style={{justifyContent: 'center',height : 40,backgroundColor :'rgba(0,0,0,0.5)',width :width - 20,marginLeft :10}}>
           <TextInput style = {{width :width - 36,color :'white' ,fontSize : 18,marginLeft :18}}
          placeholder="Enter Email "
        placeholderTextColor={'white'}
        onChangeText={(text) => this.setState({email:text})}
          />
           </View>


           <Button
           containerStyle={{margin : 10,padding:10, height:40, overflow:'hidden', borderRadius:10, backgroundColor: '#ce8c04'}}
   
            style={{fontSize: 14, color: 'white'}}
          onPress={this.buttonClickListener}
        >
       
         BOOK
        </Button>
        

         
 
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
