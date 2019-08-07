import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import HomeScreen from './HomeScreenn/mainscreen'
import Navigation from './Navigation'
export default class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //defauilt value of the date time
  //     date: '',
  //     day: '',
  //     time: '',
  //     avatarSource: '',
  //     imgName: '',
  //     type: '',
  //   };
  // }
  // componentDidMount() {
  //   var that = this;
  //   var date = new Date().getDate(); //Current Date
  //   var month = new Date().getMonth() + 1; //Current Month
  //   var year = new Date().getFullYear(); //Current Year
  //   var hours = new Date().getHours(); //Current Hours
  //   var min = new Date().getMinutes(); //Current Minutes
  //   var sec = new Date().getSeconds(); //Current Seconds
  //   var today = new Date().getDay();//Current Day
  //   var weekday = new Array(7);
  //   weekday[0] = "Sun";
  //   weekday[1] = "Mon";
  //   weekday[2] = "Tue";
  //   weekday[3] = "Wed";
  //   weekday[4] = "Thu";
  //   weekday[5] = "Fri";
  //   weekday[6] = "Sat";

  //   that.setState({
  //     //Setting the value of the date time
  //     date:
  //       date + '/' + month + '/' + year,
  //     day: weekday[today],
  //     time: hours + ':' + min + ':' + sec,
  //   });
  // }

  // chooseFile = () => {
  //   console.log | ("choose file function working")
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = { uri: response.uri };

  //       // You can also display the image using data:
  //       // const source = { uri: 'data:image/jpeg;base64,' + response.data };

  //       this.setState({
  //         avatarSource: response.uri,
  //         imgName: response.fileName,
  //         type: response.type
  //       });
  //       console.log(this.state.avatarSource)
  //       console.log('filename      ' + this.state.imgName + ',  type:  ' + this.state.type)

  //     }
  //   });
  // };





  // onLogin = () => {
  //   console.log("onLogin function working")
  //   // var params = {
  //   //   "image": this.state.avatarSource,
  //   //   "name": 'hlo',
  //   //   "userId": '76',
  //   //   "projectId": '2',
  //   //   "ticketId": '4',
  //   //   "commentMessage": 'thiss iss aa samplee commentt,samplee commentt, okooookk.',
  //   //   "commentDate": this.state.date,
  //   //   "commentDay": this.state.day,
  //   //   "commentTime": this.state.time,
  //   // };




  //   var formData = new FormData();

  //   formData.append('image`', {
  //     uri: this.state.avatarSource,
  //     type: this.state.imgName,
  //     name: this.state.type,
  //   });
  //   formData.append("name", 'hlo')
  //   formData.append("userId", '76')
  //   formData.append("projectId", '2')
  //   formData.append("ticketId", '4')
  //   formData.append("commentMessage", 'thiss iss aa samplee commentt,samplee commentt, okooookk')
  //   formData.append("commentDate", this.state.date)
  //   formData.append("commentDay", this.state.day)
  //   formData.append("commentTime", this.state.time)


  //   var request = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'multipart/form-data',

  //     },
  //     body: formData
  //   };

  //   fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/Comment', request)
  //     .then((response) =>
  //       this.myfun(response.json(), response))
  //     .catch((error) => {
  //       console.error('error =' + error);
  //     });
  // }

  // myfun = (res, scndres) => {
  //   res.then((result) => {
  //     console.log('ews', result)
  //   })
  // }


  render() {
    return (
      <Navigation />
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text style={{ fontSize: 20, }}>Current Time:-</Text>
      //   <Text style={{ fontSize: 20, marginTop: 5, color: 'red', }}>{this.state.date}</Text>

      //   <Text style={{ fontSize: 20, marginTop: 10, }}> Current Time:-</Text>
      //   <Text style={{ fontSize: 20, marginTop: 5, color: 'blue', }}>{this.state.time} </Text>

      //   <Text style={{ fontSize: 20, marginTop: 10, }}>Current Day:-</Text>
      //   <Text style={{ fontSize: 20, marginTop: 5, color: 'teal', }}> {this.state.day}</Text>
      //   <Text onPress={this.chooseFile} style={{ marginTop: 20 }}>Choose File</Text>
      //   <Image source={{ uri: this.state.avatarSource }} style={{ marginBottom: 20, marginTop: 20, width: 200, height: 200, }} ></Image>
      //   <Text onPress={this.onLogin}>Login</Text>
      // </View>
    );
  }
}
// More info on all the options is below in the API Reference... just some common use cases shown here
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };


