import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import TabHeader from '../../component/tabHeader';
import { APPEARANCES, DIMENSION } from '../../module';
import PrimaryButton from '../../component/primaryButton';
import RatingComponent from '../../component/rating';
export default class AddDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description:null,
    };
  }


  submit = () => {
    this.props.navigation.state.params.insertDescription(this.state.description);
    this.props.navigation.goBack()
}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TabHeader
          iconPressed={() => this.props.navigation.goBack()}
          icon={'cancel'}
          headerTittle={'Description'}
        />
       <View style = {{paddingHorizontal:20}}>
       </View>
        <View style={[{paddingTop:15},APPEARANCES.SHADOW]}>
          <TextInput
            value = {this.props.navigation.state.params.description}
            onChangeText= {(value) => this.setState({description:value}) }
            autoFocus={true} 
            multiline={true}
            maxLength = {1000}
            placeholder={'Description...(1000 characters)'}
            style={styles.reviewBox} />
        </View>
        <PrimaryButton 
        
        pressed = {() => {
          this.submit()
        }}
        tittle = {'Submit'}
        />
      </View>
    );
  }
}

const styles = {
  reviewBox: {
    padding: 20,
    color: '#333',
    fontSize: 16,
    width:DIMENSION(100),
    height: DIMENSION(80),
  },
  submitButton:{
    padding:15,
    backgroundColor:'red',
    marginHorizontal: 15,
  }
}
