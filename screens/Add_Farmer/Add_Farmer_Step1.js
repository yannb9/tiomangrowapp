import React, { Fragment } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  farmer_name: yup
    .string()
    .label("Farmer Name")
    .min(5, "Wow! your farmer name is short!"),
  email: yup
    .string()
    .label("Email")
    .email(),
  phone: yup
    .number()
    .label("Number")
    .min(10, "Please submit a correct phone number")
});

export default class Add_Farmer_Step1 extends React.Component {
  state = {
    agent: this.props.navigation.state.params.agent,
    farmer: {}
  };

  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Lets get Started</Text>
          <Text style={screenTitle.sub}>Just need some basic details</Text>
        </View>

        <View style={styles.form}>
          <SafeAreaView>
            <Formik
              initialValues={{ agent:this.state.agent, prefix: "Mrs", farmer_name: "", email: "", phone: "" }}
              onSubmit={(values, actions) => {
                this.props.navigation.navigate("Add_Farmer_Step2", {
                  prefix: values.prefix,
                  farmer_name: values.farmer_name,
                  email: values.email,
                  phone: values.phone,
                  agent:this.state.agent
                });
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 1000);
              }}
              validationSchema={validationSchema}
            >
              {formikProps => (
                <Fragment>
                  <Dropdown
                    label="prefix"
                    onValueChange={formikProps.handleChange("prefix")}
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
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.prefix && formikProps.errors.prefix}
                  </Text>

                  <Input
                    label="Name"
                    value={this.state.farmer.farmer_name}
                    onChangeText={formikProps.handleChange("farmer_name")}
                    placeholder="John Doe"
                    autoCapitalize="none"
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.farmer_name && formikProps.errors.farmer_name}
                  </Text>

                  <Input
                    label="Email"
                    value={this.state.farmer.email}
                    onChangeText={formikProps.handleChange("email")}
                    placeholder="johndoe@johnsemail.com"
                    autoCapitalize="none"
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.email && formikProps.errors.email}
                  </Text>

                  <Input
                    label="Phone"
                    value={this.state.farmer.phone}
                    onChangeText={formikProps.handleChange("phone")}
                    placeholder="(267) 123-4566"
                    autoCapitalize="none"
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.phone && formikProps.errors.phone}
                  </Text>

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <Button title="Next" onPress={formikProps.handleSubmit} />
                  )}
                </Fragment>
              )}
            </Formik>
            <View style={{marginTop:'15%', flexDirection:'row'}}>
              <TouchableOpacity style={styles.add_farmer} onPress={()=>this.props.navigation.navigate("Home")}>
                <FontAwesomeIcon icon={ faAngleLeft } size={ 22 } style={{alignSelf:'center', color:'#fff'}}/>
              </TouchableOpacity>
              <Text style={styles.back_home}>Back Home</Text>
            </View>

          </SafeAreaView>
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
  image: {
    width: 100,
    height: 100
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
  },
  add_farmer:{
    width:50, 
    height:50, 
    // position:'absolute', 
    justifyContent:'center', 
    backgroundColor:'#ffba5a', 
    // borderWidth:2, 
    borderRadius:100, 
    // borderColor:'#ffba5a', 
    bottom:'5%', 
    left:'5%'
  },
  back_home: {
    fontFamily: "Rubik Medium",
    color: "#b0bac9",
    fontSize: 16,
    marginLeft:10
  }
});
