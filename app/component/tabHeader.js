import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { DIMENSION, COLORS, APPEARANCES } from '../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//Property:  headerTittle, icon

export default class TabHeader extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <SafeAreaView style={styles.header}>
                    <View style={styles.row} >
                        <Text style={styles.headerTittle}>{this.props.headerTittle}</Text>
                        <TouchableOpacity
                        onPress = {() => this.props.iconPressed()}
                        >
                            <MaterialIcons style={styles.icon} name = {this.props.icon} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = {
    icon:{
        fontSize:36
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: COLORS.TAB_HEADER_BACKGROUND,
    },
    header: {
        width: DIMENSION(95),
        height: DIMENSION(25),
        justifyContent: 'center',
        paddingHorizontal: APPEARANCES.PADDING_HORIZONTAL,
    },
    headerTittle: {
        color: COLORS.TEXT_BLACK,
        fontWeight: '800',
        fontSize: 26,
        marginLeft: 10,
    }
}


