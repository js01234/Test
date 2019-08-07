import React, { Component } from 'react'
import {  Text, StatusBar, View, Image, StyleSheet, Alert, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage';
export default class Flatlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Key: '',
            data: '',
            dataDrawingList: [],
            prjId: "",
            drawing: [],
        }
        this._retrieveDatainDrawingScreen()
        console.log('DrawingScreen')
    }
    _retrieveDatainDrawingScreen = async () => {
        try {
            const value = await AsyncStorage.getItem('DrawingId');
            if (value !== null) {
                this.setState({ Key: value })
                console.log("darawing screen retrieveing value=====" + value)
            }
        } catch (error) {
            console.log("error" + error)
        }
        this._retrieveData()
    }




    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem(this.state.Key)
            if (value !== null) {
                let d = JSON.parse(value)
                console.log(value)
                // We have data!!
                this.setState({ drawing: d })
            }
        } catch (error) {
            Alert.alert("error")
            console.log("error" + error)
            // Error retrieving data
        }
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 0.8,
                    width: "100%",
                    backgroundColor: '#DBDAD9',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    elevation: 2,
                }}
            />
        );
    };







    render() {

        return (

            <FlatList showsVerticalScrollIndicator={false}
                data={this.state.drawing}
                keyExtractor={(item) => item.drawingId}
                renderItem={({ item }) =>
                    <View style={{
                        flexDirection: 'row', padding: 5,
                    }}>

                        <View style={styles.flatlist_left_image}>
                            <Text style={{ color: 'grey' }}>{item.numberofTickets}</Text>
                        </View>

                        <View style={styles.item}>
                            <Text style={styles.title}>Name</Text>
                            <Text style={{ fontSize: 13, width: 100, }}>{item.name}</Text>
                        </View>

                        <View style={styles.flatlist_right_image}>
                            <Text style={{ color: 'white' }}>DRAWING</Text>
                        </View>

                        <View style={{ marginLeft: '-1%', height: 30, flex: 1, alignSelf: 'center', }}>
                            <Icon name='keyboard-arrow-right' size={25}></Icon>
                        </View>
                    </View>}
                ItemSeparatorComponent={this.renderSeparator}
            />
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 8,
        width: '100%',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 65,
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    title: {
        fontSize: 17,
        padding: 2,
    },
    tab_icon: {
        width: 20,
        height: 20,
    },
    tab_icon_red: {
        width: 25,
        height: 25,
    },
    flatlist_right_image: {
        height: 55,
        flex: 3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#feba00',
    },
    flatlist_left_image: {
        borderRadius: 5,
        height: 60,
        backgroundColor: '#f3e5bf',
        flex: 2,
        marginLeft: 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})


































































































































































// // _retrieveData = async () => {
//     //     console.log("Retrieveing in Drawing Screen")
//     //     try {
//     //         const value = await AsyncStorage.getItem('prjId');
//     //         if (value !== null) {
//     //             // We have data!!
//     //             this.setState({ prjId: value })
//     //             console.log("onretrieveing value:-" + value)
//     //             // Alert.alert(value)
//     //             // this.setState({value})
//     //             this.onLogin()
//     //         }
//     //     } catch (error) {
//     //         Alert.alert("error  =" + error)
//     //         console.log("error" + error)
//     //         // Error retrieving data
//     //     }
//     // }
//     onLogin = () => {

//         var params = {
//             "projectId": this.state.prjId,
//             "lastRowId": 1,
//         };

//         var formData = new FormData();

//         for (var k in params) {
//             formData.append(k, params[k]);
//         }

//         var request = {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//             },
//             body: formData
//         };

//         fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetTicketsList', request)
//             .then((response) =>
//                 this.myfun(response.json(), response))
//             .catch((error) => {
//                 console.error(error, 'error');
//             });
//     }


//     myfun = (res, scndres) => {
//         res.then((result) => {
//             console.log('ews', result)
//             this.setState({
//                 dataDrawingList: result.drawingList,
//                 indicatorVisible: false,
//             })

//         })
//     }