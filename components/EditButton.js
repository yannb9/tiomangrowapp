import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';

export function EditButton(props) {
  return (
    <View style={btn.btnCr}>
      <TouchableOpacity style={btn.btn} value={props.value} onPress={props.onPress}>
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
    justifyContent: "center",
    backgroundColor: "#fdd365",
    borderRadius: 5,
    height: 40,
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
