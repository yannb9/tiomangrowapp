import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  id: yup
    .number()
    .label("ID")
    .min(6, "ID number must be 6 digits"),
  farm_address: yup
    .string()
    .label("Address")
    .required("Please enter a valid address"),
  farm_city: yup
    .string()
    .label("City")
    .required("Please enter a correct city")
    .min(4, "Please enter a correct city"),
  farm_district: yup
    .string()
    .label("District")
    .required("Please enter the address district")
    .min(4, "Please enter the address district"),
  farm_zip: yup
    .number()
    .label("Zip")
    .required("Please enter the address zip code")
    .min(4, "Please enter the zip code"),
  same_as_physical_address: yup
    .string()
    .label("Is Residential same as physical")
    .default("Yes")
    .required("Please choose if your resitential address the same as your physical address"),
  farm_physical_address: yup
    .string()
    .label("Physical Address"),
  farm_physical_city: yup
    .string()
    .label("Physical City"),
  farm_physical_district: yup
    .string()
    .label("Physical District")
});

export default class Add_Farmer_Step2 extends React.Component {
  state = {
    agent: this.props.navigation.state.params.agent,
    farmer: {
      prefix: this.props.navigation.getParam('prefix', ''),
      farmer_name: this.props.navigation.getParam('farmer_name',''),
      email: this.props.navigation.getParam('email',''),
      phone: this.props.navigation.getParam('phone',''),
      same_as_physical_address: null
    }
  };

  _checkPhysicalAdd = val => {
    this.setState(prevState => ({
      ...prevState,
      farmer: {
        ...prevState.farmer,
        same_as_physical_address: val
      }
    }));
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={screenTitle.container}>
            <Text style={screenTitle.main}>Add A Farmer</Text>
            <Text style={screenTitle.sub}>Farmer Registration - Step 2</Text>
          </View>
          <View style={styles.form}>
            <SafeAreaView>
              <Formik
                initialValues={{
                  prefix: this.state.farmer.prefix,
                  farmer_name: this.state.farmer.farmer_name,
                  email: this.state.farmer.email,
                  phone: this.state.farmer.phone,

                  id: null,
                  farmer_profile_img: null,
                  farm_address: "",
                  farm_city: "",
                  farm_district: "",
                  farm_zip:"",
                  same_as_physical_address: "",
                  farm_physical_address: "",
                  farm_physical_city: "",
                  farm_physical_district: "",

                  agent: this.state.agent
                }}
                onSubmit={(values, actions) => {
                  this.props.navigation.navigate("Add_Farmer_Step3", {
                    prefix: this.state.farmer.prefix,
                    farmer_name: this.state.farmer.farmer_name,
                    email: this.state.farmer.email,
                    farmer_profile_img: this.state.farmer.phone,

                    id: values.id,
                    photo: null,
                    farm_address: values.farm_address,
                    farm_city: values.farm_city,
                    farm_district: values.farm_district,
                    farm_zip: values.farm_zip,
                    same_as_physical_address: values.same_as_physical_address,
                    farm_physical_address: values.farm_physical_address,
                    farm_physical_city: values.farm_physical_city,
                    farm_physical_district: values.farm_physical_district,

                    agent: this.state.agent
                  });
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                validationSchema={validationSchema}
              >
                {formikProps => (
                  <Fragment>
                    <Input
                      label="ID"
                      value={this.state.farmer.id}
                      onChangeText={formikProps.handleChange("id")}
                      placeholder="983647"
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.id && formikProps.errors.id}
                    </Text>

                    <Text style={styles.titles}>Resitential Address</Text>
                    <Input
                      label="Street Address"
                      value={this.state.farmer.farm_address}
                      onChangeText={formikProps.handleChange("farm_address")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.farm_address &&
                        formikProps.errors.farm_address}
                    </Text>

                    <Input
                      label="City"
                      value={this.state.farmer.farm_city}
                      onChangeText={formikProps.handleChange("farm_city")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.farm_city && formikProps.errors.farm_city}
                    </Text>

                    <Input
                      label="District"
                      value={this.state.farmer.farm_district}
                      onChangeText={formikProps.handleChange("farm_district")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.farm_district &&
                        formikProps.errors.farm_district}
                    </Text>


                    <Input
                      label="Zip"
                      value={this.state.farmer.farm_zip}
                      onChangeText={formikProps.handleChange("farm_zip")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.farm_zip &&
                        formikProps.errors.farm_zip}
                    </Text>

                    <Dropdown
                      label="Is your resitential address the same as your physical address?"
                      style={{ marginBottom: "5%" }}
                      onValueChange={option => {
                        this._checkPhysicalAdd(option);
                        formikProps.handleChange("same_as_physical_address");
                      }}
                      items={[
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" }
                      ]}
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.same_as_physical_address &&
                        formikProps.errors.same_as_physical_address}
                    </Text>
                    {/* {this.state.farmer.same_as_physical_address == 'no' ? (
                        <Text>hello</Text>
                    ) : null} */}
                    {this.state.farmer.same_as_physical_address == "no" ? (
                      <View>
                        <Text style={styles.titles}>Physical Address</Text>
                        <Input
                          label="Street Address"
                          value={this.state.farmer.farm_physical_address}
                          onChangeText={formikProps.handleChange(
                            "farm_physical_address"
                          )}
                          placeholder=""
                          autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                          {formikProps.touched.farm_physical_address &&
                            formikProps.errors.farm_physical_address}
                        </Text>

                        <Input
                          label="City"
                          value={this.state.farmer.farm_physical_city}
                          onChangeText={formikProps.handleChange(
                            "farm_physical_city"
                          )}
                          placeholder=""
                          autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                          {formikProps.touched.farm_physical_city &&
                            formikProps.errors.farm_physical_city}
                        </Text>

                        <Input
                          label="District"
                          value={this.state.farmer.farm_physical_district}
                          onChangeText={formikProps.handleChange(
                            "farm_physical_district"
                          )}
                          placeholder=""
                          autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                          {formikProps.touched.farm_physical_district &&
                            formikProps.errors.farm_physical_district}
                        </Text>
                      </View>
                    ) : null}
                    {formikProps.isSubmitting ? (
                      <ActivityIndicator />
                    ) : (
                      <Button title="Next" onPress={formikProps.handleSubmit} />
                    )}
                  </Fragment>
                )}
              </Formik>
            </SafeAreaView>
          </View>
            <View style={{marginTop:'5%', marginLeft:'10%', flexDirection:'row'}}>
              <TouchableOpacity style={styles.add_farmer} onPress={()=>this.props.navigation.navigate("Home")}>
                <FontAwesomeIcon icon={ faAngleLeft } size={ 22 } style={{alignSelf:'center', color:'#fff'}}/>
              </TouchableOpacity>
              <Text style={styles.back_home}>Back Home</Text>
            </View>
        </View>
      </ScrollView>
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
  titles: {
    fontFamily: "Rubik Medium",
    color: "#fcb040",
    fontSize: 15,
    fontWeight: "800",
    textTransform: "uppercase"
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
