import React, {Component} from 'react';
import {Platform, StatusBar,StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity} from 'react-native';

class ScreenThree extends Component {

    render(){
        return (
            <View style={styles.main_View}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
                <View style={{height:210,width:270,marginTop:50}}><Image 
                source={require('../../assets/WellcomeAssets/Layer.png')}
                style={{height:'100%',width:'100%',}}/></View>
                <Text style={{fontSize:25,color:'#262c33',marginTop:20,}}>
                    Connecting the Field
                </Text>
                <Text
                style={{fontSize:12,color:'#262c33',marginTop:10}}>
                We connect the field and the office with a single
                </Text>
                <Text
                style={{fontSize:12,color:'#262c33',}}>
                source of truth accessible  
              
                </Text>
            
            </View>
        );
    }
}

const styles=StyleSheet.create({
    main_View:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
    },
})
export default ScreenThree;