// data: "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…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"
// fileName: "1539600782311.jpg"
// fileSize: 14784
// height: 240
// isVertical: true
// originalRotatio: 0
// path: "/storage/emulated/0/Cabyto/1539600782311.jpg"
// type: "image/jpeg"
// uri: "content://media/external/images/media/85"
// width: 135













// import React, { Component } from 'react';
// import { View, Text, Image,AsyncStorage ,StyleSheet ,ToastAndroid} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// // var ImagePicker = require('react-native-image-picker');


// export default class App extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       avatarSource: '',

//     }
//   }


//   chooseFile = () => {

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           avatarSource: source,
//         });
//        console.log(this.state.avatarSource)
//       }
//     });


//   };




//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
//         <Text onPress={this.chooseFile}> App </Text>
//         <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   uploadAvatar: {
//     width: 300,
//     height: 300,
//   },
// })



// // More info on all the options is below in the API Reference... just some common use cases shown here
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };












// import React, { Component } from 'react';
// import { StyleSheet, View, Alert, Text } from 'react-native';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //defauilt value of the date time
//       date: '',
//       day: '',
//       time: '',
//     };
//   }
//   componentDidMount() {
//     var that = this;
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds
//     var today = new Date().getDay();
//     var weekday = new Array(7);
//     weekday[0] = "Sun";
//     weekday[1] = "Mon";
//     weekday[2] = "Tue";
//     weekday[3] = "Wed";
//     weekday[4] = "Thu";
//     weekday[5] = "Fri";
//     weekday[6] = "Sat";

//     that.setState({
//       //Setting the value of the date time
//       date:
//         date + '/' + month + '/' + year,
//       day: weekday[today],
//       time: hours + ':' + min + ':' + sec,
//     });
//   }
//   render() {
//     return (
//       <View
//         style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
//         <View style={{ width: '70%', height: '60%', backgroundColor: 'teal', flex: 0, justifyContent: 'center', alignItems: 'center', }}>

//           <Text style={{ fontSize: 20, color: 'white', }}>Current Time:-</Text>
//           <Text style={{ fontSize: 20, marginTop: 10, color: 'red', }}>{this.state.date}</Text>

//           <Text style={{ fontSize: 20, marginTop: 20, color: 'white', }}> Current Time:-</Text>
//           <Text style={{ fontSize: 20, marginTop: 10, color: 'blue', }}>{this.state.time} </Text>

//           <Text style={{ fontSize: 20, marginTop: 20, color: 'white', }}>Current Day:-</Text>
//           <Text style={{ fontSize: 20, marginTop: 10, color: 'yellow', }}> {this.state.day}</Text>

//         </View>
//       </View>
//     );
//   }
// }




































// import React, { Component } from "react";
// import { View, Text, Button, Alert, Platform } from "react-native";
// import NetInfo from "@react-native-community/netinfo";
// import SnackBar from 'react-native-snackbar-component'

// export default class componentName extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//     };
//   }

//   CheckConnectivity = () => {
//     // For Android devices
//     if (Platform.OS === "android") {
//       NetInfo.isConnected.fetch().then(isConnected => {
//         if (isConnected) {
//           this.setState({ text: 'you are online' })
//           // Alert.alert("You are online!");
//         } else {
//           this.setState({ text: 'you are offline' })
//           // Alert.alert("You are offline!");
//         }
//       });
//     } else {
//       // For iOS devices
//       NetInfo.isConnected.addEventListener(
//         "connectionChange",
//         this.handleFirstConnectivityChange
//       );
//     }
//   };

//   handleFirstConnectivityChange = isConnected => {
//     NetInfo.isConnected.removeEventListener(
//       "connectionChange",
//       this.handleFirstConnectivityChange
//     );

