          import React, {Component} from 'react';
import { StyleSheet, Text,FlatList, View,Modal ,Image,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';

const equalWidth =  (width -20 )
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
   
}, 

{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
 
    
}, 


]
type Props = {};


export default class ZoomList extends Component {


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
        moviesList: [],
     
    }
  }

 _keyExtractor = (item, index) => item.id;


  renderRowItem = (itemData) => {
      
   


    return (


 

      <View style={{flex :1,flexDirection :'row', height : 150,  width : equalWidth ,margin : 10}}>


        
        
      <Image
          style={{ width: 150, height : 150,margin :0 }}
          source={{ uri: itemData.item.image }}

        

        />
       


        <Text  style = {{margin:3,width : width - 170,color :'white',marginTop : 14,fontSize :14 }}
        numberOfLines={4} >After visiting an event listing, people most often open Google Images and YouTube. Why? They’re looking for photos and videos </Text>
      
       

      </View>

      
        


      
    
   
     
    )
  }
 componentWillMount() {
     
    
  }
goback = () =>{
  this.props.navigation.goBack()
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

        

   <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={images}
                enableSwipeDown = {true}
                swipeDownThreshold = {300}
               
                />
            </Modal>

       
      
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
