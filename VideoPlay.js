import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Dimensions ,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const windows = Dimensions.get('window');
import TimeLine from './TimeLine.js';
const GLOBAL = require('./Global');

type Props = {};
export default class Container extends Component {
 
constructor(props) {
    super(props)
    this.state = {
      times :0,
       paused: false,
     
    }
  }
 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

 setTime(){

}


componentWillUnmount(){
  this.setState({
      paused: true
    });
  window.EventBus.trigger('yourEventName1', 'optional event info');
}
getProgress(e){
        this.setState({
            times: e.currentTime,
           
        })
       
    }





  render() {

    return (
      <View style={styles.container}>
    
      <View style={{ width: windows.width, height: windows.height, flexDirection: 'row' }}>
        <Video  
         source={{uri: GLOBAL.foreign_id}} 
          ref={(ref) => {
         this.player = ref
       }} 
        paused={this.state.paused}
          rate={1.0}
          volume={1.0}
          onLoad={() => {

          
                         
                         
                          }} 
          muted={false}
         onProgress={ e => this.getProgress(e) }
          false
        
       
         
          style={styles.video}
        
        />
          
        <View style={styles.content}>
        
      
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
  video: {
    position: 'relative',
    width :  windows.width,
    height :  windows.height,
  },
  content: {
    flex: 1,
    marginLeft: -windows.width,
    alignSelf: 'auto' ,
    height: windows.height,
    width : windows.width,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  text: {
    color : 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
     marginTop: 150,
      marginLeft: 0 ,
      width :  windows.width,
      textAlign:'center'
  },
});
