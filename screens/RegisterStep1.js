import React, { useReducer } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { withNavigation } from 'react-navigation';
import { HeaderImg } from "../components/HeaderImg";
import { Button } from "../components/Button";
import { Agent } from "../components/Agent";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBurn, faBolt } from '@fortawesome/free-solid-svg-icons';


export default class RegisterStep1 extends React.Component {
  state = {
      user_type:'',
      onClicked: false
  };

  _onSelected = (event) => {
      this.setState({
        onClicked:true,
        user_type: event
      })
  }

  _onSubmitUser = (event) => {
    if(event==true) {
      this.props.navigation.navigate("RegisterStep2",{user_type: this.state.user_type});
    } else {
      alert('Please choose what type of agent you are')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderImg />
        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Get Started!</Text>
          <Text style={screenTitle.sub}>What type of user are you?</Text>
        </View>
        <View style={{backgroundColor:'#fff', width:'100%', height:'50%'}}>
          {/* container for 2 */}
          <View style={user.container}>
            <Agent
              style = {this.state.onClicked && this.state.user_type == 'agent' ? user.activeBox : user.initialBox} 
              onPress  = {() => this._onSelected('agent')}
              user = 'Agent'
              userRole = 'Register & View'
              icon = { faBurn }
              fStyle = {this.state.onClicked && this.state.user_type == 'agent' ? user.activeFont : user.initialFont}
            />
            <Agent
              style = {this.state.onClicked && this.state.user_type == 'super-agent' ? user.activeBox : user.initialBox} 
              onPress  = {() => this._onSelected('super-agent')}
              user = 'Super Agent'
              userRole = 'Register, Edit & View'
              icon = { faBolt }
              fStyle = {this.state.onClicked && this.state.user_type == 'super-agent' ? user.activeFont : user.initialFont}
            />         
          </View>
          <View style={{width:'90%', alignSelf:'center'}}>
            <Button
              title='Continue'
              onPress={() => this._onSubmitUser(this.state.onClicked)}
            />
          </View>
          <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 15 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.newTo}>
                Already have an account?{" "}
                <Text style={styles.signUpTxt}>Login</Text>
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const user = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  initialBox: {
    width: "40%",
    // height: "90%",
    // height: "45%",
    height:230,
    backgroundColor: "#fff",
    marginLeft: "5%",
    marginRight: "5%",
    // paddingBottom:'5%',
    paddingBottom:'10%',
    borderWidth: 1.5,
    borderColor: "#e5e5e5",
    borderRadius: 10,
  },
  activeBox:{
    width: "40%",
    // height: "90%",
    // height: "45%",
    height:230,
    backgroundColor: "#fff",
    marginLeft: "5%",
    marginRight: "5%",
    // paddingBottom:'5%',
    paddingBottom:'10%',
    borderWidth: 1.5,
    borderColor: "#ffba5a",
    borderRadius: 10,
  },
  initialFont:{
    color: '#2e384d'
  },
  activeFont:{
    color:'#ffba5a'
  }
});

const screenTitle = StyleSheet.create({
  container: {
    marginBottom: "5%"
  },
  main: {
    fontFamily: "Rubik Light",
    fontWeight: "100",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 0,
    color: "#2e384d"
  },
  sub: {
    fontFamily: "Rubik Light",
    fontWeight: "100",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 0,
    color: "#2e384d"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    
  },
  errorMessage: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    fontFamily: "Rubik Medium",
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    paddingRight: "5%",
    paddingLeft: "5%",
    marginBottom: 20,
    marginHorizontal: 30
  },
  newTo: {
    fontFamily: "Rubik Light",
    color: "#b0bac9",
    fontSize: 13
  },
  signUpTxt: {
    fontFamily: "Rubik Medium",
    color: "#ffba5a",
    fontSize: 13,
    fontWeight: "500"
  }
});


    // shadowColor: "#e5e5e5",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5