/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {escolhaUser: '', escolhaComp: '', result:''}
  }
  jokenpo = (escolhaUser)=>{
 
    let acoes = ['pedra', 'papel', 'tesoura']
    let comp = acoes[Math.floor(Math.random() * 3)];
    
    let resultado ;
    
    if( escolhaUser == 'pedra' && comp == 'tesoura'){
      resultado =  'Usuario venceu'
    }else if( escolhaUser == 'tesoura' && comp == 'papel'){
      resultado = 'Usuario venceu'
    }else if( escolhaUser == 'papel' && comp == 'pedra'){
      resultado = 'Usuario venceu'
    }else if( escolhaUser == comp){
      resultado = 'empataram'
    }else{
      resultado = 'Computador Venceu'
    }
    this.setState({result: resultado, escolhaUser: escolhaUser, escolhaComp: comp })
    
  }
  render() {

    return (
      <View style={styles.container}>

        <Text>
          Escolha do Computador: {this.state.escolhaComp}
        </Text>
        <Text>
          Escolha do Usuário : {this.state.escolhaUser}
        </Text>
        <Text>
          Resultado: {this.state.result}
        </Text>
        <Button title='pedra' onPress={() => {this.jokenpo('pedra')}} />
        <Button title='papel' onPress={() => {this.jokenpo('papel')}} />
        <Button title='tesoura' onPress={() => {this.jokenpo('tesoura')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  botao: {
    textAlign: 'center',
    backgroundColor: '#00f',
    color: '#000',
    padding: 20,
  },
});
