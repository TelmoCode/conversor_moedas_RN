import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Conversor from './src/conversor'

export default class App extends Component {

 render(){
  return (
    <View style={styles.conteiner}>
      <Conversor moedaA="USD" moedaB="BRL"/>
    </View>
   );
 }
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'

  },

  texto:{
    fontSize:40,
    fontWeight: 'bold'
  }
  
})