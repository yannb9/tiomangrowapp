import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
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
  is_receipt_gov_funding: yup
    .string()
    .label("In Receipt of Government Funding?")
    .required("Please choose an option"),
  active_bank_acc: yup
    .string()
    .label("Have Active Bank Account?")
    .required("Please choose an option"),
  mobile_cash: yup
    .string()
    .label("Access to Mobile Money?")
    .required("Please choose an option"),
  attend_training: yup
    .string()
    .label("Willing to attend training?")
    .required("Please choose an option")
});

export default class Add_Farmer_Step6 extends React.Component {
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
      same_as_physicall_address: this.props.navigation.getParam('same_as_physical_address',''),
      farm_physical_address: this.props.navigation.getParam('farm_physical_address',''),
      farm_physical_city: this.props.navigation.getParam('farm_physical_city',''),
      farm_physical_district: this.props.navigation.getParam('farm_physical_district',''),

      ownership_rental: this.props.navigation.getParam('ownership_rental',''),
      plot_size: this.props.navigation.getParam('plot_size',''),
      primary_crop: this.props.navigation.getParam('primary_crop',''),
      primary_crop_planted_area: this.props.navigation.getParam('primary_crop_planted_area',''),
      secondary_crop: this.props.navigation.getParam('secondary_crop',''),
      secondary_crop_planted_area: this.props.navigation.getParam('secondary_crop_planted_area',''),

      farming: this.props.navigation.getParam('farming',''),
      monthly_farming_produce_income: this.props.navigation.getParam('monthly_farming_produce_income',''),
      water_access: this.props.navigation.getParam('water_access',''),
      yield: this.props.navigation.getParam('yield',''),

      livestock:this.props.navigation.getParam('livestock',''),
      cows_beef: this.props.navigation.getParam('cows_beef',''),
      cows_dairy: this.props.navigation.getParam('cows_dairy',''),
      sheep: this.props.navigation.getParam('sheep',''),
      goats: this.props.navigation.getParam('goats',''),
      chicken_boilers: this.props.navigation.getParam('chicken_boilers',''),
      chicken_layer: this.props.navigation.getParam('chicken_layer',''),
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

  saveData(dataObject) {
    AsyncStorage.setItem('farmer', JSON.stringify(dataObject))
    .then(() => AsyncStorage.getItem('farmer'))
    .then(farmer => {
      this.props.navigation.navigate("Home", {added_farmer: JSON.parse(farmer)})
    })
  }

