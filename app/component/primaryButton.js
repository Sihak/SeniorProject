import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS, APPEARANCES } from '../module'

//Properties: tittle,pressed
export default class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity 
      onPress = {() => this.props.pressed()}
      style = {[{backgroundColor:COLORS.POSITIVE_COLOR,justifyContent:'center',alignItems:'center',padding:12,marginHorizontal:15,marginVertical:10,borderRadius:10}, APPEARANCES.SHADOW]}>
        <Text style = {{color:COLORS.WHITE, fontSize:18,fontWeight:'900'}}>{this.props.tittle}</Text>
      </TouchableOpacity>
    );
  }
}
