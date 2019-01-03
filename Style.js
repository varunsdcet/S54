import {StyleSheet, Platform,Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default styles = StyleSheet.create({
  
    container: {
        flex: 1,
       
     
    },

   backGroundImage : {
     width : window.width,
     height :window.height,
     flexDirection: 'row'
     
    },

   
    textWidth : {
     width : window.width,
     height :60,
     marginTop :  window.height/4 - 30,
     color : 'white',
     fontSize : 40,
     fontWeight: 'bold',
     textAlign: 'center'
    },
    landing: {
        width : window.width,
        height :window.height/2,
        flexDirection: 'row'
     
    },
     clubImage: {
        width : window.width,
        height :window.height/2,
        position: 'absolute',
     
    },
   

    logoImage: {
        marginLeft : window.width/2 - 65,
        marginTop : 60,
        width : 130,
        height :120,
        position: 'absolute',
     
    },

     loginImage: {
        width : window.width,
        height :window.height,
        position: 'absolute',
     
    },

    buttunClub :{
    width : window.width,
    height :window.height/2,
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        textAlign:'center',
    },

    upperImage :{
    flex: 1,
    alignSelf: 'auto'
    },


});