  postData(farmerData) {
    fetch('https://tgrow-node-server.herokuapp.com/addFarmer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(farmerData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        saveData(data)
      })
      .catch((error) => {console.log(error);})
  }


  render() {
    console.log(this.state);
    const { navigate } = this.props.navigation;  
    return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Farm Stock</Text>
          <Text style={screenTitle.sub}>Farmer Registration - Step 6</Text>
        </View>

        <View style={styles.form}>
          <SafeAreaView>
            <Formik
              initialValues={{
                // prefix: this.state.farmer.prefix,
                farmer_name: this.state.farmer.farmer_name,
                id: this.state.farmer.id,
                // email: this.state.farmer.email,
                // phone: this.state.farmer.phone,
                farmer_profile_img: null,
                signup_date: new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0'),

                farm_address: this.state.farmer.address,
                farm_city: this.state.farmer.city,
                farm_district: this.state.farmer.farm_district,
                farm_zip: this.state.farmer.farm_zip,
                farm_country: null,
                farm_latitude: 23.123,
                farm_longitude: 23.123,

                // same_as_physical_address: this.state.farmer.same_as_physical_address,
                // farm_physical_address: this.state.farmer.farm_physical_address,
                // farm_physical_city: this.state.farmer.farm_physical_city,
                // farm_physical_district: this.state.farmer.farm_physical_district,

                ownership_rental: this.state.farmer.ownership_rental,
                plot_size: this.state.farmer.plot_size,
                primary_crop: this.state.farmer.primary_crop,
                primary_crop_planted_area: this.state.farmer.primary_crop_planted_area,
                primary_crop_plant_date:'',
                secondary_crop: this.state.farmer.secondary_crop,
                secondary_crop_planted_area: this.state.farmer.secondary_crop_planted_area,
                secondary_crop_plant_date: '',

                farming: this.state.farmer.farming,
                monthly_farming_produce_income: this.state.farmer.mo_farming_prod_income,
                water_access: this.state.farmerץwater_access,
                yield: this.state.farmer.yield,

                livestock:this.state.farmer.livestock,
                cows_beef: this.state.farmer.cows_beef,
                cows_dairy:this.state.farmer.cows_dairy,
                sheep:this.state.farmer.sheep,
                goats:this.state.farmer.goats,
                chicken_boilers:this.state.farmer.chicken_boilers,
                chicken_layers:this.state.farmer.chicken_layer,

                ceda_lea_ydf: null,
                bank_acc_active: null,
                mobile_cash: null,
                gov_fund_file: null,
                borehole_yield_cert: null,
                occupancy_agreement: null,
                agent: this.state.agent

              }}
              onSubmit={(values, actions) => {
                var newFarmerMySQL = {
                  // prefix: this.state.farmer.prefix,
                  farmer_name: this.state.farmer.farmer_name,
                  id: parseInt(this.state.farmer.id),
                  // email: this.state.farmer.email,
                  // phone: this.state.farmer.phone,
                  farmer_profile_img: null,
                  signup_date: new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0'),

                  farm_address: this.state.farmer.address,
                  farm_city: this.state.farmer.city,
                  farm_district: this.state.farmer.farm_district,
                  farm_zip: this.state.farmer.farm_zip,
                  farm_country: null,
                  farm_latitude: 23.123,
                  farm_longitude: 23.123,

                  // same_as_physical_address: this.state.farmer.same_as_physical_address,
                  // farm_physical_address: this.state.farmer.farm_physical_address,
                  // farm_physical_city: this.state.farmer.farm_physical_city,
                  // farm_physical_district: this.state.farmer.farm_physical_district,

                  ownership_rental: this.state.farmer.ownership_rental,
                  plot_size: parseFloat(parseFloat(this.state.farmer.plot_size).toFixed(2)),
                  primary_crop: this.state.farmer.primary_crop,
                  primary_crop_planted_area: parseFloat(parseFloat(this.state.farmer.primary_crop_planted_area).toFixed(2)),
                  primary_crop_plant_date:'2020-01-01',
                  secondary_crop: this.state.farmer.secondary_crop,
                  secondary_crop_planted_area: parseFloat(parseFloat(this.state.farmer.secondary_crop_planted_area).toFixed(2)),
                  secondary_crop_plant_date: '2020-01-01',

                  farming: this.state.farmer.farming,
                  monthly_farming_produce_income: this.state.farmer.mo_farming_prod_income,
                  water_access: this.state.farmer.water_access,
                  yield: this.state.farmer.yield,

                  livestock: (/true/i).test(this.state.farmer.livestock),
                  cows_beef: parseInt(this.state.farmer.cows_beef),
                  cows_dairy:(this.state.farmer.cows_dairy),
                  sheep:parseInt(this.state.farmer.sheep),
                  goats:parseInt(this.state.farmer.goats),
                  chicken_boilers:parseInt(this.state.farmer.chicken_boilers),
                  chicken_layers:parseInt(this.state.farmer.chicken_layer),

                  ceda_lea_ydf: values.ceda_lea_ydf,
                  bank_acc_active: values.bank_acc_active,
                  mobile_cash: values.mobile_cash,
                  gov_fund_file: null,
                  stated_address_conf:null,
                  borehole_yield_cert: null,
                  occupancy_agreement: null,

                  agent: this.state.agent
                  };
                setTimeout(() => {
                  // this._addToDB({newFarmerMySQL});
                  // this.saveData({newFarmer})
                  // console.log(JSON.stringify(newFarmerMySQL));
                  // console.log(newFarmerMySQL);
                  this.postData(newFarmerMySQL)
                  // .then()
                  actions.setSubmitting(false);
                  
                }, 1000);
              }}
              validationSchema={validationSchema}
            >
              {formikProps => (
                <Fragment>
                  <Dropdown
                    label="Are you currently in receipt of government funding ie ceda/lea/ydf?"
                    onValueChange={formikProps.handleChange("is_receipt_gov_funding")}
                    items={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.is_receipt_gov_funding &&
                      formikProps.errors.is_receipt_gov_funding}
                  </Text>

                  <Input
                    label="if yes please provide"
                    value={this.state.farmer.receipt_gov_funding}
                    onChangeText={formikProps.handleChange("receipt_gov_funding")}
                    placeholder=""
                    autoCapitalize="none"
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                      {formikProps.touched.receipt_gov_funding &&
                      formikProps.errors.receipt_gov_funding}
                  </Text>

                  <Dropdown
                    label="Do you have an active account?"
                    onValueChange={formikProps.handleChange("active_bank_acc")}
                    items={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.active_bank_acc &&
                      formikProps.errors.active_bank_acc}
                  </Text>

                  <Dropdown
                    label="Do you have access to mobile money?"
                    onValueChange={formikProps.handleChange("mobile_cash")}
                    items={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.mobile_cash &&
                      formikProps.errors.mobile_cash}
                  </Text>

                  <Dropdown
                    label="If accepted, are you willing to attend training at your own expense?"
                    onValueChange={formikProps.handleChange("attend_training")}
                    items={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.attend_training &&
                      formikProps.errors.attend_training}
                  </Text>

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <Button title="Submit" onPress={formikProps.handleSubmit} />
                  )}
                </Fragment>
              )}
            </Formik>
          <View style={{marginTop:'10%', flexDirection:'row'}}>
          {/* <Button title="Submit" onPress={this.postData} /> */}
              {/* <TouchableOpacity style={styles.add_farmer} onPress={()=>this.props.navigation.navigate("Home")}>
                <FontAwesomeIcon icon={ faAngleLeft } size={ 22 } style={{alignSelf:'center', color:'#fff'}}/>
              </TouchableOpacity> */}
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
