import React from "react"
import { View, Text,TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretRight, faBolt } from '@fortawesome/free-solid-svg-icons';

export function FarmerId(props) {
  return (
    <View style={{marginBottom:'3%'}}>
      <TouchableOpacity
      style={id.container}
      onPress={props.onPress}
    >
      <View style={{flex:1, flexDirection:'row', alignItems: "center", justifyContent:'center', alignContent: "center"}}>
        <View style={{width:'33.333%', alignItems: "flex-start", justifyContent:'center'}}>
            <Text style={id.name}>{props.name}</Text>
        </View>

        <View style={{width:'33.333%', alignItems: "center", justifyContent:'center', alignContent: "center"}}>
          <Text style={id.region}>{props.farm_city}</Text>
        </View>

        <View style={{width:'33.333%', alignItems: "flex-end", justifyContent:'center', alignContent: "center",}}>
          <FontAwesomeIcon icon={ faCaretRight } style={ id.icon } size={22}/>
        </View>
      </View>
    </TouchableOpacity>
    </View>
    
  );
}

const id = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      width:'90%',
      alignSelf:'center',
      height:60,
      borderBottomColor:'#eeefe9',
      borderBottomWidth:1, 
      borderTopColor:'#e6d49e',
      borderTopWidth: 0,

    },
    name:{
      fontFamily: "Rubik Medium",
      fontSize: 15,
      color: "#252525",
    },
    farm:{
      fontFamily: "Rubik Light",
      fontSize: 14,
      color: "#9d9d9d",
    },
    region:{
      fontFamily: "Rubik Light",
      fontSize: 14,
      color: "#9d9d9d",
    },
    icon:{
      color: '#5b8c5a'
    }
  });