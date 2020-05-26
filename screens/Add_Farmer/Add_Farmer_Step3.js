import React, { Fragment } from "react";
import {View,Text, StyleSheet, Image, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    ownership_rental: yup
    .string()
      .label("Land Ownership or Rental")
      .required("Please choose an option"),
    plot_size: yup
    .number()
      .label("Plot Size")
      .required("Please enter the land plot size"),
    primary_crop: yup
    .string()
      .label("Primary Crop")
      .min(2, "Please enter your land's primary crop")
      .required("Please enter your land's primary crop"),
    primary_crop_planted_area: yup
    .number()
      .label("Primary Crop Area")
      .min(2, "Please enter your land's primary crop area")
      .required("Please enter your land's primary crop area"),
    secondary_crop: yup
    .string()
      .label("Secondary Crop"),
    secondary_crop_planted_area: yup
    .number()
      .label("Secondary Crop Area")
  });

export default class Add_Farmer_Step3 extends React.Component {
  state = {
    agent: this.props.navigation.state.params.agent,
    farmer: {
      prefix: this.props.navigation.state.params.prefix,
      farmer_name: this.props.navigation.getParam('farmer_name',''),
      email: this.props.navigation.getParam('email',''),
      phone: this.props.navigation.getParam('phone',''),

      id: this.props.navigation.getParam('id',''),
      farmer_profile_img: this.props.navigation.getParam('farmer_profile_img',''),
      farm_address: this.props.navigation.getParam('farm_address',''),
      farm_city: this.props.navigation.getParam('farm_city',''),
      farm_district: this.props.navigation.getParam('farm_district',''),
      farm_zip: this.props.navigation.getParam('farm_zip',''),
      farm_physical_address: this.props.navigation.getParam('farm_physical_address',''),
      farm_physical_city: this.props.navigation.getParam('farm_physical_city',''),
      farm_physical_district: this.props.navigation.getParam('farm_physical_district',''),

      has_secondary_crop: null,
    }
  };

  _handleState = (state_name, val) => {
    this.setState(prevState => ({
      ...prevState,
      farmer: {
        ...prevState.farmer,
        [state_name]: val
      }
    }));
  };

