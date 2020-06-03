import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Linking,
  Platform, 
  TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { InfoCard } from "../components/InfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import * as firebase from "firebase";
const customStyle = require('../mapstyle.json');

export default class Farmer extends React.Component {
  state = {
    id: this.props.navigation.state.params.id,
    name: this.props.navigation.state.params.name,
    farm_name:this.props.navigation.state.params.farm_name,
    img: this.props.navigation.state.params.img,
    latitude: -28.4792625 ,
    longitude: 24.6727135,
    latDelta: 1,
    longDelta: 1,
    entries:[]
  };

  componentDidMount() {
    this._loadmySQLDB();
    
  }

  _loadmySQLDB = async () => {
    await fetch('https://tgrow-node-server.herokuapp.com', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((dataList) => {
        var _entries = [];
        dataList.forEach(data=>{
          if (data.id === this.state.id) {
            if (!!data.farm_latitude && !!data.farm_longitude) {
              this.setState({
                latitude: data.farm_latitude,
                longitude: data.farm_longitude,
                latDelta: 0.015,
                longDelta: 0.0121
              })
            } else {
              console.log('its null');
            }
            _entries.push({
              title:'FARM AREA', 
              label_1:'LATITUDE',
              value_1: this.state.latitude,
              label_2:'LONGITUDE',
              value_2:this.state.longitude,
              label_3:'COUNTRY',
              value_3:data.farm_country,
              label_4:'ZIP CODE',
              value_4:data.farm_zip,
            },
            {
              title:'FARMING', 
              label_1:'CURRENTLY FARMING',
              value_1:data.farming,
              label_2:'WATER ACCESS',
              value_2:data.water_access,
              label_3:'PLOT SIZE',
              value_3: `${data.plot_size} HA`,
              label_4:'YIELD',
              value_4: `${data.yield} HA`,
            },
            {
              title:'PRODUCT INCODE/mo', 
              label_1:'CURRENT',
              value_1:`$${data.monthly_farming_produce_income}`,
              label_2:'EXPECTED',
              value_2:'$15,000',
            },
            {
              title:'CROP', 
              label_1:'PRIMARY CROP',
              value_1:data.primary_crop,
              label_2:'PLANTED AREA',
              value_2: `${data.primary_crop_planted_area} MILES`,
              label_3:'PLANT DATE',
              value_3: `20/02/2019`,
              label_4:'SECONDARY CROP',
              value_4: data.secondary_crop,
              label_5:'PLANTED AREA',
              value_5: `${data.secondary_crop_planted_area} MILES`,
              label_6:'PLANT DATE',
              value_6: `20/02/2019`,
            },
            {
              title:'LIVESTOCK', 
              label_1:'COWS BEEF',
              value_1: data.cows_beef,
              label_2:'COWS DAIRY',
              value_2: data.cows_dairy,
              label_3:'CHICKEN BOILERS',
              value_3: data.chicken_boilers,
              label_4:'CHICKEN LAYERS',
              value_4: data.chicken_layers,
              label_5:'SHEEP',
              value_5: data.sheep,
            })
            this.setState({entries:_entries})
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  _renderItem = ({item, index}) => {
    return (
        <InfoCard 
        title = {item.title}
        label_1={item.label_1} 
        value_1={item.value_1}
        label_2={item.label_2} 
        value_2={item.value_2}
        label_3={item.label_3} 
        value_3={item.value_3} 
        label_4={item.label_4} 
        value_4={item.value_4} 
        />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={{
            flex:1,
            flexDirection: 'column',
            position:'absolute',
            zIndex:1,
            width:20,
            height:20,
            backgroundColor:'#fff',
            borderWidth:1,
            borderColor:'#eeefe9',
            marginLeft:'5%',
            marginTop:'5%',
            borderRadius:100,
            alignContent:'center',
            justifyContent: 'center'
            }}
            onPress={() => this.props.navigation.navigate('Home')}
            >
            <FontAwesomeIcon icon={ faAngleLeft } size={ 22 } style={{alignSelf:'center'}}/>
          </TouchableOpacity>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: this.state.latDelta,
              longitudeDelta: this.state.longDelta
            }}
            customMapStyle={customStyle}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
              image={require('../assets/imgs/location_pin.png')}
            />
            
          </MapView>
          {/* profile container */}
          <View style={user.container}>
            <View style={user.profilePic}>
              <View style={user.profileCtn}>
                {this.state.img != null ? (
                  <Image
                  source={this.state.img}
                  style={{ width: "100%", height: "100%", borderRadius: 100 }}
                />
                ) :(
                  <View style={{width:"100%",height:"100%",borderRadius: 100, border:1, borderColor:"#ccc"}}>
                  <Image
                    source={require('../assets/imgs/tglogo.png')}
                    style={{ width: "70%", height: "70%" }}
                />
                  </View>

                )}
              </View>
            </View>

            <View style={user.profileTxt}>
            <Text style={user.profileName}>{this.state.name}</Text>
              <Text style={user.profileType}>Farmer</Text>
            <Text style={user.profileLocation}>{this.state.farm_name}</Text>
            </View>

            {/* <View>
              <View>
                <Text style={{ fontFamily: "Rubik Medium" }}>Approved</Text>
              </View>
            </View> */}
          </View>


          <View style={{width:'95%',height:350, alignItems:'center',alignSelf: "center", padding:'5%'}}>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={1400}
                itemWidth={350}
                layout={'default'}
              />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const user = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "95%",
    height: 100,
    marginTop: -50,
    alignSelf: "center",
    shadowColor: "rgba(135, 152, 173, 0.35)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    borderWidth: 1,
    borderColor: "#bfc7d36b",
    borderRadius: 10,
    padding: 10
  },
  profilePic: {
    width: "30%",
  },
  profileTxt: {
    width: "40%",
    alignSelf: "center",
    
  },
  profileCtn: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    marginRight:20
  },
  profileName: {
    fontFamily: "Rubik Medium",
    fontSize: 18,
    color: "#252525"
  },
  profileType: {
    fontFamily: "Rubik Light",
    fontSize: 16,
    color: "#8798ad"
  },
  profileLocation: {
    fontFamily: "Rubik Light",
    fontSize: 16,
    color: "#8798ad"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fafafa",
    marginTop:'5%',
  },
  map:{
    backgroundColor: '#000',
    alignSelf: 'stretch',
    height: 550,
    alignItems: "center",
  },
});
