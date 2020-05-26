import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  AsyncStorage
} from "react-native";
import RNSmtpMailer from "react-native-smtp-mailer";
import EmailSender from 'react-native-smtp';
import { MiniButton } from '../components/MiniButton';
import { FarmerId } from '../components/FarmerId';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import * as firebase from "firebase";
import { Button } from "../components/Button";

export default class Home extends React.Component {
  state = {
    display_name: "",
    email: "",
    user_type: "Super User",
    farmers: [],
    mysql:[],
    local:[],
    loader: true,
    };

  componentDidMount() {
    this.loadFirebaseCredentials()
    .then(this.loadmySQLDB)
    .then(this.updateFarmers)
    .then(this.updatemySQLDB)
  }

  loadFirebaseCredentials = async() => {
    setTimeout(() => {
      const { email, displayName } = firebase.auth().currentUser;
      this.setState({ email, display_name:displayName});
    }, 750);
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

 loadmySQLDB = async () => {
  fetch('https://tgrow-node-server.herokuapp.com/', {
    method: 'GET',
    headers: {'Content-Type': 'application/json',}})
    .then((response) => response.json())
    .then((dataList) => {
      var farmersList = [];
      dataList.forEach(data=>{
        farmersList.push(
          {
            id: data.id,
            name: data.farmer_name,
            farm_city: data.farm_city,
            farm_country: data.farm_coutry,
            profile_img: data.farmer_profile_img
          }
        )
      })
      this.setState({
        farmers: farmersList,
        mysql: dataList
      })
      // console.log('done');
    })
    .then(()=>{this.setState({loader:false})})
    .then(this.saveToLocalStorage)
    .catch((error) => {
      console.log(error);
      this.backupDB();
    })
}

saveToLocalStorage = () => {
  var farmerList = this.state.mysql;
  AsyncStorage.setItem('farmer', JSON.stringify(farmerList))
  .then(()=> AsyncStorage.getItem('farmer'))
  .then(farmers => {
    var localFarmerData = JSON.parse(farmers);
    this.setState({local:localFarmerData});
  })
}

backupDB = () =>{
  var localStorage = this.state.local;
  var farmersList = [];
  localStorage.forEach(local=>{
    farmersList.push(
      {
        id: local.id,
        name: local.farmer_name,
        farm_city: local.farm_city,
        farm_country: local.farm_coutry,
        profile_img: local.farmer_profile_img
      }
    )
  })
  this.setState({
    farmers: farmersList,
  })
}

updateFarmers = async() => {
  let newFarmer = this.props.navigation.getParam('added_farmer', '');
  if(!!newFarmer){
    var joined = this.state.local.concat(newFarmer);
    this.setState({ local: joined })
  }
  this.updatemySQLDB();
}

updatemySQLDB = () => {
  var mySQLData = this.state.mysql;
  var localData = this.state.local;
  let diffInDB = localData.filter(local => !localData.find(sql => local.id === sql.id));
  diffInDB.forEach(diff=>{
    fetch('https://tgrow-node-server.herokuapp.com/addFarmer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diff)
    })
      .then((response) => response.json())
      .then((data) => {console.log(data);})
      .catch((error) => {console.log(error);})
  })
}

  toFarmerProfile = (data) => {    
    this.props.navigation.navigate("Farmer",{
      id: data.id,
      name: data.name,
      farm_city: data.farm_city,
      farm_country: data.farm_country,
      img: data.img
    });  
  }

