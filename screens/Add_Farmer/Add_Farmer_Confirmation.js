import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { Input } from "../../components/Input";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { Formik } from "formik";
import * as yup from "yup";


export default class Add_Farmer_Confirmation extends React.Component {
  state = {
    farmer: {
      prefix: this.props.navigation.state.params.prefix,
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      phone: this.props.navigation.state.params.phone,
      id: this.props.navigation.state.params.id,
      photo: this.props.navigation.state.params.photo,
      address: this.props.navigation.state.params.address,
      city: this.props.navigation.state.params.city,
      district: this.props.navigation.state.params.district,
      same_as_physicall_address: this.props.navigation.state.params.same_as_physical_address,
      physical_street_address: this.props.navigation.state.params.physical_street_address,
      physical_city: this.props.navigation.state.params.physical_street_address,
      physical_district: this.props.navigation.state.params.physical_street_address,
      land_ownership_rental: this.props.navigation.state.params.land_ownership_rental,
      plot_size: this.props.navigation.state.params.plot_size,
      primary_crop: this.props.navigation.state.params.primary_crop,
      primary_crop_area: this.props.navigation.state.params.primary_crop_area,
      is_secondary_crop: this.props.navigation.state.params.is_secondary_crop,
      secondary_crop: this.props.navigation.state.params.secondary_crop,
      secondary_crop_area: this.props.navigation.state.params.secondary_crop_area,
      currently_farming: this.props.navigation.state.params.currently_farming,
      mo_farming_prod_income: this.props.navigation.state.params.mo_farming_prod_income,
      water_access: this.props.navigation.state.params.water_access,
      yield: this.props.navigation.state.params.yield,
      has_livestock:this.props.navigation.state.params.has_livestock,
      cows_beef: this.props.navigation.state.params.cows_beef,
      cows_dairy: this.props.navigation.state.params.cows_dairy,
      sheep: this.props.navigation.state.params.sheep,
      goats: this.props.navigation.state.params.goats,
      chicken_broiler: this.props.navigation.state.params.chicken_broiler,
      chicken_layer: this.props.navigation.state.params.chicken_layer,
      is_receipt_gov_funding: this.props.navigation.state.is_receipt_gov_funding,
      receipt_gov_funding: this.props.navigation.state.receipt_gov_funding,
      active_bank_acc: this.props.navigation.state.active_bank_acc,
      mobile_money_access: this.props.navigation.state.mobile_money_access,
      attend_training: this.props.navigation.state.attend_training
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
      <View style={styles.container}>
        <View style={screenTitle.container}>
          <Text style={screenTitle.main}>Congrats!</Text>
          <Text style={screenTitle.sub}>You successfully registered a farmer</Text>
        </View>

        <View style={styles.form}>
          <SafeAreaView>
            {/* <View style={{width:'70%'}}> */}
              <Image
                source={require('../../assets/imgs/animat-checkmark-color.gif')}
                style={{alignSelf:'center', width:'70%', height:'70%'}}
              />
            {/* </View> */}
            <Button
              title="< Go Back Home"
              onPress={()=>this.props.navigation.navigate("Home")}
            />
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
  titles: {
    fontFamily: "Rubik Medium",
    color: "#fcb040",
    fontSize: 15,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  description:{}
});
