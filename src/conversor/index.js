
import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from  'react-native';

import api from '../services/api';

class Conversor extends Component{

constructor(props){
  super(props);
  this.state={

    resultado: 0.0,
    moedaA : props.moedaA,
    moedaB: props.moedaB,
    moedaB_valor: 0


  }
  this.converter=this.converter.bind(this)

}
//convert?q=USD_BRL&compact=ultra&apiKey=9448fef49edf6bb516e5
async converter(){
  const {moedaA, moedaB} = this.props
  let de_para = moedaA +'_'+ moedaB
  const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=9448fef49edf6bb516e5`)
  const cotacao = response.data[de_para]
  let vresultado = (cotacao * parseFloat(this.state.moedaB_valor));
  //alert(vresultado)
  this.setState({resultado: vresultado.toFixed(2)})
  console.log(this.state.moedaB_valor)
  
}

    render(){
      const {moedaA , moedaB} = this.props
        return (
          <View style={styles.conteiner}>
            <Text style={styles.titulo}>
              Converter de {moedaA} para {moedaB}
            </Text>

            <TextInput
              placeholder='Valor a ser convertido'
              keyboardType='numeric'
              style={styles.areaInput}
              onChangeText={(valor) => this.setState({moedaB_valor:valor
              })}
            />
      
            <TouchableOpacity 
            style={styles.btnArea}
            onPress={this.converter}
            >
              <Text style={styles.btnTexto}>Converter</Text>
            </TouchableOpacity>

            <Text style={styles.resultado}>{this.state.resultado}</Text>

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

  titulo:{
    fontSize:25,
    fontWeight: 'bold',
    marginBottom:50

  },
  
  areaInput:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000',
    backgroundColor:'#ccc',
    width: 300,
    height:50,
    marginTop:15,
    borderRadius:10,
    textAlign: 'center'
    
  },

  btnArea:{
    borderRadius:5,
    backgroundColor: '#00f',
    padding:10,
    marginTop:15

  },

  btnTexto:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'

  },

  resultado:{
    fontSize:40,
    fontWeight: 'bold',
    marginTop:40

  }
  
})

export default Conversor