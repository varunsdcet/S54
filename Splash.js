import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Dimensions ,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const window = Dimensions.get('window');
import TimeLine from './TimeLine.js';
type Props = {};
export default class Splash extends Component {
   static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}

 changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }
 constructor(props) {
    super(props)
    this.state = {
      isVideoPlaying :true
     
    }
  }

  componentDidMount(){
  
 setTimeout(() => {
  this.setState({isVideoPlaying:false})
   this.props.navigation.navigate('Landing')
}, 5000);
}

  render() {
    return (
      <View style={styles.container}>
    
      <View style={{ width: window.width, height: window.height, flexDirection: 'row' }}>
      {this.state.isVideoPlaying && (
        <Video
          source={require('./corporate.mp4')}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          
          style={styles.video}
        />
        )}
        
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
