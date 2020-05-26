import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { HeaderImg } from "../components/HeaderImg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import * as firebase from "firebase";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderImg />

        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Sign In</Text>
          <Text style={screenTitle.sub}>Sign in to your account</Text>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            autoCapitalize="none"
          />
          <Input
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
            style={{ marginTop: 32 }}
          />

          <View style={{ marginTop: 32 }}>
            <Button title="Sign In" onPress={this.handleLogin} />
            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 32 }}
              onPress={() => this.props.navigation.navigate("RegisterStep1")}
            >
              <Text style={styles.newTo}>
                New to Tioman Grow?{" "}
                <Text style={styles.signUpTxt}>Sign Up</Text>
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
    backgroundColor: "#fff"
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
    color: "#fcb040",
    fontSize: 13,
    fontWeight: "500"
  }
});
