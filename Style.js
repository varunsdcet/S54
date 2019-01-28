import {StyleSheet, Platform,Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default styles = StyleSheet.create({
  
    container: {
        flex: 1,
       
     
    },
       loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },

   backGroundImage : {
     width : window.width,
     height :window.height,
     flexDirection: 'row'
     
    },
 otpImage: {
         width: 100,
         height: 100,
         marginLeft : 40 ,
         marginTop : 90,

    },

    containers: {
        flex: 1,
        
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