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
  livestock: yup
    .bool()
    .label("Farm has livestock"),
  cows_beef: yup
    .number()
    .label("Cows Beef"),
  cows_dairy: yup
    .number()
    .label("Cows Dairy"),
  sheep: yup
    .number()
    .label("Number of sheep"),
  goats: yup
    .number()
    .label("Number of goats"),
  chicken_boilers: yup
    .number()
    .label("Number of chicken for meat production"),
  chicken_layer: yup
    .number()
    .label("Number of chicken for egg production"),
});

export default class Add_Farmer_Step5 extends React.Component {
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
      
      farming: this.props.navigation.getParam('farming',''),
      monthly_farming_produce_income: this.props.navigation.getParam('monthly_farming_produce_income',''),
      water_access: this.props.navigation.getParam('water_access',''),
      yield: this.props.navigation.getParam('yield',''),
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

    // const { goBack } = this.props.navigation;
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Farm Stock</Text>
          <Text style={screenTitle.sub}>Farmer Registration - Step 5</Text>
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

                farming: this.state.farmer.farming,
                monthly_farming_produce_income: this.state.farmer.mo_farming_prod_income,
                water_access: this.state.farmerץwater_access,
                yield: this.state.farmer.yield,

                livestock:null,
                cows_beef: 0,
                cows_dairy:0,
                sheep:0,
                goats:0,
                chicken_boilers:0,
                chicken_layer:0,
                agent: this.state.agent

              }}
              onSubmit={(values, actions) => {
                this.props.navigation.navigate("Add_Farmer_Step6", {
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
                  monthly_farming_produce_income: this.state.farmer.monthly_farming_produce_income,
                  water_access: this.state.farmer.water_access,
                  yield: this.state.farmer.yield,

                  livestock:values.livestock,
                  cows_beef: values.cows_beef,
                  cows_dairy:values.cows_dairy,
                  sheep:values.sheep,
                  goats:values.goats,
                  chicken_boilers:values.chicken_boilers,
                  chicken_layer:values.chicken_layer,
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
                    label="farm has livestock"
                    onValueChange={formikProps.handleChange("livestock")}
                    items={[
                      { label: "Yes", value: 'true' },
                      { label: "No", value: 'false' }]}
                  />
                  <Text style={{ color: "#E53A40", width: "75%" }}>
                    {formikProps.touched.livestock &&
                      formikProps.errors.livestock}
                  </Text>
                  <View style={{flexDirection:'row'}}>
                      {/* item */}
                    <View style={{flex:1, alignSelf:'flex-start', paddingRight:30}}>
                        <Input
                            label="Cows Beef"
                            description="(No. of cows for beef production products income?)"
                            value={this.state.farmer.cows_beef}
                            onChangeText={formikProps.handleChange("cows_beef")}
                            placeholder=""
                            autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                            {formikProps.touched.cows_beef &&
                            formikProps.errors.cows_beef}
                        </Text>
                    </View>

                    {/* item */}
                    <View style={{flex:1, alignSelf:'flex-end',paddingLeft:30}}>
                        <Input
                            label="Cows Dairy"
                            description="(No. of cows for dairy products)"
                            value={this.state.farmer.cows_dairy}
                            onChangeText={formikProps.handleChange("cows_dairy")}
                            placeholder=""
                            autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                            {formikProps.touched.cows_dairy &&
                            formikProps.errors.cows_dairy}
                        </Text>
                    </View>
                  </View>

                  <View style={{flexDirection:'row'}}>
                      {/* item */}
                    <View style={{flex:1, alignSelf:'flex-start', paddingRight:30}}>
                        <Input
                            label="Sheep"
                            description='(No. of sheep)'
                            value={this.state.farmer.sheep}
                            onChangeText={formikProps.handleChange("sheep")}
                            placeholder=""
                            autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                            {formikProps.touched.sheep &&
                            formikProps.errors.sheep}
                        </Text>
                    </View>

                    {/* item */}
                    <View style={{flex:1, alignSelf:'flex-end',paddingLeft:30}}>
                        <Input
                            label="Goats"
                            description="(No. of goats)"
                            value={this.state.farmer.cows_dairy}
                            onChangeText={formikProps.handleChange("goats")}
                            placeholder=""
                            autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                            {formikProps.touched.goats &&
                            formikProps.errors.goats}
                        </Text>
                    </View>
                  </View>

                  <View style={{flexDirection:'row'}}>
                      {/* item */}
                    <View style={{flex:1, alignSelf:'flex-start', paddingRight:30}}>
                        <Input
                            label="Chicken Broiler"
                            description="(No. of chicken for meat production)"
                            value={this.state.farmer.chicken_boilers}
                            onChangeText={formikProps.handleChange("chicken_boilers")}
                            placeholder=""
                            autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                            {formikProps.touched.chicken_boilers &&
                            formikProps.errors.chicken_boilers}
                        </Text>
                    </View>

                    {/* item */}
                    <View style={{flex:1, alignSelf:'flex-end',paddingLeft:30}}>
                        <Input
                            label="Chicken Layer"
                            description="(No. of chicken for egg production)"
                            value={this.state.farmer.chicken_layer}
                            onChangeText={formikProps.handleChange("goats")}
                            placeholder=""
                            autoCapitalize="none"
                        />
                        <Text style={{ color: "#E53A40", width: "75%" }}>
                            {formikProps.touched.chicken_layer &&
                            formikProps.errors.chicken_layer}
                        </Text>
                    </View>
                  </View>

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <Button title="Next" onPress={formikProps.handleSubmit} />
                  )}
                </Fragment>
              )}
            </Formik>
          </SafeAreaView>
          <View style={{marginTop:'10%', flexDirection:'row'}}>
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
