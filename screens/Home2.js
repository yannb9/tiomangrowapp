import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import { Button } from "../components/Button";

export default class Home2 extends React.Component {
  state = {
    };

  render() {
    // console.log(this.state.local)

    return (
    <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    paddingTop:'5%'
  },
  scroll_view:{
      width:'100%',
  },
  add_farmer:{
    width:120, 
    height:60, 
    position:'absolute', 
    justifyContent:'center', 
    backgroundColor:'#ffba5a', 
    borderRadius:100, 
    bottom:'5%', 
    right:'5%',
    alignItems: 'center'
  }
});

const section = StyleSheet.create({
    container:{
      width:'100%',
      height:60,
      backgroundColor:'#fff',
      borderTopWidth:1,
      borderTopColor:'#eeefe9',
      alignItems:'center',
      alignContent:'center',
      justifyContent: "center",
      shadowOpacity: 0.1,
      shadowRadius: 1.84,
      elevation: 0.5,
    },
    text:{
        fontFamily: "Rubik Medium",
        fontSize: 15,
        color: "#c6c6c6",
    }

})

const header = StyleSheet.create({
    container: {
    width: '100%',
    height:'25%',
    backgroundColor: "#fff",
    borderBottomWidth:1,
    borderBottomColor:'#f8f8f8'
    },
    setting:{
        flex: 1,
        flexDirection:'row'
    },
    section:{
        width:'45%',
        paddingLeft: '5%',
        paddingRight:'5%',
        justifyContent: "center",
        // alignItems: "center",
    },    
    section2:{
        width:'55%',
        paddingLeft: '5%',
        paddingRight:'5%',
        justifyContent: "center",
        // alignItems: "center",
    },
    amount:{
        fontFamily: "Rubik Light",
        fontSize: 45,
        color: "#252525"
    },
    registered:{
        fontFamily: "Rubik Light",
        fontSize: 14,
        color: "#252525",
        // paddingTop:'20%',
        // marginLeft: '5%'
    },
    user_name:{
        fontFamily: "Rubik Medium",
        fontSize: 14,
        color: "#252525",
        marginTop:'10%'
    },
    user_type:{
        fontFamily: "Rubik Light",
        fontSize: 14,
        color: "#252525",
    },
    image:{
        width: 300,
        height: '100%',
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -50,
    }
  });
