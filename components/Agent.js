import React from "react"
import { View, Text,TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBurn, faBolt } from '@fortawesome/free-solid-svg-icons';

export function Agent(props) {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={props.onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <View style={user.iconWrapper}>
          <View style={user.iconContainer}>
            <FontAwesomeIcon icon={props.icon} size={ 32 } style={props.fStyle} />
          </View>
        </View>
        <View>
            <Text style={user.title}>{props.user}</Text>
            <Text style={user.sub}>{props.userRole}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


const user = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center"
    },
    iconWrapper:{
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center'
    },
    iconContainer:{
      width: 100,
      height: 100,
      marginTop:'5%',
      backgroundColor:'#f4f6f6',
      borderRadius:100,
      justifyContent: "center",
      alignContent: "center",
      alignItems: 'center'
    },
    title:{
      fontFamily: 'Rubik Medium',
      fontWeight: '500',
      color:'#2e384d',
      textAlign:'center',
      fontSize: 20,
      marginTop:15
    },
    sub:{
      fontFamily: 'Rubik Light',
      fontWeight: '500',
      color:'#8798ad',
      textAlign:'center',
      fontSize: 16,
      marginTop:15
    }
  });