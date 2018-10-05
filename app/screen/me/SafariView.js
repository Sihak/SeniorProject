//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native';
import PrimaryHeader from '../../component/primaryHeader';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import MainCarousel from '../../component/simpleCarousel';
import Comment from './Comment';
import testingData from '../../asset/testingData';
import Carousel from '../../component/carousel';
// create a component
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class SafariView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            illustration: this.props.navigation.state.params.illustration,
            tittle: this.props.navigation.state.params.tittle,
            loading: true,
        }
    }
    render() {
        return (<View style={{ flex: 1 }} >
            <HeaderImageScrollView
                maxHeight={280}
                minHeight={100}
                renderHeader={() => <View style={{ height: 280 }} >
                    <Image
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        source={{ uri: this.state.illustration }}
                        style={{ height: '100%', width: '100%' }}
                    />
                </View>
                }
            >
                <TriggeringView >
                    <View style={{ padding: 15, flex: 1 }}>
                    <View style={styles.cardTittleContainer}>
                            <Text
                                ellipsizeMode={'tail'}
                                numberOfLines={2}
                                style={styles.cardTittle} >{this.state.tittle}</Text>
                            <View style={[styles.locationContainer, { paddingTop: APPEARANCES.MARGIN - 5, justifyContent: 'space-between' }]}>
                                <View style={[styles.locationContainer, { marginTop: 5 }]} >
                                    <Ionicons name='md-pin' style={styles.locationIcon} />
                                    <Text style={styles.locationDescription}>Siemreap</Text>
                                </View>
                                {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }} >
                                    <Ionicons name='md-eye' style={styles.locationIcon} />
                                    <Text style={styles.locationDescription}>15</Text>
                                    <Ionicons name='md-chatbubbles' style={[styles.locationIcon, { marginLeft: 15 }]} />
                                    <Text style={styles.locationDescription}>2</Text>
                                </View> */}
                            </View>
                        </View>
                        <View style={[styles.carouselContainer, APPEARANCES.SHADOW]} >
                           <Carousel data = {testingData} />
                        </View>
                        <View style={styles.desriptionContainer}>
                            <Text
                                ellipsizeMode={'tail'}
                                style={styles.description} >{'  '}
                                Angkor Wat is an ancient city in Cambodia that was the center of the Khmer empire that once ruled most of Southeast Asia. This civilization went extinct, but not before building amazing temples and buildings that were reclaimed by the jungle for hundreds of years. Though this place is always packed with tourists, the area is still breathtaking to see. The most popular temples are Angkor Wat, Bayon, Ta Phrom, and Angkor Thom. I would recommend getting a multi-day pass so you can visit some of the outer temples where there are less visitors. The closest major city and launching pad for tours here is Siem Reap.
                        </Text>
                        </View>
                    </View>
                </TriggeringView>
            </HeaderImageScrollView>
            <SafeAreaView style={{ position: 'absolute', marginLeft: 15, width: DIMENSION(95) }} >
                <PrimaryHeader
                    isMap={true}
                    color='#fff'
                    onBackPressed={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
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
export default SafariView;
