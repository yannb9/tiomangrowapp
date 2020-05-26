import React from "react";
import { View, Text, TextInput, StyleSheet,Picker } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export function Dropdown(props) {
  return (
    <View style={props.style}>
      <Text style={drop.label}>{props.label}</Text>
      <View style={drop.container}>
        <RNPickerSelect
          onValueChange={props.onValueChange}
          items={props.items}
        />
      </View>
    </View>
  );
}

const drop = StyleSheet.create({
  label: {
    fontFamily: "Rubik Medium",
    fontWeight: "500",
    color: "#b0bac9",
    fontSize: 13,
    textTransform: "uppercase"
  },
  container: {
    height: 60,
    borderWidth: 1,
    borderColor: "#b0bac9",
    borderRadius: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingTop:5
  }
});


