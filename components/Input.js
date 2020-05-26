import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export function Input(props) {
  return (
    <View style={props.style}>
      <Text style={input.inputLabel}>{props.label}</Text>
      {!!props.description ? 
      <Text style={input.description}>{props.description}</Text>
      :null}
      <TextInput
        style={input.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        keyboardType = {props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
      />
    </View>
  );
}

const input = StyleSheet.create({
  inputLabel: {
    fontFamily: "Rubik Medium",
    fontWeight: "500",
    color: "#b0bac9",
    fontSize: 13,
    textTransform: "uppercase"
  },
  input: {
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#b0bac9",
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 10,
  },
  description:{
    fontFamily: "Rubik Medium",
    fontSize:13,
    color:"#252525"
  }
});
