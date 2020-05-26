import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { MiniButton } from "../../components/MiniButton";
import * as firebase from "firebase";

export default class Farmer extends React.Component {
  state = {
    id: "",
    latitude: null,
    longitude: null,
  };

  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 32.068691,
              longitude: 34.824807,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}>
          </MapView>
          {/* <View style={styles.map}></View> */}
          <View style={styles.user}></View>
        </ScrollView>
      </View>
    );
  }
}

const user = StyleSheet.create({
  container:{},
});

const styles2 = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
    height: 300,
    alignItems: "center",
  },
  user:{
    backgroundColor: '#fff',
    width:'85%',
    height:100,
    marginTop:-50,
    alignSelf: 'center',
    shadowColor: "rgba(135, 152, 173, 0.35)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    borderWidth: 1,
    borderColor: "#bfc7d36b",
    borderRadius: 10,
  }
});
