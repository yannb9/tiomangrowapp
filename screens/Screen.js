import React from 'react'
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimes, faMountain } from '@fortawesome/free-solid-svg-icons';


export default class Screen extends React.Component {
  state = {
    open:false
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
        <Button
        title='hello'
        onPress={()=>console.log('bitch')}
        style={{}}/>
      // <View style={styles.animatedBox}>
      //   {/* <View style={{flexDirection:'row', width:100, height:50}}>
      //     <View style={{width:55, height:55}}>
      //       <Image 
      //         source={require('../assets/imgs/profile.jpeg')}
      //         style={{ width: "100%", height: "100%", borderRadius: 10 }}
      //       />
      //     </View>
      //     <View style={{flexDirection:'column', width:400, marginLeft:'5%'}}>
      //       <Text style={styles.welcome}>Hi,</Text>
      //       <Text style={styles.welcome_name}>Yann Bohbot</Text>
      //     </View>
      //   </View>
      //   <View style={{flex:1, flexDirection:'column', marginTop:'20%'}}>
      //       <TouchableOpacity onPress={() => console.log('bitch')}>
      //           <View style={{flexDirection:'row', paddingTop:'5%', height:50}}>
      //               <FontAwesomeIcon icon={ faMountain } size={ 27 } />
      //               <Text style={styles.menu}>Dashboard</Text>
      //           </View>
      //       </TouchableOpacity>
      //   </View> */}
      // </View>
    );
  };


  render() {
    console.log(this.state.open)
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={75}
          animationTime={250}
          overlay={true}
          opacity={1}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.toggle}>
            <FontAwesomeIcon icon={ faBars } size={ 22 } style={this.state.open == true ? styles.menuOpen : styles.menuClose}/>
            <FontAwesomeIcon icon={ faTimes } size={ 22 } style={this.state.open == true ? styles.menuClose : styles.menuOpen}/>
          </TouchableOpacity>
        </MenuDrawer>
        <View style={this.state.open == true ? styles.menuOpen : styles.menuClose}>
          {/* <Button
            title="Press me"
            color="#f194ff"
            style={this.state.open == true ? styles.menuOpen : styles.menuClose}
            onPress={() => alert('Button with adjusted color pressed')}
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome:{
    fontFamily: "Rubik Medium",
    color: "#2e384d",
    fontSize: 22,
  },
  welcome_name:{
    fontFamily: "Rubik Light",
    color: "#2e384d",
    fontSize: 22,
    // lineHeight:40
  },
  menu:{
    fontFamily: "Rubik Medium",
    color: "#2e384d",
    fontSize: 18,
    marginLeft:'5%'
  },
  animatedBox: {
    flex: 1,
    marginTop:'5%',
    backgroundColor: "#fff",
    paddingTop: '50%',
    paddingLeft:'5%',
    zIndex:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toggle:{
    width:22,
    height:22,
    marginLeft:'5%',
    marginTop: '10%',
  },
  menuOpen:{
    display: 'none',
    alignSelf:'flex-start',
    zIndex:0,
    backgroundColor:'black'
    
  },
  menuClose:{
    display: 'flex',
    alignSelf:'flex-start',
    zIndex:0
  }
})