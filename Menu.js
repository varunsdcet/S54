import React, {Component} from 'react';
import { StyleSheet, Text,FlatList,SafeAreaView, View ,Image,Alert,Dimensions ,TextInput,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import MaterialTabs from 'react-native-material-tabs';

const window = Dimensions.get('window');
import Container from './Container.js';
import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');


const equalWidth =  (width -20 )
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {};
export default class Menu extends Component {


constructor(props) {
    super(props)
    this.state = {
      isScreen :'',
      myItem :[],
        moviesList: [],
        selectedTab:0,
     
    }
  }


  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

 _keyExtractor = (item, index) => item.id;


  renderRowItem = (itemData) => {
      
   


    return (

        <View style = {{width : window.width,flexDirection :'column',backgroundColor :'rgba(0,0,0,0.5)'}} >


      <Text style = {{padding :5,marginLeft :3,color :'#ffffff' ,fontSize : 18}}>
      {itemData.item.name}



        </Text>
        <Text style = {{padding :5,marginLeft :3,color :'#ffffff' ,fontSize : 9}}>
      {itemData.item.description}
        </Text>
        <View style = {{margin : 3 ,width :window.width ,height :1,backgroundColor :'rgba(255,255,255,0.4)'}}>
        </View>
    </View>



      
    
   
     
    )
  }
 componentWillMount() {
      this.getMoviesFromApiAsync()
    
  }

  resPress = (resId,resName) => {
 
    Linking.canOpenURL(resId).then(supported => {
      if (supported) {
        Linking.openURL(resId);
      } else {
        console.log("Don't know how to open URI: " + resId);
      }
    });
   
  
  }

  getMoviesFromApiAsync = () => {
      
      const url = GLOBAL.BASE_URL +  'menu'
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
      this.setState({ myItem: responseJson.single_array})
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

      <View style = {{width : window.width ,height :50 }}>
        <MaterialTabs
          items= {this.state.myItem}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab}
          barColor="#000000"
          indicatorColor="#ce8c04"
          scrollable = {true}
          activeTextColor="white"
        />

        </View>

         <FlatList  
          data= {this.state.moviesList[this.state.selectedTab]}
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
