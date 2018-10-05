//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import { COLORS, DIMENSION,  } from '../../module';
import TabHeader from '../../component/tabHeader';

class LoginScreen extends Component {
   

    render() {
      
        return (
            <View style={{ flex: 1 }}>

            </View>

        );
    }
}

const styles = StyleSheet.create({
 
   
    acceptButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '900'
    },
    acceptButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: 'red',
        marginTop: 25,
        borderRadius: 12,
        backgroundColor: '#1DC263'
    },
  
    policy: {
        flex: 1,
        marginHorizontal: 15,
    },
   
    textInput: {
        paddingVertical: DIMENSION(2),
        paddingHorizontal: DIMENSION(6),
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,1)'
    },

    label: {
        width: DIMENSION(40),
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
    },

    textBox: {
        color: COLORS.TEXT_DARK,
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(50),
        height: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
    },
    form: {
        marginTop: 10,
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    body: {
        flex: 1,
    },
});
export default LoginScreen;