//     if (isConnected === false) {
//       Alert.alert("You are offline!");
//     } else {
//       Alert.alert("You are online!");
//     }
//   };

//   render() {
//     return (
//       <View>
//         <Button
//           onPress={() => this.CheckConnectivity()}
//           title="Check Internet Connectivity"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//         <Text style={{ marginTop: 100, fontSize: 25, alignSelf: 'center' }}>{this.state.text}</Text>
//         <SnackBar
//           visible={this.state.snackbarVisible}
//           textMessage="You are offline !" autoHidingTime={2000}
//           actionHandler={() => { console.log("snackbar button clicked!") }}
//           actionText="let's go" />
//       </View>
//     );
//   }
// }
































// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import NetInfo from "@react-native-community/netinfo";
// import SnackBar from 'react-native-snackbar-component'


// export default class App extends Component {

//   constructor() {

//     super();

//     this.state = {

//       connection_Status: "",

//       snackbarVisible: false,

//     }

//   }

//   componentDidMount() {

//     NetInfo.isConnected.addEventListener(
//       'connectionChange',
//       this._handleConnectivityChange

//     );

//     NetInfo.isConnected.fetch().done((isConnected) => {
//       if (isConnected == true) {
//         this.setState({ connection_Status: "Online", snackbarVisible: false })
//       }
//       else {
//         this.setState({ connection_Status: "Offline", snackbarVisible: true })
//       }

//     });
//   }


//   componentWillUnmount() {

//     NetInfo.isConnected.removeEventListener(
//       'connectionChange',
//       this._handleConnectivityChange
//     );
//   }

//   _handleConnectivityChange = (isConnected) => {

//     if (isConnected == true) {
//       this.setState({ connection_Status: "Online", snackbarVisible: true })

//     }
//     else {
//       this.setState({ connection_Status: "Offline", snackbarVisible: false })
//     }
//   };

//   render() {

//     return (

//       <View style={styles.MainContainer}>

//         <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}> You are {this.state.connection_Status} </Text>

//         <SnackBar
//           visible={this.state.snackbarVisible}
//           textMessage="You are offline !" autoHidingTime={2000}
//           actionHandler={() => { console.log("snackbar button clicked!") }}
//           actionText="let's go" />

//       </View>

//     );

//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     padding: 20
//   },

//   TextStyle: {
//     fontSize: 20,
//     textAlign: 'center',
//   }

// });












































// import React, { Component } from 'react';
// import { View, Text, Image,AsyncStorage StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// // var ImagePicker = require('react-native-image-picker');


// export default class App extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       avatarSource: '',

//     }
//   }


//   chooseFile = () => {

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           avatarSource: source,
//         });
//       }
//     });


//   };




//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
//         <Text onPress={this.chooseFile}> App </Text>
//         <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   uploadAvatar: {
//     width: 300,
//     height: 300,
//   },
// })



// // More info on all the options is below in the API Reference... just some common use cases shown here
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };















































// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {


//     }
//   }

//   componentDidMount = () => {

//     if (Platform.OS === 'ios') {
//       // console.log(" ios")
//       this.setState({ platform: 'ios' })
//     } else {
//       // console.log("android")
//       this.setState({ platform: 'android' })
//     }

//     publicIP()
//       .then(ip => {
//         // console.log(ip);
//         // '47.122.71.234'
//         this.setState({ ipAddress: ip })
//       })
//       .catch(error => {
//         console.log(error);
//         // 'Unable to get IP address.'
//       });
//   }



//   onLogin = () => {

//     const { inputEmail, inputPassword } = this.state;
//     const emailAddress = this.state.email;
//     const myPassWord = this.state.password;
//     if (emailAddress == "" && myPassWord == "") {
//       ToastAndroid.show('Please Fill Username and Password ', ToastAndroid.SHORT);
//     }
//     else if (!emailAddress == '' && myPassWord == '') {
//       ToastAndroid.show('Password Empty ', ToastAndroid.SHORT);
//     }
//     else if (emailAddress == '' && !myPassWord == '') {
//       ToastAndroid.show('Username Empty ', ToastAndroid.SHORT);
//     }
//     else if (myPassWord.length < 6) {
//       ToastAndroid.show('Passwor must be greater then 6 ', ToastAndroid.SHORT);
//     }
//     else if (emailAddress.length < 10) {
//       ToastAndroid.show('Email must be greater then 10 ', ToastAndroid.SHORT);
//     }

