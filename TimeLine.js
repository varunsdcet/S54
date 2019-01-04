import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Image,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Landing from './Landing.js';
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Container from './Container.js';
const { width, height } = Dimensions.get('window');

type Props = {};
export default class TimeLine extends Component<Props> {
constructor(){
    super()
   this.renderDetail = this.renderDetail.bind(this)


    this.state = {
       data: [],
  isScreen :'',
      moviee: [
      {
        time: '2018',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688',
        icon: require('./logo.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '2018',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688',
        icon: require('./logo.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '2018',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688',
        icon: require('./logo.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '2018',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688',
        icon: require('./logo.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      }


      ]
     
    }


    
  }

  
 
componentWillMount() {
      this.getMoviesFromApiAsync()
    
  }

  getMoviesFromApiAsync = () => {
      
       const url = 'http://139.59.76.223/monotech/webservice/testing';
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
  
       this.setState({ data: responseJson.data}) 
      
      alert(JSON.stringify(responseJson))
      
    })
    .catch((error) => {
      console.error(error);
      
    });
 }


renderRowItem = (itemData) => {
    return (
    <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('PhotoList')}>
    <View style={{backgroundColor :'rgba(0,0,0,0.5)',flex :1,flexDirection :'column', height : width/3 - 20 ,  width : width/3 - 40 ,margin : 3}}>


        
        
      <Image
          style={{width: width/3 - 40, height : width/3 - 40,margin :0}}
          source={{ uri: itemData.item.image }}
         

        />

<Text style = {{ padding :5 ,color : 'white',fontSize : 10}}>
Night Club
</Text>
     
  </View>
</TouchableOpacity>
     
    )
  }


renderDetail(rowData, sectionID, rowID) {


  alert(rowData.movie)
   
   
 
    return (


      <View style = {{flex : 1}}>
   <FlatList 
          data={rowData.image_data}
          numColumns={3}
        
          renderItem={this.renderRowItem}
        />
    

     
     </View>

    )
  }

  render() {




    return (
       
    <View style={styles.container}>
   
    
      <View style={{ width: window.width, height: window.height }}>
        <Container/>
        
       

          
        <View style= {{height :667,width:375}}>

     <Timeline 
        circleSize={40}
          circleColor='rgb(206,140,4)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'black', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          data={this.state.data}
        
         renderDetail={this.renderDetail}
          
        />


    
    
      </View>
      </View>
      </View>




     
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
   content: {
    flex: 1,
    marginTop : -900,
    height: window.height,

    width : window.width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});