import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Card extends Component {
    spacing() {
        return '   '
    }

    onCardPressed() {
        this.props.cardPressed()
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.onCardPressed()}
                style={[cards.card, APPEARANCES.SHADOW]} >
              
                <View style={cards.cardCover}>
                    <Image
                        resizeMethod = {'resize'}
                        resizeMode = {'cover'}
                        source={{ uri: this.props.cover }}
                        style={{ height: '100%', width: '100%' }}
                    />
                </View>
                <View style={cards.cardBody}>
                    <View style={cards.cardTittleContainer}>
                        <Text
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={cards.cardTittle} > {this.props.tittle} </Text>
                        <View style={cards.locationContainer} >
                            <Ionicons name='md-pin' style={cards.locationIcon} />
                            <Text style={cards.locationDescription}> { this.props.location } </Text>
                        </View>
                    </View>
                    {/* <View style={cards.desriptionContainer}>
                        <Text
                            ellipsizeMode={'tail'}
                            numberOfLines={7}
                            style={cards.description} > {this.spacing()}
                            Angkor Wat is an ancient city in Cambodia that was the center of the Khmer empire that once ruled most of Southeast Asia. This civilization went extinct, but not before building amazing temples and buildings that were reclaimed by the jungle for hundreds of years. Though this place is always packed with tourists, the area is still breathtaking to see. The most popular temples are Angkor Wat, Bayon, Ta Phrom, and Angkor Thom. I would recommend getting a multi-day pass so you can visit some of the outer temples where there are less visitors. The closest major city and launching pad for tours here is Siem Reap.
                        </Text>
                    </View> */}
                </View>
            </TouchableOpacity>
        );
    }
}

const cards = StyleSheet.create({
    cardTittleContainer:{
        padding:10,
    },
    card: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 0.1,
        borderColor: '#333',
    },
    cardCover: {
        alignItems: 'center',
        justifyContent: 'center',
        height: DIMENSION(40),
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
    },
    cardBody: {
        padding: APPEARANCES.MARGIN - 5,
        flex: 1,
    },
    cardTittle: {
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'left',
        marginTop: 5,
    },
    locationContainer: {
        marginTop: 5,
        padding: APPEARANCES.MARGIN - 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationIcon: {
        color: '#32D6FA',
        fontSize: 16,
    },
    locationDescription: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2.5
    },
    // desriptionContainer: {
    //     padding: APPEARANCES.MARGIN - 10,
    // },
    // description: {
    //     paddingLeft: 5,
    //     paddingRight: 5,
    //     textAlign: 'justify',
    //     fontSize: 14.5,
    //     fontWeight: '300',
    //     letterSpacing: 0.5
    // }
});


export default Card;