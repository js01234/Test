import React, { Component } from 'react';
import { AsyncStorage, Text, View, ImageBackground, Image, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import VIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons'
import { ActivityIndicator } from 'react-native-paper';


class ProjectDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cloud: true,
            device: false,
            projectsData: [],

            prjId: 1,
            indicatorVisible: true,
            TicketsData: [],
            DrawingData: [],
            CloudProject: [],
        };
        // this._retrieveData()
        this.onLogin();
        this.handlerButtonOnClick1 = this.handlerButtonOnClick1.bind(this);
        this.handlerButtonOnClick2 = this.handlerButtonOnClick2.bind(this);
    }







    // _retrieveData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('Hello');
    //         if (value !== null) {
    //             // We have data!!
    //             this.setState({ userid: value })
    //             console.log(" onretrieveing value:-" + value)
    //             // this.setState({value})
    //             this.onLogin();
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         // Error retrieving data
    //     }
    // }




    onLogin = () => {
        console.log("Login Working")
        var params = {
            "userId": 76,
        };
        console.log("onlogin userid:-" + this.state.userid)
        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        var request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        };

        fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetProjects', request)
            .then((response) =>
                this.myfun(response.json(), response))
            .catch((error) => {
                console.error(error, 'error');
            });
    }

    myfun = (res, scndres) => {
        res.then((result) => {
            console.log('ews', result)
            this.setState({
                projectsData: result.projects,
                indicatorVisible: false
            })
            // this._storeData();
        })
    }

    // _storeData = async () => {
    //     console.log('Updating Async storage in home screen')
    //     const userId = JSON.stringify(this.state.projectsData);
    //     try {
    //         await AsyncStorage.setItem('Projects', userId);
    //         // Alert.alert('data saved')
    //     }
    //     catch (error) {
    //         console.log('error')
    //         // Error saving data
    //     }
    // }








    handlerButtonOnClick1() {
        this.setState({
            device: true,
            cloud: false,
        });
    }
    handlerButtonOnClick2() {
        this.setState({
            cloud: true,
            device: false,
        });
    }

    clearAsyncStorage = async () => {
        AsyncStorage.clear();
        console.log('*****************Async Storage cleared!!!!!')
    }


















    _flatlistItemClick = (item) => {

        this.setState({
            indicatorVisible: true,
            prjId: item.projectId,
            CloudProject: [...this.state.CloudProject, item]
        })
        const key = 'key' + this.state.prjId
        const CloudData = this.state.CloudProject;
        try {
            AsyncStorage.setItem(key, JSON.stringify(CloudData))
            AsyncStorage.setItem('prjId', this.state.prjId);
        }
        catch (error) {
            console.log('error' + error)

        }
        this._retrieveDatainhomeScreen1()
    }


    _retrieveDatainhomeScreen1 = async () => {
        const key = 'key' + this.state.prjId
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // We have data!!
                let d = JSON.parse(value)
            }
        } catch (error) {
            console.log("error" + error)
        }
        this._retrieveDatainhomeScreen12()
    }



    _retrieveDatainhomeScreen12 = async () => {
        try {
            const value = await AsyncStorage.getItem('prjId');
            if (value !== null) {

            }
        } catch (error) {
            console.log("error" + error)
        }
        this.getWCandD()
    }











    getWCandD = () => {
        console.log("get WCandD Working")
        var params = {
            "projectId": this.state.prjId,
            "lastRowId": 1,
        };
        console.log("prj= " + this.state.prjId)
        var formData = new FormData();

        for (var k in params) {
            formData.append(k, params[k]);
        }

        var request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        };

        fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetTicketsList', request)
            .then((response) =>
                this.myfun1(response.json(), response))
            .catch((error) => {
                console.error(error, 'error');
            });
        // this.setState({ indicatorVisible: false })
    }


    myfun1 = (res, scndres) => {
        res.then((result) => {
            console.log('ews', result)
            if (result.Status == 1) {
                this.setState({
                    TicketsData: result.tickets,
                    DrawingData: result.drawingList,
                })
                this._storeDataofWCScreen()
            }
            else {
                Alert.alert('No Data Found')

            }

        })
    }

    _storeDataofWCScreen = async () => {


        const tickets = JSON.stringify(this.state.TicketsData);
        try {
            await AsyncStorage.setItem('Ticket', tickets);
            console.log('Data Saved in Async for Wc Screen')
            // Alert.alert('data saved')
        }
        catch (error) {
            console.log('error   ' + error)
            // Error saving data
        }
        this._storeDataofDrawingScreen()
    }

    _storeDataofDrawingScreen = async () => {

        const drawing = JSON.stringify(this.state.DrawingData);
        try {
            await AsyncStorage.setItem('Drawing', drawing);
            console.log('Data Saved in Async storage for Drawing Screen')
            //  Alert.alert('data saved')
        }
        catch (error) {
            console.log('error   ' + error)
            // Error saving data
        }

        this.setState({ indicatorVisible: false })
        this.props.Navigation.navigate('work_screen')

    }













    render() {
        const { indicatorVisible, cloud, device } = this.state;
        var _style1, _style2;
        if (device == true && cloud == false) {
            _style1 = { backgroundColor: "#feba00", borderRadius: 15 };
            _style2 = {}
        }
        else {
            _style1 = {};
            _style2 = { backgroundColor: "#feba00", borderRadius: 15 }
        }


        if (indicatorVisible == false && cloud == true) {

            return (
                <View style={{ flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 1, }}>
                            <Text onPress={this.clearAsyncStorage} style={{ color: 'black', fontSize: 15, padding: 10, marginLeft: 11 }}>Projects</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ padding: 10, marginLeft: 30, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick1}>
                                    <View style={[styles.button, _style1,]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 3 }}>Device</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ padding: 11, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick2}>
                                    <View style={[styles.button, _style2]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 4 }}>Cloud</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                    <View style={{ height: '70.5%' }}>
                        <FlatList
                            data={this.state.projectsData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>

                                <View style={styles.container}>

                                    <TouchableOpacity onPress={() => this._flatlistItemClick(item)}>
                                        <View>
                                            <ImageBackground style={styles.imagestyle}>
                                                <IIcon
                                                    name='md-download'
                                                    size={40}
                                                    color='black'
                                                />

                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{
                                            marginLeft: 10,
                                            marginTop: 5,
                                            fontSize: 18,
                                            color: 'black',
                                            marginBottom: 2

                                        }}>{item.name}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            style={{ marginLeft: 10, marginTop: 1, marginLeft: 10, fontSize: 9, color: 'black' }}>{item.description}
                                        </Text>
                                    </View>
                                </View>

                            } />
                    </View>
                </View>

            )
        }
        else if (indicatorVisible == false && cloud == false) {
            return (

                <View style={{ flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 1, }}>
                            <Text style={{ color: 'black', fontSize: 15, padding: 10, marginLeft: 11 }}>Projects</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ padding: 10, marginLeft: 30, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick1}>
                                    <View style={[styles.button, _style1,]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 3 }}>Device</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ padding: 11, }}>
                                <TouchableOpacity onPress={this.handlerButtonOnClick2}>
                                    <View style={[styles.button, _style2]}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 13, marginBottom: 4 }}>Cloud</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>




                    <View style={{ height: '70.5%' }}>
                        <FlatList
                            data={this.state.CloudProject}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>

                                <View style={styles.container}>

                                    <TouchableOpacity onPress={() => this._flatlistItemClick(item)}>
                                        <View>
                                            <ImageBackground style={styles.imagestyle}>
                                                <VIcon name='check' size={30} color='green' />
                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: 'column', flex: 1 }}>
                                        <Text style={{
                                            marginLeft: 10,
                                            marginTop: 5,
                                            fontSize: 18,
                                            color: 'black',
                                            marginBottom: 2

                                        }}>{item.name}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            style={{ marginLeft: 10, marginTop: 1, marginLeft: 10, fontSize: 9, color: 'black' }}>{item.description}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            style={{ marginLeft: 10, marginTop: 1, marginLeft: 10, fontSize: 9, color: 'black' }}>CreateDate: {item.createDate}
                                        </Text>
                                    </View>
                                </View>

                            } />
                    </View>
                </View>

            )
        }

        else {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <ActivityIndicator size={35} animating={true} color='#feba00' />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderRadius: 10,
        borderColor: '#f3e5bf',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f3e5bf',
        flexDirection: 'row'
    },
    imagestyle: {
        flex: 0.5,
        height: 80,
        width: 80,
        backgroundColor: '#feba00',
        borderWidth: 10,
        borderRadius: 10,
        borderColor: '#feba00',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        height: 30,
        width: 50,
    },
});