//     else {
//       var params = {
//         'userName': this.state.firstname,
//         'email': this.state.email,
//         'password': this.state.password,
//         'ipAddress': this.state.ipAddress,
//         'platform': this.state.platform,
//         'tokenFCM': ''

//       };

//       var formData = new FormData();

//       for (var k in params) {
//         formData.append(k, params[k]);
//       }

//       var request = {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'multipart/form-data',
//         },
//         body: formData
//       };

//       fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/UserRegistration', request)
//         .then((response) =>
//           this.myfun(response.json(), response))
//         .catch((error) => {
//           console.error(error, 'error');
//         });
//     }
//   }

//   myfun = (res, scndres) => {
//     res.then((result) => {
//       console.log('ews', result)
//     })
//   }

//   render() {
//     return (
//       <View>
//         <Text> App </Text>
//       </View>
//     );
//   }
// }

































































































// import React, { Component } from 'react'
// import { AsyncStorage, TouchableOpacity, FlatList, Text, View, Image, Alert } from 'react-native'
// import { Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/AntDesign'
// import Sign from './Sign'
// import OfflineNotice from './OfflineNotice';

// export default class App extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       data: '',
//       projectsData: [],
//       asyncdata: 'dfgvdf',
//     }
//     this.onLogin()
//     // this._storeData();
//     // this._retrieveData();
//   }


//   ItemSeparatorLine = () => {
//     return (
//       <View
//         style={{ height: 1, width: "100%", backgroundColor: "#111a0b", }}
//       />
//     );
//   }


//   onLogin = () => {

//     var params = {
//       "userId": '2',
//     };

//     var formData = new FormData();
//     for (var k in params) {
//       formData.append(k, params[k]);
//     }
//     var request = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData
//     };

//     fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetProjects', request)
//       .then((response) =>
//         this.myfun(response.json(), response))
//       .catch((error) => {
//         console.error(error, 'error');
//       });
//   }


//   myfun = (res, scndres) => {
//     res.then((result) => {
//       console.log('ews', result)
//       this.setState({
//         projectsData: result.projects,
//         asyncdata: result,
//       })

//       // Alert.alert(this.state.asyncdata.Response)
//     })
//     // this._.storeData()

//   }

//   _storeData = async () => {
//     // Alert.alert(this.state.asyncdata.Response)
//     const userId = this.state.asyncdata.Response;
//     try {
//       await AsyncStorage.setItem('Hello', userId);
//       Alert.alert('data saved')
//     }
//     catch (error) {
//       console.log('error')
//       // Error saving data
//     }
//     // this._retrieveData()
//   }

//   _retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('Hello');
//       if (value !== null) {
//         // We have data!!
//         Alert.alert(value);
//       }
//     } catch (error) {
//       console.log('error')
//       // Error retrieving data
//     }
//   }

//   render() {
//     return (
//       <View>

//         <FlatList
//           data={this.state.projectsData}
//           ItemSeparatorComponent={this.ItemSeparatorLine}

//           renderItem={({ item }) =>
//             <TouchableOpacity>
//               <View style={{ backgroundColor: 'pink' }}>

//                 <View
//                   style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 100, height: 100, marginTop: 50 }}>
//                   <Icon name='check' size={30} color='green'></Icon>
//                 </View>
//                 <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 18, }}>{item.name}</Text>

//                 <Button style={{ backgroundColor: 'green', marginTop: 30 }} onPress={() => this._storeData()}>Press Me</Button>
//               </View>
//             </TouchableOpacity>
//           }
//           keyExtractor={(item, index) => index}
//         />


//       </View>
//     )
//   }
// }










// import React, { Component } from 'react';
// import {AsyncStorage, View, Text } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//     this._storeData();
//     this._retrieveData();
//   }