  render() {
    console.log(this.state);
    const { goBack } = this.props.navigation;
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={screenTitle.container}>
            <Text style={screenTitle.main}>Land Info</Text>
            <Text style={screenTitle.sub}>Farmer Registration - Step 3</Text>
          </View>

          <View style={styles.form}>
            <SafeAreaView>
              <Formik
                initialValues={{
                  prefix: this.state.prefix,
                  farmer_name: this.state.farmer.farmer_name,
                  email: this.state.farmer.email,
                  phone: this.state.farmer.phone,

                  id: this.state.farmer.id,
                  farmer_profile_img: null,
                  farm_address: this.state.farmer.farm_address,
                  farm_city: this.state.farmer.farm_city,
                  farm_district: this.state.farmer.farm_district,
                  farm_zip: this.state.farmer.farm_zip,
                  same_as_physical_address: this.state.farmer.same_as_physical_address,
                  farm_physical_address: this.state.farmer.farm_physical_address,
                  farm_physical_city: this.state.farmer.farm_physical_city,
                  farm_physical_district: this.state.farmer.farm_physical_district,

                  ownership_rental: "",
                  plot_size: "",
                  primary_crop: "",
                  primary_crop_planted_area: 0,
                  has_secondary_crop: this.state.farmer.has_secondary_crop,
                  secondary_crop: "",
                  secondary_crop_planted_area: 0 ,
                  agent: this.state.agent
                }}
                onSubmit={(values, actions) => {       
                  this.state.farmer.has_secondary_crop == undefined ?
                  alert('Please choose if you have a secondary crop')
                  :
                  this.props.navigation.navigate("Add_Farmer_Step4", {
                    prefix: this.state.farmer.prefix,
                    farmer_name: this.state.farmer.farmer_name,
                    email: this.state.farmer.email,
                    phone: this.state.farmer.phone,

                    id: this.state.farmer.id,
                    farmer_profile_img: null,
                    farm_address: this.state.farmer.farm_address,
                    farm_city: this.state.farmer.farm_city,
                    farm_district: this.state.farmer.farm_district,
                    farm_zip: this.state.farmer.farm_zip,
                    same_as_physical_address: this.state.farmer.same_as_physical_address,
                    farm_physical_address: this.state.farmer.farm_physical_address,
                    farm_physical_city: this.state.farmer.farm_physical_city,
                    farm_physical_district: this.state.farmer.farm_physical_district,

                    ownership_rental: values.ownership_rental,
                    plot_size: values.plot_size,
                    primary_crop: values.primary_crop,
                    primary_crop_planted_area: values.primary_crop_planted_area,

                    has_secondary_crop: this.state.farmer.has_secondary_crop,
                    secondary_crop: values.secondary_crop,
                    secondary_crop_planted_area: values.secondary_crop_planted_area,
                    agent: this.state.agent
                  });
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                validationSchema={validationSchema}>

                {formikProps => (
                  <Fragment>
                    <Dropdown
                      label="Land ownership or rental"
                      onValueChange={formikProps.handleChange("ownership_rental")}
                      items={[
                        { label: "Land OwnerShip", value: "land_ownership" },
                        { label: "Rental", value: "rental" }
                      ]}
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.ownership_rental &&
                        formikProps.errors.ownership_rental}
                    </Text>

                    <Input
                      label="Plot Size (hectares)"
                      value={this.state.farmer.plot_size}
                      onChangeText={formikProps.handleChange("plot_size")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.plot_size &&
                        formikProps.errors.plot_size}
                    </Text>

                    {/* primary crop - dropdown */}
                    <Input
                      label="Primary Crop"
                      value={this.state.farmer.primary_crop}
                      onChangeText={formikProps.handleChange("primary_crop")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.primary_crop &&
                        formikProps.errors.primary_crop}
                    </Text>
                    {/* primary crop area(hectares) */}
                    <Input
                      label="Primary Crop Area"
                      value={this.state.farmer.primary_crop_planted_area}
                      onChangeText={formikProps.handleChange("primary_crop_planted_area")}
                      placeholder=""
                      autoCapitalize="none"
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.primary_crop_planted_area &&
                        formikProps.errors.primary_crop_planted_area}
                    </Text>
                    {/* secondary crop */}
                    <Dropdown
                      label="Have a secondary crop?"
                      onValueChange={
                        option => {
                          this._handleState("has_secondary_crop", option);
                          formikProps.handleChange("has_secondary_crop");
                      }}
                      items={[
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" }
                      ]}
                    />
                    <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.has_secondary_crop &&
                        formikProps.errors.has_secondary_crop}
                    </Text>

                    {this.state.farmer.has_secondary_crop == "yes" ? (
                      <View>
                        <Input
                          label="Secondary Crop"
                          value={this.state.farmer.secondary_crop}
                          onChangeText={formikProps.handleChange("secondary_crop")}
                          placeholder=""
                          autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                          {formikProps.touched.secondary_crop &&
                            formikProps.errors.secondary_crop}
                        </Text>
                        {/* secondary crop area(hectares) */}
                        <Input
                          label="Secondary Crop Area"
                          value={this.state.farmer.secondary_crop_planted_area}
                          onChangeText={formikProps.handleChange("secondary_crop_planted_area")}
                          placeholder=""
                          autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                          {formikProps.touched.secondary_crop_planted_area &&
                            formikProps.errors.secondary_crop_planted_area}
                        </Text>
                      </View>
                    ) : null}

                    {formikProps.isSubmitting ? (
                      <ActivityIndicator />
                    ) : 
                    (
                      <Button title="Next" onPress={formikProps.handleSubmit} />
                    )}

                  </Fragment>
                )}
              </Formik>
            <View style={{marginTop:'10%', flexDirection:'row'}}>
              <TouchableOpacity style={styles.add_farmer} onPress={()=>this.props.navigation.navigate("Home")}>
                <FontAwesomeIcon icon={ faAngleLeft } size={ 22 } style={{alignSelf:'center', color:'#fff'}}/>
              </TouchableOpacity>
              <Text style={styles.back_home}>Back Home</Text>
            </View>
            </SafeAreaView>
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
    justifyContent:'center', 
    backgroundColor:'#ffba5a', 
    borderRadius:100, 
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