  render() {
    // console.log(this.state.local)
    const {navigate} = this.props.navigation;
    let registeredFarms = this.state.farmers.length;

    return (
    <View style={styles.container}>
        <View style={header.container}>
          <View style={header.setting}>
            {/* left section - user title */}
            <View style={header.section}>
              {/* <View style={{flexDirection:'column'}}> */}
              <Text style={header.amount}>{registeredFarms}</Text>
              <Text style={header.registered}>Registered Farms</Text>
              {/* </View> */}
              <Text style={header.user_name}>{this.state.display_name}</Text>
              <Text style={header.user_type}>{this.state.user_type}</Text>
            </View>
            <View style={header.section2}>
              <Image
                source={require("../assets/imgs/farmicon.png")}
                style={header.image}
              />
            </View>
          </View>
        </View>
        <View style={section.container}>
          <View style={{ width: "80%", height: 35 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{width: "30%", borderRightWidth: 1, borderRightColor: "#eeefe9", alignItems: "flex-start", justifyContent: "center",}}>
                <Text style={section.text}>Name</Text>
              </View>
              <View style={{ width: "50%", alignItems: "center", justifyContent: "center", }} >
                <Text style={section.text}>Region</Text>
              </View>
              <View style={{ width: "20%", borderLeftWidth: 1, borderLeftColor: "#eeefe9", alignItems: "flex-end", justifyContent: "center", }} >
              </View>
            </View>
          </View>
        </View>
        {/* <Button title="logout" onPress={this.signOutUser} /> */}
        {/* <Button title="addmysql" onPress={this.postData} /> */}
        <ScrollView style={styles.scroll_view}>
          {this.state.farmers.map((farmer, idx) =>(
            
            <View key={idx}>
              <FarmerId
                name={farmer.name}
                farm_city={farmer.farm_city}
                farm_country={farmer.farm_country}
                onPress={() => this.toFarmerProfile(farmer)}
              />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.add_farmer}
          onPress={() => this.props.navigation.navigate("Add_Farmer_Step1", { agent: this.state.display_name, })}>
          {/* <FontAwesomeIcon
            icon={faPlus}
            size={22}
            style={{ alignSelf: "center", color: "#fff" }}
          /> */}
          <Text style={{color:'#fff',fontFamily: "Rubik Medium",fontSize: 15,}}>Add Farmer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    paddingTop:'5%'
  },
  scroll_view:{
      width:'100%',
  },
  add_farmer:{
    width:120, 
    height:60, 
    position:'absolute', 
    justifyContent:'center', 
    backgroundColor:'#ffba5a', 
    borderRadius:100, 
    bottom:'5%', 
    right:'5%',
    alignItems: 'center'
  }
});

const section = StyleSheet.create({
    container:{
      width:'100%',
      height:60,
      backgroundColor:'#fff',
      borderTopWidth:1,
      borderTopColor:'#eeefe9',
      alignItems:'center',
      alignContent:'center',
      justifyContent: "center",
      shadowOpacity: 0.1,
      shadowRadius: 1.84,
      elevation: 0.5,
    },
    text:{
        fontFamily: "Rubik Medium",
        fontSize: 15,
        color: "#c6c6c6",
    }

})

const header = StyleSheet.create({
    container: {
    width: '100%',
    height:'25%',
    backgroundColor: "#fff",
    borderBottomWidth:1,
    borderBottomColor:'#f8f8f8'
    },
    setting:{
        flex: 1,
        flexDirection:'row'
    },
    section:{
        width:'45%',
        paddingLeft: '5%',
        paddingRight:'5%',
        justifyContent: "center",
        // alignItems: "center",
    },    
    section2:{
        width:'55%',
        paddingLeft: '5%',
        paddingRight:'5%',
        justifyContent: "center",
        // alignItems: "center",
    },
    amount:{
        fontFamily: "Rubik Light",
        fontSize: 45,
        color: "#252525"
    },
    registered:{
        fontFamily: "Rubik Light",
        fontSize: 14,
        color: "#252525",
        // paddingTop:'20%',
        // marginLeft: '5%'
    },
    user_name:{
        fontFamily: "Rubik Medium",
        fontSize: 14,
        color: "#252525",
        marginTop:'10%'
    },
    user_type:{
        fontFamily: "Rubik Light",
        fontSize: 14,
        color: "#252525",
    },
    image:{
        width: 300,
        height: '100%',
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -50,
    }
  });
