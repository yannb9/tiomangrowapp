import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Picker,
  TouchableOpacity
} from "react-native";
import { HeaderImg } from "../components/HeaderImg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Dropdown } from "../components/Dropdown";
import * as firebase from "firebase";

export default class RegisterStep2 extends React.Component {
  state = {
    prefix:"",
    name: "",
    user_type:this.props.navigation.state.params.user_type,
    email: "",
    password: "",
    area_code: null,
    phone_number: null,
    errorMessage: null,
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        })
      })
      // .then(()=>this.props.navigation.navigate("Home",{user_type: this.state.user_type}))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {    
    console.log(this.state);
    return (
      <View style={styles.container}>
        <HeaderImg />

        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Get Started!</Text>
          <Text style={screenTitle.sub}>Sign in to your account</Text>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <Dropdown
            label='prefix'
            onValueChange={(val, ind) => this.setState({ prefix: val })}
            items={[
              { label: "Ms", value: "Ms" },
              { label: "Miss", value: "Miss" },
              { label: "Mrs", value: "Mrs" },
              { label: "Mr", value: "Mr" },
              { label: "Dr", value: "Dr" },
              { label: "Prof", value: "Prof" },
              { label: "Prefer not to say", value: "Prefer not to say" }
            ]}
          />

          <Input
            label="Fulll Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Fulll Name"
            autoCapitalize="none"
            keyboardType='default'
            style={{ marginTop: 15 }}
          />

          <Input
            label="Email Address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Email Address"
            autoCapitalize="none"
            keyboardType='default'
            style={{ marginTop: 15 }}
          />

          <Input
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            autoCapitalize="none"
            keyboardType='default'
            style={{ marginTop: 15 }}
            secureTextEntry
          />

          <View style={{flex:0, flexDirection:'row', position:'relative', flexWrap:'wrap', alignContent:'center'}}>
            <View style={{width:'25%'}}>
              <Input
                label="Area Code"
                value={this.state.area_code}
                onChangeText={area_code => this.setState({area_code})}
                placeholder="Area Code"
                autoCapitalize="none"
                keyboardType='phone-pad'
                style={{ marginTop: 15 }}
                secureTextEntry
            />
            </View>
            <View style={{width:'70%', marginLeft:'5%'}}>
              <Input
                label="Phone Number"
                value={this.state.phone_number}
                onChangeText={phone_number => this.setState({phone_number})}
                placeholder="Phone Number"
                autoCapitalize="none"
                keyboardType='phone-pad'
                style={{ marginTop: 15 }}
                secureTextEntry
            />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Button title="Sign Up" onPress={this.handleSignUp} />

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
      </View>
    );
  }
}
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
    backgroundColor:'#fff'
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
