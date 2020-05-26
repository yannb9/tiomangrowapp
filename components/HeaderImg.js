import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

export function HeaderImg() {
  return (
    <View style={header.welcomeContainer}>
      <Image
        source={require('../assets/imgs/tglogo.png')}
        style={header.welcomeImage}
      />
    </View>
  );
}

const header = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
})
