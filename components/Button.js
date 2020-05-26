import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
 } from 'react-native';

export function Button(props) {
  return (
    <View style={btn.btnCr}>
      <TouchableOpacity style={btn.btn} onPress={props.onPress}>
        <Text style={btn.btnText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const btn = StyleSheet.create({
  btn:{
    // backgroundColor:'#fcb040',
    // width:'75%',
    // height: 60,
    // alignItems:'center',
    // borderRadius:5,
    // marginTop:10

    // marginHorizontal: 30,
    backgroundColor: "#ffba5a",
    borderRadius: 5,
    height: 52,
    width:'100%',
    alignItems: "center",
    justifyContent: "center"

  },
  btnText: {
    color: '#fff',
    padding: '5%',
    fontSize: 16
  }
})