//   _storeData = async () => {
//     const data='Stored Value'
//     try {
//       await AsyncStorage.setItem('Mykey', data);
//       console.log('saving data')
//     } catch (error) {
//       // Error saving data
//     }
//   };



//   _retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('Mykey');
//       if (value !== null) {
//         // We have data!!
//         console.log(value);
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };


//   render() {
//     return (
//       <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple' }}>
//         <Text style={{ color: 'white', fontSize: 40, fontWeight: '600' }}> Async Storage </Text>
//       </View>
//     );
//   }
// }































































// import React, { Component } from 'react'
// import { TouchableOpacity, FlatList, Text, View, Image, Alert } from 'react-native'
// import { Button } from 'react-native-paper';

// export default class App extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       data: '',
//       dataDrawingList: [],
//     }
//     this.onLogin()
//   }

//   ItemSeparatorLine = () => {
//     return (
//       <View
//         style={{ height: .5, width: "100%", backgroundColor: "#111a0b", }}
//       />
//     );
//   }


//   onLogin = () => {

//     var params = {
//       "projectId": 2,
//       "lastRowId": 1,
//     };

//     var formData = new FormData();

//     for (var k in params) {
//       formData.append(k, params[k]);
//     }

//     var request = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData
//     };

//     fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/GetTicketsList', request)
//       .then((response) =>
//         this.myfun(response.json(), response))
//       .catch((error) => {
//         console.error(error, 'error');
//       });
//   }


//   myfun = (res, scndres) => {
//     res.then((result) => {
//       console.log('ews', result)
//       this.setState({
//         dataDrawingList: result.tickets
//       })
//     })
//   }



//   render() {
//     return (
//       <View>
//         <FlatList
//           data={this.state.dataDrawingList}
//           ItemSeparatorComponent={this.ItemSeparatorLine}

//           renderItem={({ item }) =>
//             <TouchableOpacity>
//               <View style={{ backgroundColor: 'pink' }}>

//                 <Image
//                   source={{ uri: item.thumbnailImage }}
//                   style={{ alignSelf: 'center', width: 100, height: 100, marginTop: 50 }}></Image>
//                 <Text style={{marginTop: 20,alignSelf: 'center',fontSize:18,}}>{item.title6}</Text>

//                 <Button style={{ backgroundColor:'green',marginTop: 30 }} onPress={() => this.onLogin()}>Press Me</Button>
//               </View>
//             </TouchableOpacity>
//           }
//           keyExtractor={(item, index) => index}
//         />


//       </View>
//     )
//   }
// }













// import React, { Component } from 'react';
// import { DefaultTheme, TextInput, Provider as PaperProvider, Snackbar } from 'react-native-paper';
// import { ToastAndroid, Alert, Platform, ScrollView, StatusBar, Text, View, StyleSheet, Image, TouchableOpacity, } from 'react-native'
// import publicIP from 'react-native-public-ip';


// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#bfbfbf',
//     accent: '#bfbfbf',
//   }
// };

// export default class Login extends Component {
//   static navigationOptions = { header: null }

//   constructor(props) {
//     super(props);
//     this.state = {
//       platform: '',
//       ipAddress: 123,
//       email: '',
//       password: '',
//       visible: true
//     }
//   }

//   componentDidMount = () => {

//     if (Platform.OS === 'ios') {
//       // console.log(" ios")
//       this.setState({ platform: 'ios' })
//     } else {
//       // console.log("android")
//       this.setState({ platform: 'android' })
//     }

//     publicIP()
//       .then(ip => {
//         // console.log(ip);
//         // '47.122.71.234'
//         this.setState({ ipAddress: ip })
//       })
//       .catch(error => {
//         console.log(error);
//         // 'Unable to get IP address.'
//       });
//   }


//   onLogin = () => {


