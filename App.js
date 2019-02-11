/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import Header from './header'

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
          <Icone escolha={this.state.escolhaComp} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUser} jogador='Usuario'></Icone>          
        </View>
        
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
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  botao: {
    width: 90
  },
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
  icone:{
    alignItems: 'center',
    marginBottom: 10
  },
  textJogador:{
    fontSize: 18
  }
});

class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.icone}>
          <Text style={styles.textJogador}>{this.props.jogador}</Text>
          <Image source={require('./pedra.png')} />
        </View>
      )
    }else if( this.props.escolha == 'papel'){
      return(
        <View style={styles.icone}>
          <Text style={styles.textJogador}>{this.props.jogador}</Text>
          <Image source={require('./papel.png')} />
        </View>
      )
    }else if(this.props.escolha == 'tesoura'){
      return(
        <View style={styles.icone}>
          <Text style={styles.textJogador}>{this.props.jogador}</Text>
          <Image source={require('./tesoura.png')} />
        </View>
      )
    }else{
      return false
    }
  }
}