//import liraries
import React, { Component } from 'react';
import {  Animated, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import MapComponent from '../../component/mapComponent'
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import SearchBox from '../../component/searchBox';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { View } from 'react-native-animatable';


// create a component
class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListingRestaurant: true,
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <MapComponent
                    listRestaurant={this.state.isListingRestaurant}
                    image={require('../../asset/images/map.png')}
                />
                {/* <TouchableWithoutFeedback
                    style={{ backgroundColor: 'red', width: 200, height: 200, position: 'absolute' }}
                    onPress={this.handlePress}>
                    <View
                        ref={this.handleRef}
                        style={[{ backgroundColor: this.props.color }, styles.cell]}
                        useNativeDriver={this.props.useNativeDriver}
                    >
                        <Text style={styles.name}>{this.props.animationType}</Text>
                    </View>
                </TouchableWithoutFeedback> */}
                <View style={styles.searchBottom}>
                    <SearchBox
                        placeholder={'search'}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => this.setState({ isListingRestaurant: !this.state.isListingRestaurant })}
                    style={styles.bottomCloes}>
                    <MaterialIcons style={styles.icon} name={'close'} />
                </TouchableOpacity>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    cell: {
        padding: 16,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    name: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    icon: {
        color: COLORS.TEXT_BLACK,
        fontSize: 20,
    },
    container: {

    },
    searchBottom: {
        position: 'absolute',
        top: DIMENSION(11),
        left: DIMENSION(5),
        // backgroundColor:'red'
    },

    bottomCloes: {
        position: 'absolute',
        width: DIMENSION(15),
        height: DIMENSION(5),
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: DIMENSION(90)
    }
});

//make this component available to the app
export default MapScreen;
