import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import PrimaryHeader from '../../component/primaryHeader';
import Card from './Card';
import SearchBox from '../../component/searchBox';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import testingData from '../../asset/testingData';
import RatingComponent from '../../component/rating';


export default class ListReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProvinceForShow: '',
        };
    }


    itemSeperator() {
        return (
            <View style={{ height: DIMENSION(2) }} ></View>
        )
    }

    returnData(forShow, name) {
        this.setState({
            selectedProvinceForShow: forShow,
            selectedPrvinceName: name
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.MAIN_BACKGROUND_COLOR }}>
                <PrimaryHeader
                    backgroundColor={'#fff'}
                    backPressed={() => this.props.navigation.goBack()}
                    headerTittle={'Reviews'}
                />

                <View style = {{justifyContent:'center',alignItems:'center'}}>
                    <FlatList style={[styles.body, APPEARANCES.SHADOW]}
                        ItemSeparatorComponent={() => this.itemSeperator()}
                        data={testingData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                        <TouchableOpacity 
                        onPress = {this.props.itemPressed}
                        style={[styles.card, APPEARANCES.SHADOW]}>
                          
                            <View style={styles.details}>
                                <Text style={styles.userName}>Koi The</Text>
                                <RatingComponent
                                ratable = {false}
                                givenStar = {3}
                                />
                                <Text
                                 numberOfLines = {4}
                                 style={styles.description}>
                                    Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. This is an advanced optimization that is not needed in the general case.
                            </Text>
                            </View>
                            <View style = {styles.user}>
                                <Image source = {require('../../asset/images/user.png')} style = {styles.userImg} />
                            </View>
                        </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reviewIcon:{
        fontSize: 66,
        fontWeight:'900',
        color: COLORS.TEXT_BLACK
    },
    addReview:{
        justifyContent:'center',
        alignItems: 'center',
        height: DIMENSION(45),
        width: DIMENSION(30),
        backgroundColor: COLORS.POSITIVE_COLOR,
        borderRadius: 12,
        marginVertical: 5,

    },
    list: {
        paddingVertical: 5,
    },
    scrollableMenu: {
        marginTop: 10,
    },
    card: {
        marginVertical: 5,
        width: DIMENSION(90),
        height: DIMENSION(45),
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        padding:5
    },
    cover: {
        width: '100%',
        height: '100%'
    },
    coverContainer: {
        width: '100%',
        height: '60%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },

    details: {
        padding: 6.5
    },

    description: {
        marginLeft: 5,
        marginTop: 5,
        color: COLORS.TEXT_BLACK,
        fontSize: 13,
        fontWeight: '500',
    },

    icon: {
        color: COLORS.TEXT_BLACK,
    },

    contactText: {
        color: COLORS.TEXT_BLACK,
        marginLeft: 5,
    },

    contact: {
        marginTop: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    userName: {
        fontSize: 18,
        fontWeight: '900',
        color: COLORS.TEXT_BLACK,
        marginLeft: 5,
    },

    seeAll: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.POSITIVE_COLOR
    },
    scrollableMenuName: {
        fontSize: 23,
        fontWeight: 'bold',
        color: COLORS.TEXT_BLACK
    },
    user:{
        position:'absolute',
        top:10,
        right:15,
        width:45,
        height:45,
        borderRadius:50
    },
    userImg:{
        width:45,
        height:45
    }
});