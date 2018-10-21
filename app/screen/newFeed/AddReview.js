import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import TabHeader from '../../component/tabHeader';
import { APPEARANCES, DIMENSION } from '../../module';
import PrimaryButton from '../../component/primaryButton';
import RatingComponent from '../../component/rating';
import { observer, inject } from 'mobx-react'
import firebase from 'react-native-firebase'

@inject('user')
@observer

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }
  componentDidMount() {
    // this.setState({gmail: this.props.user.getCurrentUser()})

  }

  onSubmitButtom = () => {
   
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TabHeader
          iconPressed={() => this.props.navigation.goBack()}
          icon={'cancel'}
          headerTittle={'Review'}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <RatingComponent
            givenStar={(value) => console.log(value)}
            ratable={true}
          />
        </View>
        <View style={[{ paddingTop: 15 }, APPEARANCES.SHADOW]}>
          <TextInput
            autoFocus={true}
            multiline={true}
            maxLength={500}
            placeholder={'I Think...(500 characters)'}
            style={styles.reviewBox} />
        </View>
        <PrimaryButton
          pressed={() =>
            this.onSubmitButtom()
          }
          tittle={'Submit'} />
      </View>
    );
  }
}

const styles = {
  registerLabel: {
    fontSize: 24
  },
  loginLabel: {
    fontSize: 24
  },
  textInputStyle: {
    width: DIMENSION(80),
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginTop: 20
  },
  modalView: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewBox: {
    padding: 20,
    color: '#333',
    fontSize: 16,
    width: DIMENSION(100),
    height: DIMENSION(70),
  },
  submitButton: {
    padding: 15,
    backgroundColor: 'red',
    marginHorizontal: 15,
  }
}
