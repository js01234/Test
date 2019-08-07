import React, { Component } from 'react';
import { View,Platform, Text, StyleSheet, Image,TouchableOpacity ,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Header extends Component {

    render() {
        return (
<View style={{marginTop:23,
                flexDirection: 'row', width: '100%', height: Platform.OS === 'ios' ? '10%' : '8%', borderBottomWidth: 0.7, borderBottomColor: 'grey'
                , shadowColor: '#000',
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.3,
                // elevation: 2,
            }}>

                <TouchableOpacity 
                onPress={ () => this.props.Navigation.navigate('work_screen')}
                style={{marginLeft:'6%',marginTop:Platform.OS === 'ios' ? '5%' : '0%', flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Icon name='arrowleft' size={24} color='black' />
                </TouchableOpacity>

                <View style={{marginTop:Platform.OS === 'ios' ? '5%' : '0%',paddingRight:'15%', flex: 0.9, justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#262c33' }}>Drawing</Text>
                </View>


            </View>

            // <View style={{
            //     flexDirection: 'row', width: '100%', height: '8.5%', borderBottomWidth: 0.7, borderBottomColor: 'grey'
            //     , shadowColor: '#000',
            //     shadowOffset: { width: 0, height: 5 },
            //     shadowOpacity: 0.5,
            //     elevation: 2,
            // }}>

            //     <TouchableOpacity onPress={()=>{alert('Back Pressed')}}
            //         style={{ marginLeft: '6%', marginTop: '5%', flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            //         <Icon name='arrowleft' size={24} color='black' />
            //     </TouchableOpacity>

            //     <View style={{ marginTop: '5%', paddingRight: '15%', flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
            //         <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#262c33' }}>Drawing</Text>
            //     </View>

            //     {/* <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', }}>
            //         <Icon name='arrowleft' size={24} color='black' />
            //     </View>

            //     <View style={{ flex: 1, justifyContent: 'center', paddingLeft: '27%' }}>
            //         <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#262c33' }}>Drawing</Text>
            //     </View> */}


            // </View>
        );
    }
}
