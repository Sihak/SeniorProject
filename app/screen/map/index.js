//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MapComponent from '../../component/mapComponent'
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import SearchBox from '../../component/searchBox'

// create a component
class MapScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapComponent
                    image={require('../../asset/images/FiredTrunk.png')}
                />
                <View style={styles.searchBoxContainer}>
                    <SearchBox
                    placeholder={'search'}
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    searchBoxContainer:{
        position:'absolute',
        top: DIMENSION(15),
        left: DIMENSION(5),
        // backgroundColor:'red'
    }
});

//make this component available to the app
export default MapScreen;
