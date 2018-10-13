import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import TabHeader from '../../component/tabHeader';
import LoginModal from '../../component/login'
import { APPEARANCES, DIMENSION } from '../../module';
import PrimaryButton from '../../component/primaryButton';
import RatingComponent from '../../component/rating';
import { StackActions } from 'react-navigation';
export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }
  triggerModal() {
    this.setState(prevState => {
      return {
        display: true
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TabHeader
          iconPressed={() => this.props.navigation.goBack()}
          icon={'cancel'}
          headerTittle={'Review'}
        />
       <View style = {{paddingHorizontal:20}}>
       <RatingComponent
        givenStar = {(value) => console.log(value)}
        ratable = {true}
         />
       </View>
       <View style={[{paddingTop:15},APPEARANCES.SHADOW]}>
          <TextInput
            autoFocus={true} 
            multiline={true}
            maxLength = {500}
            placeholder={'I Think...(500 characters)'}
            style={styles.reviewBox} />
        </View>
        <PrimaryButton 
        
        pressed = {() => 
          this.triggerModal()
        }
        tittle = {'Submit'}/>
            <Modal
                visible={this.state.display}
                animationType="slide"
                onRequestClose={() => Alert("Hello")}>
                <View style = {styles.modalView}>
                    <Text>
                      Login
                    </Text>
                    <TextInput style ={styles.textInputStyle}>

                    </TextInput>
                    <TextInput style ={styles.textInputStyle}>

                    </TextInput>
                    <TouchableOpacity
                        onPress={() => this.setState({display: false})}
                        style={{ width: 150, height: 45, backgroundColor: 'green' }}>
                        <Text>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
      </View>
    );
  }
}

const styles = {
  textInputStyle: {
    width:DIMENSION(80), height: 45, borderBottomWidth: 1, borderBottomColor: 'black'
  },
  modalView: {
    backgroundColor:'#f3f3f3',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewBox: {
    padding: 20,
    color: '#333',
    fontSize: 16,
    width:DIMENSION(100),
    height: DIMENSION(70),
  },
  submitButton:{
    padding:15,
    backgroundColor:'red',
    marginHorizontal: 15,
  }
}
