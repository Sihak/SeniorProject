//import liraries
import React, { Component } from 'react';
import { Animated, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import MapComponent from '../../component/mapComponent'
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import SearchBox from '../../component/searchBox';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View } from 'react-native-animatable';
import Loading from '../../component/loading';
import { observer, inject } from 'mobx-react';



@inject('restaurant')
@observer
class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListingRestaurant: true,
            searchFood: [],
            searchDrink: [],
            searchStreetFood: [],
        }
    }
    componentDidMount() {
        this.props.restaurant.getRestaurant()
    }
    // componentWillMount() {
    //     this.props.restaurant.getRestaurant()
    // }
    render() {
        const { loading, stores } = this.props.restaurant
        // console.log("data:", this.props.dataSearch )
        const activeColor = COLORS.POSITIVE_COLOR;
        return (
            <View style={styles.container}>
                {loading ?
                    <Loading />
                    : <View></View>

                }
                {this.props.restaurant.stores.length > 0 ?
                    <MapComponent
                        navigation={this.props.navigation}
                        listRestaurant={this.state.isListingRestaurant === true}
                        image={require('../../asset/images/map.png')}
                        // itemPressed={() => this.props.navigation.navigate('ViewDetail', {
                        //     backgroundColor: COLORS.LIGHT_BLUE,
                        //   })}
                    />
                    : null

                }


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
                    // dataSearch={this.props.restaurant.stores}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => this.setState({ isListingRestaurant: !this.state.isListingRestaurant })}
                    style={[styles.bottomCloes, this.state.isListingRestaurant === true? {top: DIMENSION(100)}:{top: DIMENSION(150)}]}>
                    <FontAwesome style={[styles.icon, this.state.isListingRestaurant === true ?{color: 'rgba(0,0,0,0.3)'}:{color:activeColor}]} 
                    name={this.state.isListingRestaurant === true ? 'arrow-circle-o-down':"arrow-circle-o-up"}  
                    
                    />
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

        fontSize: 25,
        marginBottom: -5,
    },
    container: {

    },

    // searchBottom: {
    //     position: 'absolute',
    //     top: DIMENSION(11),

    //     left: DIMENSION(5),
    //     // backgroundColor:'red'
    // },

    bottomCloes: {
        position: 'absolute',
        width: DIMENSION(15),
        height: DIMENSION(5),
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,

    }
});

//make this component available to the app
export default MapScreen;
