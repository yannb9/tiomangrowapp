import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
 } from 'react-native';

export function MiniButton(props) {
  return (
    <View style={btn.btnCr}>
      <TouchableOpacity style={btn.btn} value={props.value} onPress={props.onPress}>
        <Text style={btn.btnText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const btn = StyleSheet.create({
  btn: {
    backgroundColor: "#fdd365",
    borderRadius: 5,
    height: 40,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  btnText: {
    color: "#fff",
    padding: "5%",
    fontSize: 16
  }
});
