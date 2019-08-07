import React, {Component} from 'react';
import {Platform,StatusBar, StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity} from 'react-native';

class ScreenTwo extends Component {

    render(){
        return (
            <View style={styles.main_View}>
<StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
                <Image 
                source={require('../../assets/WellcomeAssets/task.png')}
                style={{height:170,width:300,marginTop:50,alignSelf:'center',}}/> 

                <Text style={{fontSize:25,color:'#262c33',marginTop:30,}}>
                    Task Management
                </Text> 

               <Text
                style={{fontSize:13,color:'#262c33',}}>
                You can now create and assign Construction
                </Text>
                
                <Text
                style={{fontSize:13,color:'#262c33',}}>
                Activities, Inspections and Punch  
              
                </Text>
                <Text
                style={{fontSize:13,color:'#262c33',}}>
                items in seconds.
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
export default ScreenTwo;