export default ProjectDesign;
























// _flatlistItemClick = (item) => {
//     this.setState({
//         indicatorVisible: true,
//         prjId: item.projectId,
//         CloudProject: [...this.state.CloudProject, item]
//     })
//     const Key = this.state.prjId+'';
//     const ClousData = this.state.CloudProject;
//     // this.setState({prjId:item.projectId})
//     // const userId = item.projectId;
//     // const description = item.description;
//     // const createDate = item.createDate;
//     try {
//         AsyncStorage.setItem(Key, JSON.stringify(ClousData))
//          AsyncStorage.setItem('prjId', Key);
//         // AsyncStorage.setItem('descp', description);
//         // AsyncStorage.setItem('creDate', createDate);
//         // Alert.alert(userId)
//         // Alert.alert('data saved')
//         console.log(Key)
//     }
//     catch (error) {
//         console.log('error')
//         // Error saving data
//     }
//     this._retrieveDatainhomeScreen1()
//     // this.props.Navigation.navigate('work_screen')
// }


// _retrieveDatainhomeScreen1 = async () => {
//     console.log("Retrieveing in Work Categity Screen")
//     const Key = this.state.prjId='';
//     try {
//         const value = await AsyncStorage.getItem(Key);
//         if (value !== null) {
//             // We have data!!
//             let d = JSON.parse(value)
//             console.log("onretrieveing value:-" + d)
//         }
//     } catch (error) {
//         console.log("error" + error)
//     }
// this.setState({indicatorVisible:false})
// }















































    // _retrieveDatainhomeScreen12 = async () => {
    //     console.log("Retrieveing in Work Categity Screen")
    //     try {
    //         const value = await AsyncStorage.getItem('descp');
    //         if (value !== null) {
    //             // We have data!!
    //             this.setState({ description: value })
    //             console.log("onretrieveing value:-" + value)
    //         }
    //     } catch (error) {
    //         console.log("error" + error)
    //     }
    //     this._retrieveDatainhomeScreen123()
    // }

    // _retrieveDatainhomeScreen123 = async () => {
    //     console.log("Retrieveing in Work Categity Screen")
    //     try {
    //         const value = await AsyncStorage.getItem('creDate');
    //         if (value !== null) {
    //             // We have data!!
    //             this.setState({ createDate: value })
    //             console.log("onretrieveing value:-" + value)
    //         }
    //     } catch (error) {
    //         console.log("error" + error)
    //     }
    //     this.setState({ CloudProject: [...this.state.CloudProject, { key: this.state.prjId, description: this.state.description, createDate: this.state.createDate }], i: this.state.i + 1 })
    //     this._storeDataCloudProject()
    // }


































    // _storeDataCloudProject = async () => {
    //     let myArray = this.state.CloudProject
    //     console.log("Storing.....................")
    //     try {
    //         await AsyncStorage.setItem('Key1', JSON.stringify(myArray));
    //         console.log("data saved in async storage")
    //     } catch (error) {
    //         console.log("error:-" + error)
    //         // Error saving data
    //     }
    //     console.log("hahahahahahahaha     key===" + this.state.CloudProject[this.state.i].key + '   Description   ====' + this.state.CloudProject[this.state.i].description + '   createDate   ====' + this.state.CloudProject[this.state.i].createDate)
    //     this.getWCandD();
    // };








    // getWCandD = () => {
    //     console.log("get WCandD Working")
    //     var params = {
    //         "projectId": this.state.prjId,
    //         "lastRowId": 1,
    //     };
    //     console.log("prj= " + this.state.prjId)
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
    //             this.myfun1(response.json(), response))
    //         .catch((error) => {
    //             console.error(error, 'error');
    //         });
    // }


    // myfun1 = (res, scndres) => {
    //     res.then((result) => {
    //         console.log('ews', result)
    //         if (result.Status == 1) {
    //             this.setState({
    //                 TicketsData: result.tickets,
    //                 DrawingData: result.drawingList,
    //             })
    //             this._storeDataofWCScreen()
    //         }
    //         else {
    //             Alert.alert('No Data Found')
    //             this.setState({ indicatorVisible: false })
    //         }

    //     })
    // }















    // _storeDataofWCScreen = async () => {


    //     const tickets = JSON.stringify(this.state.TicketsData);
    //     try {
    //         await AsyncStorage.setItem('Ticket', tickets);
    //         console.log('Data Saved in Async for Wc Screen')
    //         // Alert.alert('data saved')
    //     }
    //     catch (error) {
    //         console.log('error   ' + error)
    //         // Error saving data
    //     }
    //     this._storeDataofDrawingScreen()
    // }

    // _storeDataofDrawingScreen = async () => {

    //     const drawing = JSON.stringify(this.state.DrawingData);
    //     try {
    //         await AsyncStorage.setItem('Drawing', drawing);
    //         console.log('Data Saved in Async storage for Drawing Screen')
    //         //  Alert.alert('data saved')
    //     }
    //     catch (error) {
    //         console.log('error   ' + error)
    //         // Error saving data
    //     }

    //     this.setState({ indicatorVisible: false })


    // }










