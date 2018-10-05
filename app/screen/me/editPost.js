//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import PrimaryHeader from '../../component/primaryHeader';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Carousel from '../../component/carousel';
import testingData from '../../asset/testingData';
import ReviewComponent from '../../component/reviewComponent';
import RestaurantMenu from '../../component/restaurantMenu';
import TabHeader from '../../component/tabHeader';

// create a component
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class EditPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            illustration:[],
            restaurantName: '',
            loading: true,
        }
    }

    navigate(screen, type, backgroundColor) {
        this.props.navigation.navigate(screen, { type: type, backgroundColor: backgroundColor})
    }
    render() {
        console.log(this.state.tittle)
        return (<View style={{ flex: 1, backgroundColor: '#fff' }} >
            <ScrollView>
                <View style={styles.mapHeader}>
                    <Image source={require('../../asset/images/map.jpg')} style={styles.map} />

                </View>
                <View style={{ padding: 15, flex: 1 }}>
                    <Text style={styles.tittle} >{'Restaurant Name'}</Text>
                    <View style={styles.cardTittleContainer}>
                        <View style={[styles.locationContainer, { paddingTop: APPEARANCES.MARGIN - 5, justifyContent: 'space-between' }]}>
                            <View style={[styles.locationContainer, { marginTop: 5 }]} >
                                <Ionicons name='md-pin' style={styles.locationIcon} />
                                <Text style={styles.locationDescription}>Siemreap</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }} >
                                <Ionicons name='md-chatbubbles' style={[styles.locationIcon, { marginLeft: 15 }]} />
                                <Text style={styles.locationDescription}>2</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.carouselContainer, APPEARANCES.SHADOW]} >
                        <Carousel
                            data={testingData}
                        />
                    </View>
                    <View style={styles.desriptionContainer}>
                        <Text
                            ellipsizeMode={'tail'}
                            style={styles.description} >{'  '}
                            Angkor Wat is an ancient city in Cambodia that was the center of the Khmer empire that once ruled most of Southeast Asia. This civilization went extinct, but not before building amazing temples and buildings that were reclaimed by the jungle for hundreds of years. Though this place is always packed with tourists, the area is still breathtaking to see. The most popular temples are Angkor Wat, Bayon, Ta Phrom, and Angkor Thom. I would recommend getting a multi-day pass so you can visit some of the outer temples where there are less visitors. The closest major city and launching pad for tours here is Siem Reap.
                </Text>
                    </View>
                    <RestaurantMenu
                        tittle={'Menu'}
                        seeAllPressed={() => this.navigate('ListMenu', this.props.navigation.state.params.tittle, this.props.navigation.state.params.backgroundColor)}
                    // itemPressed={() => this.props.navigation.navigate('Menu')}
                    />
                    <ReviewComponent
                        addReview={() => this.props.navigation.navigate('AddReview')}
                        tittle={'Reviews'}
                        seeAllPressed={() => this.props.navigation.navigate('ReviewList')}
                        itemPressed={() => this.props.navigation.navigate('ViewReview')}
                    />
                </View>
            </ScrollView>
            <SafeAreaView style={[styles.headerContainer, APPEARANCES.SHADOW]}>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.goBack()}
                    style={styles.headerButton}
                >
                    <MaterialIcons name={'keyboard-arrow-left'} style={styles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.headerButton}
                >
                    <MaterialIcons name={'place'} style={styles.headerIcon} />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    headerButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        width: DIMENSION(95)
    },
    headerIcon: {
        fontSize: 35
    },
    mapHeader: {
        width: DIMENSION(100),
        height: DIMENSION(50),
    },
    map: {
        width: DIMENSION(100),
        height: DIMENSION(50),
    },
    tittle: {
        paddingBottom: DIMENSION(5),
        marginLeft: DIMENSION(4),
        fontSize: 22,
        fontWeight: '900',
        color: '#333'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    carouselContainer: {
        height: DIMENSION(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTittle: {
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'left'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationIcon: {
        color: '#32D6FA',
        fontSize: 22,
        marginRight: 5
    },
    locationDescription: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2.5
    },
    desriptionContainer: {
        marginVertical: 15,
    },
    description: {
        textAlign: 'justify',
        fontSize: 15,
        fontWeight: '300',
        letterSpacing: 0.5,
        lineHeight: 22
    },
    reviewTittle: {
        marginLeft: DIMENSION(4),
        fontSize: 28,
        fontWeight: '400',
        color: '#333'
    },
});

//make this component available to the app
export default EditPostScreen;
