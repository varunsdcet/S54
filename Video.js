import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Image,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Landing from './Landing.js';
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Container from './Container.js';
const { width, height } = Dimensions.get('window');

type Props = {};
export default class Video extends Component<Props> {
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

  componentDidMount() {
 
}
 
componentWillMount() {

      this.getMoviesFromApiAsync()
    
  }

  getMoviesFromApiAsync = () => {
      
      const url = GLOBAL.BASE_URL +  'video'
   
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
      
  
       this.setState({ data: responseJson.data}) 
      
      
      
    })
    .catch((error) => {
      console.error(error);
      
    });
 }

resPress = (resId,resName) => {
  window.EventBus.trigger('yourEventName', 'optional event info');
    GLOBAL.foreign_id =  resId
   this.props.navigation.navigate('VideoPlay')
  
  }
  

renderRowItem = (itemData) => {
    return (
    <TouchableOpacity   onPress={() => this.resPress(itemData.item.link, '')}>
    <View style={{backgroundColor :'rgba(0,0,0,0.5)',flex :1,flexDirection :'column', height : width/3 - 20 ,  width : width/3 - 40 ,margin : 3}}>


        
        
      <Image
          style={{width: width/3 - 40, height : width/3 - 40,margin :0}}
          source={{ uri: itemData.item.thumbnail }}
         

        />

<Text style = {{ padding :5 ,color : 'white',fontSize : 10}}>
{itemData.item.name}
</Text>
     
  </View>
</TouchableOpacity>
     
    )
  }


renderDetail(rowData, sectionID, rowID) {


 
   

 
    return (


      <View style = {{flex : 1}}>
   <FlatList 
          data={rowData.data}
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
       
        
           circleSize={20}
           circleColor='rgba(206,140,4,0)'

          lineColor='rgb(255,255,255,0)'
          timeContainerStyle={{minWidth:52, marginTop: 6}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ce8c04', color:'white', padding:5, borderBottomLeftRadius: 5,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 0}}
          descriptionStyle={{color:'gray'}}
          innerCircle={'icon'}
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