//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import firebase from 'react-native-firebase'

// create a component
class CheckLoginScreen extends Component {
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

    onSubmitButtom = () => {
        if (this.state.titleLabel == "Login") {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() =>
                    this.props.navigation.navigate("Me")
                ).catch(error => alert(error))
            this.setState({ display: false })

        } else {
            console.log('Register')
            if (this.state.password == this.state.retrypassword) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(() =>
                        this.props.navigation.navigate("Me")
                    ).catch(error => alert(error))
                this.setState({ display: false })
            } else {
                this.setState({ message: "Password Not Match" })
            }
        }
    }
    render() {
        return (
            <View
                style={{ flex: 1 }}
            >
                <View style={styles.modalView}>
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
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
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
});

//make this component available to the app
export default CheckLoginScreen;
