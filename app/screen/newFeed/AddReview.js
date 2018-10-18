import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import TabHeader from '../../component/tabHeader';
import LoginModal from '../../component/login'
import { APPEARANCES, DIMENSION } from '../../module';
import PrimaryButton from '../../component/primaryButton';
import RatingComponent from '../../component/rating';
import { StackActions } from 'react-navigation';
import { observer, inject } from 'mobx-react'
import firebase from 'react-native-firebase'

@inject('user')
@observer

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      login: false,
      titleLabel: 'Login',
      email: '',
      password: '',
      retrypassword: '',
      message: '',
      currentUser: '',
    };
  }
  componentDidMount() {
    // this.setState({gmail: this.props.user.getCurrentUser()})
    const { currentUser } = firebase.auth()
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.state.login = false
        this.setState({ currentUser: currentUser.email })
      } else {
        this.state.login = true
      }
    })
  }
  triggerModal() {

    this.state.titleLabel = "Login"
    if (this.state.login == true) {
      this.setState(prevState => {
        return {
          display: true
        }
      });
    } else {
      alert(this.state.currentUser)
    }

  }

  onSubmitButtom = () => {
    const { signupUser, signInUser } = this.props.user
    if (this.state.titleLabel == "Login") {
       firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() =>
          alert("Success")
        ).catch(error => alert(error))
        this.setState({ display: false })

    } else {
      console.log('Register')
      if (this.state.password == this.state.retrypassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() =>
            alert("Success")
          ).catch(error => alert(error))
          this.setState({ display: false })
      } else {
        this.setState({ message: "Password Not Match" })
      }
    }
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
            this.triggerModal()
          }
          tittle={'Submit'} />
        <Modal
          visible={this.state.display}
          animationType="slide"
          onRequestClose={() => Alert("Hello")}>

          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => this.setState({ display: false })}
              style={{ position: 'absolute', top: 40, left: 20 }}
            >
              <Text style={{ color: 'blue' }}>Cancel</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.setState({ titleLabel: 'Login' })}
              >
                <Text style={[styles.loginLabel, this.state.titleLabel == "Register" ? { color: 'gray' } : { color: '#333' }]}>
                  Login
                </Text>
              </TouchableOpacity>
              <View style={{ width: 2, height: 30, backgroundColor: 'gray', marginLeft: 30, marginRight: 30 }} />>
              <TouchableOpacity
                onPress={() => this.setState({ titleLabel: 'Register' })}
              >
                <Text style={[styles.registerLabel, this.state.titleLabel == "Login" ? { color: 'gray' } : { color: '#333' }]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: 'red' }}>
              {this.state.message}
            </Text>
            <View style={{ margin: 30 }}>
              <TextInput
                autoCapitalize="none"
                placeholder="Enter your Email"
                style={styles.textInputStyle}
                onChangeText={(text) => this.setState({ email: text })}
                />
              <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                placeholder="Enter your Password"
                style={styles.textInputStyle}
                onChangeText={(text) => this.setState({ password: text })}
              />

              {this.state.titleLabel == "Register" ?
                <TextInput
                  onChangeText={(text) => this.setState({ retrypassword: text })}
                  onEndEditing={() => { }}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Retry your Password"
                  style={styles.textInputStyle} /> : ""}
            </View>

            <TouchableOpacity
              onPress={() => this.onSubmitButtom()}
              style={{ width: 150, height: 45, backgroundColor: '#0099ff', marginTop: 30, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{ color: '#fff' }}
              >{this.state.titleLabel}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
