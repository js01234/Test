import React, { Component } from 'react';
import {  View, TouchableOpacity, Text, TextInput, StatusBar, Image, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Flatlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Key:'',
            data: '',
            dataDrawingList: [],
            ticket: [],
            indicatorVisible: true,
            resultFound: false,
        }
        console.log("Work Categity Screen")
        this._retrieveDatainWCScreen()


    }
    _retrieveDatainWCScreen = async () => {
        try {
            const value = await AsyncStorage.getItem('TicketId');
            if (value !== null) {
                 this.setState({Key:value})
                 console.log("WorkCategory Screen Retrieveing Value====="+value)
            }
        } catch (error) {
            console.log("error" + error)
        }
        this._retrieveData()
    }

    _retrieveData = async () => {
        console.log("Retrieveing in Work Categity Screen")
        try {
            const value = await AsyncStorage.getItem(this.state.Key)
            if (value !== null) {
                 let d=JSON.parse(value)
                // We have data!!
                this.setState({ ticket: d})
            }
        } catch (error) {
            Alert.alert("error")
            console.log("error" + error)
            // Error retrieving data
        }
    }







    getListViewItem = (item) => {
        Alert.alert(item.key);
    }


    render() {
        // const { indicatorVisible, resultFound } = this.state;
        // if (indicatorVisible == false && resultFound == true) {
            return (
            // <View style={{width:'100%',height:'100%',backgroundColor:'teal'}}></View>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.ticket}
                        keyExtractor={(item) => item.ticketId}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.Navigation.navigate('add_Project')}>

                                <View style={{ flexDirection: 'row', }}>


                                    <View style={styles.flatlist_left_image}>
                                        <TouchableOpacity onPress={() => this.props.Navigation.navigate('add_Project')}>
                                            <Image style={styles.tab_icon} source={require('../../assets/icons/circular-shape-silhouette.png')}></Image>
                                            <Text style={{ fontSize: 11, color: 'black' }}>21xxx</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.item}>
                                        <Text style={styles.title}>{item.title}</Text>

                                        <Text numberOfLines={3}
                                            ellipsizeMode='tail' style={{ fontSize: 10, width: 100, }}>{item.description}</Text>
                                    </View>

                                    <Image source={{ uri: item.thumbnailImage }} style={styles.flatlist_right_image}></Image>

                                </View></TouchableOpacity>}
                    />
                </View>
            )
        // }
        // else if (indicatorVisible == false && resultFound == false) {
        //     return (
        //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        //             <Text style={{ fontSize: 18 }}>Empty Project</Text>
        //         </View>
        //     )
        // }
        // else {
        //     return (
        //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        //             <ActivityIndicator size={35} animating={true} color='#feba00' />
        //         </View>
        //     )
        // }
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 9,
        width: '90%',
        alignSelf: "center",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 90,
        flex: 5,
        flexDirection: 'column',
    },
    title: {
        marginTop: 3,
        fontSize: 15,
        color: 'black',

    },
    tab_icon: {
        alignSelf: 'center',
        width: 20,
        height: 20,
    },
    tab_icon_red: {
        width: 25,
        height: 25,
    },
    flatlist_right_image: {
        height: 55,
        flex: 1.6,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    flatlist_left_image: {
        borderRadius: 5,
        height: 70,
        backgroundColor: '#ced9d9',
        flex: 2,
        marginLeft: 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
























































































































































































// onLogin = () => {

//     var params = {
//         "projectId": this.state.prjId,
//         "lastRowId": 1,
//     };

//     var formData = new FormData();

//     for (var k in params) {
//         formData.append(k, params[k]);
//     }

//     var request = {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'multipart/form-data',
//         },
//         body: formData
//     };

//     fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetTicketsList', request)
//         .then((response) =>
//             this.myfun(response.json(), response))
//         .catch((error) => {
//             console.error(error, 'error');
//         });
// }


// myfun = (res, scndres) => {
//     res.then((result) => {
//         console.log('ews', result)
//         if (result.Status == 1) {
//             this.setState({
//                 dataDrawingList: result.tickets,
//                 indicatorVisible: false,
//                 resultFound: true
//             })
//         }
//         else {
//             this.setState({
//                 indicatorVisible: false,
//                 resultFound: false
//             })
//         }
//     })
// }