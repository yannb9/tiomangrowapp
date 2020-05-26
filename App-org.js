import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Loading from "./screens/Loading";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";

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
    web: { headerMode: 'screen' },
    default: {},
  });

const AppStack = createStackNavigator({
    Home: Home
});

const AuthStack = createStackNavigator({
    Login: Login,
    Register: Register
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: Loading,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
