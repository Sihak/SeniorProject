import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { DIMENSION, COLORS, APPEARANCES } from '../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


//Property: backButton, backPressed,headerTittle,rightIcon,rightPressed

export default class PrimaryHeader extends Component {

    render() {
        return (
            <View style={[styles.headerContainer,{backgroundColor:this.props.backgroundColor}]}>
                <SafeAreaView style={styles.header}>
                    <View style={styles.row} >
                        <TouchableOpacity
                        onPress = {() => this.props.backPressed()}
                        >
                            <MaterialIcons name={'keyboard-arrow-left'} style={styles.icon} />
                        </TouchableOpacity>
                        <Text style={styles.headerTittle}>{this.props.headerTittle.toUpperCase()}</Text>
                        {
                            this.props.rightIcon ?
                                <TouchableOpacity
                                    onPress={() => this.props.rightPressed()}
                                >
                                    <MaterialIcons
                                        name={this.props.rightIcon} style={styles.rightIcon} />
                                </TouchableOpacity>

                                : <View></View>
                        }

                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = {
    rightIcon: {
        fontSize: 34,
        color: COLORS.HEADER_TEXT_COLOR
    },
    icon: {
        color: '#333',
        fontWeight: '900',
        fontSize: 45
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: COLORS.PRIMARY_COLOR,
    },
    header: {
        width: DIMENSION(95),
        height: DIMENSION(25),
        justifyContent: 'center',
        paddingHorizontal: APPEARANCES.PADDING_HORIZONTAL,
    },
    headerTittle: {
        color: '#333',
        fontWeight: '800',
        fontSize: 22,
        marginRight: DIMENSION(6),
    }
}


