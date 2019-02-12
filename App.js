/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Header from './src/components/header'
import Icone from './src/components/icone'

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
      resultado =  'Você ganhou'
    }else if( escolhaUser == 'tesoura' && comp == 'papel'){
      resultado = 'Você ganhou'
    }else if( escolhaUser == 'papel' && comp == 'pedra'){
      resultado = 'Você ganhou'
    }else if( escolhaUser == comp){
      resultado = 'empataram'
    }else{
      resultado = 'Você perdeu'
    }
    this.setState({result: resultado, escolhaUser: escolhaUser, escolhaComp: comp })
}
  
  render() {

    return (
      <View>
        <Header/>
        <View style={styles.painelAcoes}>
            <View style={styles.botao}>
                <Button title='pedra' onPress={() => {this.jokenpo('pedra')}} />
            </View>
            <View style={styles.botao}>
                <Button title='papel' onPress={() => {this.jokenpo('papel')}} />
            </View>
            <View style={styles.botao}>
                <Button title='tesoura' onPress={() => {this.jokenpo('tesoura')}} />
            </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.textResult}>
              {this.state.result}
          </Text>
          <Icone escolha={this.state.escolhaComp} jogador='Computador'/>
          <Icone escolha={this.state.escolhaUser} jogador='Usuario'/>          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  palco:{
    alignItems: 'center',
    marginTop: 10,
  },
  textResult:{
      fontSize: 25, 
      fontWeight: 'bold',
      color: 'red',
      height: 60,
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  botao: {
      width: 90
  },
  
});