//     const { inputEmail, inputPassword } = this.state;
//     const emailAddress = this.state.email;
//     const myPassWord = this.state.password;
//     if (emailAddress == "" && myPassWord == "") {
//       ToastAndroid.show('Please Fill Username and Password ', ToastAndroid.SHORT);
//     }
//     else if (!emailAddress == '' && myPassWord == '') {
//       ToastAndroid.show('Password Empty ', ToastAndroid.SHORT);
//     }
//     else if (emailAddress == '' && !myPassWord == '') {
//       ToastAndroid.show('Username Empty ', ToastAndroid.SHORT);
//     }
//     else if (myPassWord.length < 6) {
//       ToastAndroid.show('Passwor must be greater then 6 ', ToastAndroid.SHORT);
//     }
//     else if (emailAddress.length < 10) {
//       ToastAndroid.show('Email must be greater then 10 ', ToastAndroid.SHORT);
//     }

//     else {
//       var params = {
//         'email': this.state.email,
//         'password': this.state.password,
//         'ipAddress': '123.123.123.12',
//         'platform': 'android',
//         'tokenFCM': ''

//       };

//       var formData = new FormData();

//       for (var k in params) {
//         formData.append(k, params[k]);
//       }

//       var request = {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'multipart/form-data',
//         },
//         body: formData
//       };

//       fetch('http://anythinginfotech.in/Gouravdata/Edcontrol/index.php/Login', request)
//         .then((response) =>
//           this.myfun(response.json(), response))
//         .catch((error) => {
//           console.error(error, 'error');
//         });
//     }
//   }
//   myfun = (res, scndres) => {
//     res.then((result) => {
//       console.log('ews', result)
//       ToastAndroid.show('Login Successful ', ToastAndroid.SHORT);
//     })


//   }

//   render() {
//     return (
//       <ScrollView>
//         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
//         <View style={styles.main_View}>
//           <View style={{ height: '29%', marginTop: Platform.OS == 'ios' ? '30%' : '16%' }}><Image style={styles.logo}></Image>

//             <Text style={styles.login}>LOG IN</Text></View>

//           <View style={{ height: '22%', marginTop: Platform.OS == 'ios' ? '10%' : '6%' }}><PaperProvider theme={theme}>

//             <TextInput
//               style={styles.input_View1}
//               selectionColor='black'
//               mode='outlined'
//               label='UserName/Email'
//               value={this.state.email}
//               onChangeText={email => this.setState({ email })} />
//           </PaperProvider>


//             <PaperProvider theme={theme}>
//               <TextInput style={styles.input_View2}
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Password'
//                 value={this.state.password}
//                 onChangeText={password => this.setState({ password })} />
//             </PaperProvider></View>

//           <View style={{ height: 200, marginTop: Platform.OS == 'ios' ? '10%' : '9%' }}>
//             <TouchableOpacity onPress={() => this.onLogin()}>
//               <Text style={styles.login_text}>Login</Text>
//             </TouchableOpacity>
//             <View style={styles.line} ></View>
//             <View style={{ marginTop: 35 }}>
//               <TouchableOpacity onPress={() => this.props.navigation.navigate('signUp')}>
//                 <Text style={styles.signup_text}>SignUp</Text>
//               </TouchableOpacity></View>
//           </View>

//           <View>
//           </View>

//         </View>
//       </ScrollView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   main_View: {
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     flexDirection: 'column',

//   },
//   logo: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'black',
//     borderRadius: 15,
//   },
//   login: {
//     borderBottomColor: 'black',
//     marginTop: 25,
//     fontSize: 30,
//     fontWeight: '400',
//     color: 'black'
//   },
//   input_View1: {
//     // marginTop: 25,
//     width: 280,
//     height: 59,
//   },
//   input_View2: {
//     marginTop: 2,
//     width: 280,
//     height: 59,
//   },
//   login_text: {
//     height: 50,
//     fontWeight: '300',
//     fontSize: 25,
//     backgroundColor: '#feba00',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     color: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 0.5 },
//     shadowOpacity: 0.5,
//     elevation: 3,
//   },
//   line: {
//     alignSelf: 'center',
//     borderWidth: 1,
//     marginTop: 35,
//     width: 200,
//     borderColor: '#E6E1E1',
//   },
//   signup_text: {

//     width: 280,
//     height: 50,
//     fontWeight: '300',
//     fontSize: 25,
//     backgroundColor: '#ff0404',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     color: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 0.5 },
//     shadowOpacity: 0.5,
//     elevation: 3,
//   },

// })
