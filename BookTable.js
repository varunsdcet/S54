import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';

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
     
    }
  }

 _keyExtractor = (item, index) => item.id;


  renderRowItem = (itemData) => {
      
   


    return (


 

      <View style={{ height : 195,  width : equalWidth ,margin : 10}}>


        
        
      <Image
          style={{ width: equalWidth, height : 195,margin :0 }}
          source={{ uri: itemData.item.image }}

        

        />

         <View style = {{position: 'absolute', right: 0,marginTop :5,backgroundColor :'#ce8c04',padding :5 ,borderTopLeftRadius : 10,borderTopLeftRadius : 10}}>
      
        <View style = {{flexDirection :'row'}}>
       <Image style={{width :15,height:15 , resizeMode: 'contain'}}
           source={require('./eventdate.png')} />

      <Text style = {{marginLeft :3,color :'#ffffff' ,fontSize : 12}}>
       {itemData.item.event_date }



        </Text>
        </View>

           <View style = {{flexDirection :'row',marginTop :5}}>
           <Image style={{width :15,height:15 , resizeMode: 'contain'}}
           source={require('./eventtime.png')} />
          <Text style = {{marginLeft : 3,color :'#ffffff' ,fontSize : 12}}>
       {itemData.item.event_time }



        </Text>
        </View>

        </View>
       
       <View style = {{marginTop : -40,height : 50,backgroundColor:'rgba(0,0,0,0.7)',flex : 1,flexDirection :'row'}}>
       

         


       <Text style = {{margin : 5,color :'#ce8c04' ,fontSize : 20}}>
       {itemData.item.title }



        </Text>


        <View style = {{position: 'absolute', right: 5,marginTop :5,backgroundColor :'#ce8c04',padding :3 ,borderRadius : 12}}>
      <Text style = {{margin : 5,color :'#ffffff' ,fontSize : 12}}>
       BOOK TABLE



        </Text>
        </View>

        </View>

       

    
         </View>


      
    
   
     
    )
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
          />
           </View>



          <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Time
          </Text>
         
          <View style={{ height:30, backgroundColor: 'transparent', marginLeft: 3 }}>
            <DatePicker date={this.state.times} showIcon={false} placeholder="" mode="time" format="DD-MM-YYYY" confirmBtnText="Confirm"
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
          />
           </View>



            <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Mobile Number
          </Text>
         
          <View style={{justifyContent: 'center',height : 40,backgroundColor :'rgba(0,0,0,0.5)',width :width - 20,marginLeft :10}}>
           <TextInput style = {{width :width - 36,color :'white' ,fontSize : 18,marginLeft :18}}
          placeholder="Enter Mobile Number "
        placeholderTextColor={'white'}
          />
           </View>


            <Text style = {{margin :13,color :'white' ,fontSize : 13}}>
         Email
          </Text>
         
          <View style={{justifyContent: 'center',height : 40,backgroundColor :'rgba(0,0,0,0.5)',width :width - 20,marginLeft :10}}>
           <TextInput style = {{width :width - 36,color :'white' ,fontSize : 18,marginLeft :18}}
          placeholder="Enter Email "
        placeholderTextColor={'white'}
          />
           </View>


           <Button
           containerStyle={{margin : 10,padding:10, height:40, overflow:'hidden', borderRadius:10, backgroundColor: '#ce8c04'}}
   
            style={{fontSize: 14, color: 'white'}}
         
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
