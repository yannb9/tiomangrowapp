import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Loading from "./screens/Loading";
import Login from "./screens/Login";
import RegisterStep1 from "./screens/RegisterStep1";
import RegisterStep2 from "./screens/RegisterStep2";
import Home from "./screens/Home";
import Farmer from "./screens/Farmer";
import Screen from "./screens/Screen";
// import DB from "./screens/DB";
import Add_Farmer_Step1 from "./screens/Add_Farmer/Add_Farmer_Step1"
import Add_Farmer_Step2 from "./screens/Add_Farmer/Add_Farmer_Step2"
import Add_Farmer_Step3 from "./screens/Add_Farmer/Add_Farmer_Step3"
import Add_Farmer_Step4 from "./screens/Add_Farmer/Add_Farmer_Step4"
import Add_Farmer_Step5 from "./screens/Add_Farmer/Add_Farmer_Step5"
import Add_Farmer_Step6 from "./screens/Add_Farmer/Add_Farmer_Step6"
import Add_Farmer_Confirmation from "./screens/Add_Farmer/Add_Farmer_Confirmation"
// import Add_Farmer_Step7 from "./screens/Add_Farmer/Add_Farmer_Step7"
// import Add_Farmer_Step8 from "./screens/Add_Farmer/Add_Farmer_Step8"

import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCsSkOTW7_oTcKJ6PDR5aTNp-9GFBqp2QM",
    authDomain: "tioman-grow-app.firebaseapp.com",
    databaseURL: "https://tioman-grow-app.firebaseio.com",
    projectId: "tioman-grow-app",
    storageBucket: "tioman-grow-app.appspot.com",
    messagingSenderId: "279601062198",
    appId: "1:279601062198:web:89f094cf704f297acd9397",
    measurementId: "G-LRME4EPEPP"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const config = Platform.select({
  web: { headerMode: 'none' },
  default: { headerMode: 'none' },
});

const AppStack = createStackNavigator({
    Home: Home,
    Farmer: Farmer,
},config);

const AuthStack = createStackNavigator({
    Login: Login,
    RegisterStep2: RegisterStep2
},config);

const FarmerStack = createStackNavigator({
  Add_Farmer_Step1:Add_Farmer_Step1,
  Add_Farmer_Step2:Add_Farmer_Step2,
  Add_Farmer_Step3:Add_Farmer_Step3,
  Add_Farmer_Step4:Add_Farmer_Step4,
  Add_Farmer_Step5:Add_Farmer_Step5,
  Add_Farmer_Step6:Add_Farmer_Step6,
  Add_Farmer_Confirmation:Add_Farmer_Confirmation
}, config);


const appNavigator = createSwitchNavigator(
    {
        Loading: Loading,
        Auth: AuthStack,
        App: AppStack,
        AddFarmer:FarmerStack,
        RegisterStep1: RegisterStep1,
        Screen: Screen,
        // DB: DB,
    },
    {
        initialRouteName: "Loading"
    }
)

// instead of immediately exporting the AppNavigator component we assign in to a constant. 
const RootApp = createAppContainer(appNavigator);


// we create and export our own custom App component 
export default class App extends Component {

  state = {
    loaded: false
    // farmers: []
  };
// create a helper function to load the font 
  _loadFontsAsync = async () => {
    await Font.loadAsync({
      // add as many fonts as you want here .... 
      'Rubik Light': require('./assets/fonts/Rubik-Light.ttf'),
      'Rubik Medium': require('./assets/fonts/Rubik-Medium.ttf'),
      'Rubik Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    });
    this.setState({ loaded: true });
  };

  _loadmySQLDB = async () => {
    fetch('http://192.168.1.14:5000/getData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

// call _loadFontsAsync 
  componentDidMount() {
    this._loadFontsAsync();
    // this._loadmySQLDB();
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    // from the custom App we return the component we assigned to RootApp.
    return <RootApp />;
    // return <Screen />;
    // return <DB />;
    // return <Add_Farmer_Step1 />;
    // return <Add_Farmer_Step2 />;
    // return <Login />;
    // return <Farmer />;
    // return <PhoneVerification />;
    }
}