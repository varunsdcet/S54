import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');


const equalWidth =  (width -20 )
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class EventList extends Component {


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
        moviesList: [],
     
    }
  }

 _keyExtractor = (item, index) => item.id;
 resPress = (resId,resName) => {
 
   GLOBAL.foreign_id =  resId
   this.props.navigation.navigate('BookTable')
  
  }

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
       {itemData.item.start_date }



        </Text>
        </View>

           <View style = {{flexDirection :'row',marginTop :5}}>
           <Image style={{width :15,height:15 , resizeMode: 'contain'}}
           source={require('./eventtime.png')} />
          <Text style = {{marginLeft : 3,color :'#ffffff' ,fontSize : 12}}>
       {itemData.item.start_time }



        </Text>
        </View>

        </View>
       
       <View style = {{marginTop : -40,height : 50,backgroundColor:'rgba(0,0,0,0.7)',flex : 1,flexDirection :'row'}}>
       
       <Text style = {{margin : 5,color :'#ce8c04' ,fontSize : 20}}>
       {itemData.item.event_name }



        </Text>

         
        <View style = {{position: 'absolute', right: 5,marginTop :5,backgroundColor :'#ce8c04',padding :3 ,borderRadius : 12}}>
       
        <TouchableOpacity   onPress={() => this.resPress(itemData.item.event_id, '')}>
      
      <Text style = {{margin : 5,color :'#ffffff' ,fontSize : 12}}>
       BOOK TABLE



        </Text>
        </TouchableOpacity>
        </View>
      

        </View>

       

    
         </View>


      
    
   
     
    )
  }
 componentWillMount() {
      this.getMoviesFromApiAsync()
    
  }

  getMoviesFromApiAsync = () => {
      
       const url = GLOBAL.BASE_URL +  GLOBAL.get_event
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
  
       this.setState({ moviesList: responseJson.event_list}) 
      
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

        <KeyboardAwareScrollView >

     <FlatList style= {{backgroundColor:'rgba(0,0,0,0.2)',flexGrow:0}}
          data={this.state.moviesList}
          numColumns={1}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />

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
