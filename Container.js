import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Dimensions ,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import TimeLine from './TimeLine.js';
const GLOBAL = require('./Global');
type Props = {};
export default class Container extends Component {
   static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}
constructor(props) {
    super(props)
    this.state = {
      times :0
     
    }
  }
 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

 setTime(){

}
getProgress(e){
        this.setState({
            times: e.currentTime,
           
        })
        GLOBAL.time = this.state.times;
    }





  render() {

    return (
      <View style={styles.container}>
    
      <View style={{ width: window.width, height: window.height, flexDirection: 'row' }}>
        <Video  
          source={require('./corporate.mp4')}
          ref={(ref) => {
         this.player = ref
       }} 
          rate={1.0}
          volume={1.0}
          onLoad={() => {
          
                          this.player.seek(GLOBAL.time);
                         
                          }} 
          muted={false}
         onProgress={ e => this.getProgress(e) }
          repeat
          resizeMode={"cover"}
       
         
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
    width :  window.width,
    height :  window.height,
  },
  content: {
    flex: 1,
    marginLeft: -window.width,
    alignSelf: 'auto' ,
    height: window.height,
    width : window.width,
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
      width :  window.width,
      textAlign:'center'
  },
});
