import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { HeaderImg } from '../components/HeaderImg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
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
              <Text style={screenTitle.main}>Get Started</Text>
              <Text style={screenTitle.sub}>Just need some basic details</Text>
            </View>

            <View style={styles.errorMessage}>
              {this.state.errorMessage && (
                <Text style={styles.error}>{this.state.errorMessage}</Text>
              )}
            </View>

            <View style={styles.form}>
              <View>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder="Email"
                  autoCapitalize="none"
                />
              </View>
              <View style={{ marginTop: 32 }}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder="Password"
                  secureTextEntry={true}
                />
              </View>
              <Input
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="Password"
                secureTextEntry={true}
              />
              
              <View style={{ marginTop: 32 }}>
                <Button title="Sign In" onPress={this.handleLogin} />
                <TouchableOpacity
                  style={{ alignSelf: "center", marginTop: 32 }}
                  onPress={() => this.props.navigation.navigate("Register")}
                >
                  <Text style={{ color: "#414959", fontSize: 13 }}>
                    New to SocialApp?{" "}
                    <Text style={{ fontWeight: "500", color: "#fcb040" }}>
                      Sign Up
                    </Text>
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
      fontFamily: 'Rubik Light',
      fontWeight: '100',
      fontSize: 30,
      textAlign:'center',
      marginTop: 10,
      marginLeft: 0,
      color:'#2e384d'
    },
    sub: {
      fontFamily: 'Rubik Light',
      fontWeight: '100',
      fontSize: 18,
      textAlign:'center',
      marginTop: 10,
      marginLeft: 0,
      color:'#2e384d'
    }
  })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '20%',
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        fontFamily:'Rubik Medium',
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        paddingRight:'5%',
        paddingLeft:'5%',
        marginBottom: 48,
        marginHorizontal: 30,
    },

    inputContainer: {

    },
    inputLabel: {
        fontFamily: 'Rubik Medium',
        fontWeight: '500',
        color:'#b0bac9',
        fontSize: 13,
        textTransform: "uppercase"
    },
    input: {
        height:60,
        borderWidth: 1,
        borderColor:'#b0bac9',
        borderRadius: 5,
        marginBottom:5,
        paddingLeft:10
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
