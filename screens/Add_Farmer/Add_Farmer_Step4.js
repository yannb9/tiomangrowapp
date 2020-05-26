import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  farming: yup
    .string()
    .label("Currently Farming"),
    // .required("Please choose an option"),
  monthly_farming_produce_income: yup
    .number()
    .label("Monthly Produce Income"),
  water_access: yup
    .string()
    .label("Eater Access"),
    // .required("Please chose an option"),
  yield: yup
    .number()
    .label("Yield")

});

export default class Add_Farmer_Step4 extends React.Component {
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

      has_secondary_crop: this.props.navigation.getParam('has_secondary_crop',''),
      farm_physical_address: this.props.navigation.getParam('farm_physical_address',''),
      farm_physical_city: this.props.navigation.getParam('farm_physical_city',''),
      farm_physical_district: this.props.navigation.getParam('farm_physical_district',''),

      ownership_rental: this.props.navigation.getParam('ownership_rental',''),
      plot_size: this.props.navigation.getParam('plot_size',''),
      primary_crop: this.props.navigation.getParam('primary_crop',''),
      primary_crop_planted_area: this.props.navigation.getParam('primary_crop_planted_area',''),
      secondary_crop: this.props.navigation.getParam('secondary_crop',''),
      secondary_crop_planted_area: this.props.navigation.getParam('secondary_crop_planted_area',''),
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
          <Text style={screenTitle.main}>Farm Stock</Text>
          <Text style={screenTitle.sub}>Farmer Registration - Step 4</Text>
        </View>

        <View style={styles.form}>
          <SafeAreaView>
            {/* <View>
              <Button title="goBack" onPress={() => goBack()} />
            </View> */}
            <Formik
              initialValues={{
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
                has_secondary_crop:this.state.farmer.has_secondary_crop,
                farm_physical_address: this.state.farmer.farm_physical_address,
                farm_physical_city: this.state.farmer.farm_physical_city,
                farm_physical_district: this.state.farmer.farm_physical_district,

                ownership_rental: this.state.farmer.ownership_rental,
                plot_size: this.state.farmer.plot_size,
                primary_crop: this.state.farmer.primary_crop,
                primary_crop_planted_area: this.state.farmer.primary_crop_planted_area,
                secondary_crop: this.state.farmer.secondary_crop,
                secondary_crop_planted_area: this.state.farmer.secondary_crop_planted_area,

                farming: "",
                monthly_farming_produce_income: 0,
                water_access: "",
                yield: 0,

                agent: this.state.agent
              }}
              onSubmit={(values, actions) => {
                this.state.farmer.farming == undefined || this.state.farmer.water_access == undefined ?
                alert('Please submit all select fields') 
                :
                this.props.navigation.navigate("Add_Farmer_Step5", {
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
                  has_secondary_crop:this.state.farmer.has_secondary_crop,
                  farm_physical_address: this.state.farmer.farm_physical_address,
                  farm_physical_city: this.state.farmer.farm_physical_city,
                  farm_physical_district: this.state.farmer.farm_physical_district,
  
                  ownership_rental: this.state.farmer.ownership_rental,
                  plot_size: this.state.farmer.plot_size,
                  primary_crop: this.state.farmer.primary_crop,
                  primary_crop_planted_area: this.state.farmer.primary_crop_planted_area,
                  secondary_crop: this.state.farmer.secondary_crop,
                  secondary_crop_planted_area: this.state.farmer.secondary_crop_planted_area,

                  farming: this.state.farmer.farming,
                  monthly_farming_produce_income: values.monthly_farming_produce_income,
                  water_access: this.state.farmer.water_access,
                  yield: values.yield,

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

                  <Dropdown
                    label="Currently Farming"
                    onValueChange={
                      option => {
                        this._handleState("farming", option);
                        formikProps.handleChange("farming");
                    }}
                    items={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.farming &&
                      formikProps.errors.farming}
                  </Text>
                  {this.state.farmer.farming == "yes" ? 
                    <View>
                      <Input
                        label="What is your monthly farming produce income?"
                        value={this.state.farmer.monthly_farming_produce_income}
                        onChangeText={formikProps.handleChange("monthly_farming_produce_income")}
                        placeholder=""
                        autoCapitalize="none"
                      />
                      <Text style={{ color: "#E53A40", width: "75%" }}>
                        {formikProps.touched.monthly_farming_produce_income &&
                          formikProps.errors.monthly_farming_produce_income}
                      </Text>
                    </View>
                  : null}

                  <Dropdown
                    label="Water Access?"
                    onValueChange={
                      option => {
                        this._handleState("water_access", option);
                        formikProps.handleChange("water_access");
                    }}
                    items={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.water_access &&
                      formikProps.errors.water_access}
                  </Text>
                  {this.state.farmer.water_access == "yes" ? 
                    <View>
                      <Input
                        label="What is your yield?"
                        value={this.state.farmer.yield}
                        onChangeText={formikProps.handleChange("yield")}
                        placeholder=""
                        autoCapitalize="none"
                      />
                      <Text style={{ color: "#E53A40", width: "75%" }}>
                        {formikProps.touched.yield &&
                          formikProps.errors.yield}
                      </Text>
                    </View>
                  : null}

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <Button title="Next" onPress={formikProps.handleSubmit} />
                    // <Button title="Next" onPress={()=>console.log(this.state)} />
                  )}
                </Fragment>
              )}
            </Formik>
          </SafeAreaView>
          <View style={{marginTop:'15%', flexDirection:'row'}}>
              <TouchableOpacity style={styles.add_farmer} onPress={()=>this.props.navigation.navigate("Home")}>
                <FontAwesomeIcon icon={ faAngleLeft } size={ 22 } style={{alignSelf:'center', color:'#fff'}}/>
              </TouchableOpacity>
              <Text style={styles.back_home}>Back Home</Text>
            </View>
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
