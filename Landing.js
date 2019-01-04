import React, {Component} from 'react';
import { StyleSheet, Text, View, Button ,Alert,Dimensions ,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import TimeLine from './TimeLine.js';
const window = Dimensions.get('window');

type Props = {};
export default class Landing extends Component {
   static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}

constructor(props) {
    super(props)
    this.state = {
      isVideoPlaying :true
     
    }
  }


 resPress = (resId,resName) => {
  this.setState({isVideoPlaying:false})
  this.props.navigation.navigate('Signup')
  
  }


  render() {
    return (
       
      <View style={styles.container}>
    
       <TouchableOpacity 

        onPress={() => this.resPress('', '')}
          >
      <View style={{ width: window.width, height: window.height/2, flexDirection: 'row' }}>
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
          <Text style={styles.text}>CLUB</Text>
       </View>
        </View>
      </TouchableOpacity>
       <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Home')}>
        <View style={{ width: 375, height: window.height/2, flexDirection: 'row' }}>
        {this.state.isVideoPlaying && (
        <Video
         source={require('./corporate.mp4')}
          rate={1.0}
          volume={1.0}
          muted={true}
          resizeMode={"cover"}
          
          style={styles.video}
        />
        )}
        <View style={styles.content}>
          <Text style={styles.text}>ROOF TOP</Text>
       </View>
        </View>
       </TouchableOpacity>
      
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
    height :  window.height/2,
  },
  content: {
    flex: 1,
    marginLeft: -window.width,
    alignSelf: 'auto' ,
    height: window.height/2,
    width : window.width,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
