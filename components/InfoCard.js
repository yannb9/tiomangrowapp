import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { EditButton } from "../components/EditButton";

export function InfoCard(props) {
  return (
    <View style={properties.container}>
      <Text style={properties.title}>{props.title}</Text>
      <View style={properties.itemContainer}>
        <View style={{width: "60%",alignSelf: "center",paddingTop: 15,paddingBottom: 15, alignContent:'center'}}>
          <Text style={properties.label}>{props.label_1}</Text>
          <Text style={properties.text}>{props.value_1}</Text>
        </View>

        <View style={{width: "40%",alignSelf: "center",paddingTop: 15,paddingBottom: 15}}>
          <Text style={properties.label}>{props.label_2}</Text>
          <Text style={properties.text}>{props.value_2}</Text>
        </View>
      </View>

      <View style={properties.itemContainer}>
        <View style={{width: "60%",alignSelf: "center",paddingTop: 15,paddingBottom: 15}}>
          <Text style={properties.label}>{props.label_3}</Text>
          <Text style={properties.text}>{props.value_3}</Text>
        </View>

        <View style={{width: "40%",alignSelf: "center",paddingTop: 15,paddingBottom: 15}}>
          <Text style={properties.label}>{props.label_4}</Text>
          <Text style={properties.text}>{props.value_4}</Text>
        </View>
      </View>

      <View style={properties.itemContainer}>
        <View style={{width: "60%",alignSelf: "center",paddingTop: 15,paddingBottom: 15}}>
          <Text style={properties.label}>{props.label_5}</Text>
          <Text style={properties.text}>{props.value_5}</Text>
        </View>

        <View style={{width: "40%",alignSelf: "center",paddingTop: 15,paddingBottom: 15}}>
          <Text style={properties.label}>{props.label_6}</Text>
          <Text style={properties.text}>{props.value_6}</Text>
        </View>
      </View>

      {/* <View style={{ width: 300, alignSelf: "center", alignContent:'center' }}>
        <EditButton title="Edit" />
      </View> */}
    </View>
  );
}


const properties = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection:'column',
      backgroundColor: "#fff",
      alignSelf: "center",
      alignContent: 'center',
      // alignItems:"center",
      
      shadowColor: "rgba(135, 152, 173, 0.35)",
      shadowOffset: {
        width: 0,
        height: 4
      },
      borderWidth: 1,
      borderColor: "#bfc7d36b",
      borderRadius: 5,
      padding: 20,
    },
    itemContainer:{
      flex:1,
      flexDirection:'row',
      alignContent:'center',
      alignSelf:'center',
      width:'95%',
      // height:10,
      // backgroundColor:'green',
    },
    title:{
      fontFamily: "Rubik Medium",
      fontSize: 18,
      color: "#13283f"
    },
    label:{
      fontFamily: "Rubik Medium",
      fontSize: 14,
      color: "#8798ad"
    },
    text:{
      fontFamily: "Rubik Light",
      fontSize: 16,
      color: "#8798ad"
    }
  })