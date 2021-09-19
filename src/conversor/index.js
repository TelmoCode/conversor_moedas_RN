import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from  'react-native';


class Conversor extends Component{
// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=9448fef49edf6bb516e5

constructor(props){
  super(props);
  this.state={

    resultado: 10.0

  }
  this.converter=this.converter.bind(this)

}

converter(){

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
              onChange={() => {}}
            />
      
            <TouchableOpacity style={styles.btnArea}>
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
    backgroundColor: '#090',
    borderColor:'#040',
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