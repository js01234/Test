import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple' }}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: '600' }}> Async Storage </Text>
            </View>
        );
    }
}















































// import React, { Component } from 'react';
// import { DefaultTheme, TextInput, Provider as PaperProvider } from 'react-native-paper';
// import { StatusBar, ScrollView, ToastAndroid, Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
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

// export default class SignUp extends Component {
//   static navigationOptions = { header: null }


//   constructor(props) {
//     super(props);
//     this.state = {
//       platform: '',
//       ipAddress: 123,
//       email: '',
//       firstname: '',
//       lastname: '',
//       password: '',
//       confirmpassword: ''
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
//     const firstname = this.state.firstname
//     const emailAddress = this.state.email;
//     const myPassWord = this.state.password;
//     if (emailAddress == "" && myPassWord == "" && firstname == "") {
//       ToastAndroid.show('Please Fill All the Fields', ToastAndroid.SHORT);
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
//       ToastAndroid.show('Please enter a valid Email ', ToastAndroid.SHORT);
//     }
//     else if (firstname.length < 1) {
//       ToastAndroid.show('Please enter a UserName ', ToastAndroid.SHORT);
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
//       ToastAndroid.show('Registration Successfull', ToastAndroid.SHORT);
//       this.props.navigation.navigate('thankyou')
//     })
//   }

//   render() {
//     return (
//       <ScrollView>
//         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
//         <View style={styles.main_View}>
//           <Text style={styles.signUp}>Sign Up</Text>

//           <View style={{ height: '53%', marginTop: '5%', }}>
//             <PaperProvider theme={theme}>

//               <TextInput
//                 style={styles.input_View1}
//                 selectionColor='black'
//                 mode='outlined'
//                 label='First Name'
//                 value={this.state.firstname}
//                 onChangeText={(firstname) => this.setState({ firstname })} />
//             </PaperProvider>



//             <PaperProvider theme={theme}>
//               <TextInput
//                 style={styles.input_View2}
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Last Name'
//                 value={this.state.lastname}
//                 onChangeText={lastname => this.setState({ lastname })} />
//             </PaperProvider>



//             <PaperProvider theme={theme}>
//               <TextInput
//                 style={styles.input_View2}
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Email'
//                 value={this.state.email}
//                 onChangeText={email => this.setState({ email })} />
//             </PaperProvider>



//             <PaperProvider theme={theme}>
//               <TextInput
//                 style={styles.input_View2}
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Passcode'
//                 value={this.state.password}
//                 onChangeText={password => this.setState({ password })} />
//             </PaperProvider>



//             <PaperProvider theme={theme}>
//               <TextInput
//                 style={styles.input_View2}
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Confirm Passcode'
//                 value={this.state.confirmpassword}
//                 onChangeText={confirmpassword => this.setState({ confirmpassword })} />
//             </PaperProvider>
//           </View>

//           <View style={{ marginTop: '3%', height: 255, }}>
//             <TouchableOpacity
//               //  onPress={() => this.props.navigation.navigate('thankyou')}>
//               onPress={() => this.onLogin()}>
//               <Text style={styles.signup_text}>SignUp</Text>
//             </TouchableOpacity>
//             <View style={styles.line} ></View>
//             <View style={{ marginTop: 20 }}>
//               <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
//                 <Text style={styles.login_text}>Login</Text>
//               </TouchableOpacity></View>
//           </View>
//         </View >
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
//   signUp: {
//     marginTop: '12%',
//     fontSize: 30,
//     fontWeight: '400',
//     color: '#ff0404'
//   },
//   input_View1: {
//     width: 280,
//     height: 60,
//   },
//   input_View2: {
//     marginTop: -10,
//     justifyContent: 'center',
//     width: 280,
//     height: 60,
//   },
//   login_text: {
//     width: 280,
//     height: 50,
//     fontWeight: '300',
//     fontSize: 23,
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
//     marginTop: 20,
//     width: 200,
//     borderColor: '#E6E1E1',
//   },
//   signup_text: {
//     width: 280,
//     height: 50,
//     fontWeight: '300',
//     fontSize: 23,
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




































































































// import React, { Component } from 'react';
// import { DefaultTheme, TextInput, Provider as PaperProvider } from 'react-native-paper';
// import { StatusBar, ScrollView, ToastAndroid, Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
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

// export default class SignUp extends Component {
//   static navigationOptions = { header: null }

//   constructor(props) {
//     super(props);
//     this.state = {
//       platform: '',
//       ipAddress: 123,
//       email: '',
//       firstname: '',
//       lastname: '',
//       password: '',
//       confirmpassword: ''
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
//       <ScrollView>
//         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#feba00" translucent={true} />
//         <View style={styles.main_View}>
//           <Text style={styles.signUp}>Sign Up</Text>

//           <View style={styles.input_View1}>
//             <PaperProvider theme={theme}>

//               <TextInput
//                 selectionColor='black'
//                 mode='outlined'
//                 label='First Name'
//                 value={this.state.firstname}
//                 onChangeText={(firstname) => this.setState({ firstname })} />




//             </PaperProvider>
//           </View>

//           <View style={styles.input_View2}>
//             <PaperProvider theme={theme}>
//               <TextInput
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Last Name'
//                 value={this.state.lastname}
//                 onChangeText={lastname => this.setState({ lastname })} />
//             </PaperProvider>
//           </View>

//           <View style={styles.input_View2}>
//             <PaperProvider theme={theme}>
//               <TextInput
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Email'
//                 value={this.state.email}
//                 onChangeText={email => this.setState({ email })} />


//             </PaperProvider>
//           </View>

//           <View style={styles.input_View2}>
//             <PaperProvider theme={theme}>
//               <TextInput
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Passcode'
//                 value={this.state.passwords}
//                 secureTextEntry={true}
//                 onChangeText={password => this.setState({ password })} />
//             </PaperProvider>
//           </View>

//           <View style={styles.input_View2}>
//             <PaperProvider theme={theme}>
//               <TextInput
//                 selectionColor='black'
//                 mode='outlined'
//                 label='Confirm Passcode'
//                 value={this.state.confirmpassword}
//                 secureTextEntry={true}
//                 onChangeText={confirmpassword => this.setState({ confirmpassword })} />

//             </PaperProvider>
//           </View>

//           <TouchableOpacity
//             //  onPress={ () => this.props.navigation.navigate('SignupThanks')}
//             onPress={() => this.onLogin()}>

//             <Text style={styles.signup_text}>SignUp</Text>
//           </TouchableOpacity>
//           <View style={styles.line} ></View>
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate('LoginScreen')}

//           >
//             <Text style={styles.login_text}>Login</Text>
//           </TouchableOpacity>

//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   main_View: {
//     flex: 1,
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   signUp: {

//     fontSize: 30,
//     fontWeight: '400',
//     color: 'red'
//   },
//   input_View1: {
//     marginTop: 15,
//     width: 280,
//     height: 55,
//   },
//   input_View2: {
//     marginTop: 14,
//     width: 280,
//     height: 55,
//   },
//   login_text: {
//     padding: 10,
//     marginTop: 25,
//     width: 280,
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
//     borderWidth: 1,
//     marginTop: 25,
//     width: 200,
//     borderColor: '#E6E1E1',
//   },
//   signup_text: {
//     padding: 10,
//     marginTop: 30,
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
// });

