import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';


class header extends Component{
    render(){
        return(
            <View>
                <Image source={require('./jokenpo.png')}/>
            </View>
        )
    }
}

export default header;