import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'
import { MiniButton } from '../../components/MiniButton';

import * as firebase from "firebase";

export default class Home extends React.Component {
  state = {
    email: "",
    displayName: "",
    farmers: [
      {
        id: "1234",
        location: "21 Jump St",
        func: "open"
      },
      {
        id: "5678",
        location: "21 Jump St",
        func: "open"
      },
      {
        id: "91011",
        location: "21 Jump St",
        func: "open"
      }
    ],
    selected:""
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  setFarmerID(id) {
    this.setState({selected: id});
    this.props.navigation.navigate("Farmer", {
      selected: id,
    });  
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={welcome.container}>
            <Text style={welcome.text}>Hi {this.state.displayName}!</Text>
          </View>

          {/*status container*/}
          <View style={status.container}>
            {/*staus box*/}
            <View style={status.box}>
              <View style={status.content}>
                <View style={icon.knightContainer}>
                  <FontAwesomeIcon
                        icon={faChessKnight}
                        style={icon.knightIcon}
                        size={22}
                      />
                </View>
                <Text style={status.number}>22</Text>
                <Text style={status.text}>Registered farms</Text>
              </View>
            </View>
            {/*staus box*/}
            <View style={status.box}>
              <View style={status.content}>
                <View style={icon.checkContainer}>
                  <FontAwesomeIcon icon={ faCheck } style={ icon.checkIcon } size={22}/>
                </View>
                <Text style={status.number}>19</Text>
                <Text style={status.text}>Approved farms</Text>
              </View>
            </View>
          </View>

             <Text style={idBox.title}>Latest Approved Farmers</Text>
           <View style={idBox.container}>
            {this.state.farmers.map((farmer, idx) => (
              <View style={idBox.boxContainer} key={idx}>
                <View style={idBox.seperate}>
                  <View style={idBox.third}>
                    <Text style={idBox.text}>{farmer.id}</Text>
                  </View>
                  <View style={idBox.third}>
                    <Text style={idBox.text}>{farmer.location}</Text>
                  </View>
                  <View style={idBox.third}>
                    <MiniButton 
                    title='Open'
                    value={this.state.selected}
                    // onPress={()=>this.setFarmerID(farmer.id)}
                    onPress={() => navigate('Farmer')}
                     />
                      {/* <Text style={idBox.link} onPress={() => this.props.navigation.navigate("Login")}>{farmer.func}</Text> */}
                  </View>
                </View>
              </View>
            ))}
          </View>
          {/* {console.log(this.state)} */}
          {/* <Text>Hi {this.state.email}!</Text>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
  }
}

const idBox = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
    paddingBottom: 10
  },
  title:{
    fontFamily: "Rubik Medium",
    fontSize: 18,
    color: "#8798ad",
    textAlign:'left',
    marginLeft:'5%',
    marginBottom:'5%'
  },
  boxContainer: {
    width: "95%",
    height: 80,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#bfc7d36b",
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: "rgba(135, 152, 173, 0.35)",
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  seperate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  third: { width: "33.3333%", alignItems: "center" },
  text: {
    fontFamily: "Rubik Light",
    fontSize: 16,
    color: "#8798ad"
  },
  link: {
    fontFamily: "Rubik Light",
    fontSize: 16,
    color: "#fcb040"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa"
  }
});

const welcome = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
    // borderWidth:1,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    // borderColor:'#bfc7d36b',
  },
  box: {
    // width: "50%",
    // height: 100,
    backgroundColor: "#fff"
    // borderBottomLeftRadius: 10
  },
  text: {
    fontFamily: "Rubik Light",
    fontSize: 22,
    color: "#8798ad",
    marginTop: "5%"
  }
});

const icon = StyleSheet.create({
  checkContainer: {
    backgroundColor: "#a7e9af",
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  knightContainer: {
    backgroundColor: "#fdd365",
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  checkIcon: {
    color: "#2b90d9"
  },
  knightIcon: {
    color: "#F6B352"
  }
});

const status = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
    paddingBottom: 50,
    marginTop: 10
  },
  box: {
    width: "45%",
    height: 200,
    backgroundColor: "#fff",
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#bfc7d36b",
    borderRadius: 5,
    shadowColor: "rgba(135, 152, 173, 0.35)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingTop: 20,
    paddingLeft: 10
  },
  content: {
    marginTop: 10,
    marginLeft: 10
  },
  number: {
    fontFamily: "Rubik Light",
    color: "#2e384d",
    fontSize: 32,
    marginTop: 15,
    marginLeft: 10
  },
  text: {
    fontFamily: "Rubik Light",
    color: "#8798ad",
    fontSize: 16,
    marginLeft: 10
  }
});