import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Image,TouchableOpacity,FlatList} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Landing from './Landing.js';



type Props = {};
export default class TimeLine extends Component<Props> {
constructor(){
    super()
   this.renderDetail = this.renderDetail.bind(this)


    this.state = {
       data: [
      {
        time: '2018',
        movie :[],
        
      },
       {
        time: '2017',
         movie :[],
      },
        
       {
        time: '2016',
         movie :[],
       
      },
       {
        time: '2015',
         movie :[],
        
      },



      ],

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

  
 



renderRowItem = (itemData) => {
    return (
      <TouchableOpacity  onPress={() =>
        <Landing>
        </Landing>

      }>     
    <View style={{backgroundColor :'blue', width: 130, height: 150, flexDirection: 'row', margin: 3 }}>
     
       
      </View>
     
    </TouchableOpacity>

     
    )
  }


renderDetail(rowData, sectionID, rowID) {


  alert(rowData.movie)
   
   
 
    return (


      <View style = {{flex : 1}}>
   <FlatList 
          data={this.state.moviee}
          numColumns={2}
        
          renderItem={this.renderRowItem}
        />
    

     
     </View>

    )
  }

  render() {




    return (
     
      <Timeline
        circleSize={40}
          circleColor='rgb(206,140,4)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'black', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
        
      renderDetail={this.renderDetail}
          data={this.state.data}
        />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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