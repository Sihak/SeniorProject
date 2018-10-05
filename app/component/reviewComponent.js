import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS } from '../module'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RatingComponent from './rating';


export default class ReviewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    

    render() {
        return (
            <View style={styles.scrollableMenu}>
                <View style={styles.header}>
                    <Text style={styles.scrollableMenuName}>{this.props.tittle}</Text>
                    <TouchableOpacity
                    onPress = {this.props.seeAllPressed}
                    >
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    ListHeaderComponent = {() => {
                        return(
                            <TouchableOpacity
                             onPress = {this.props.addReview}
                             style = {styles.addReview}>
                                    <MaterialIcons name = {'create'} style = {styles.reviewIcon} />
                            </TouchableOpacity>
                        )
                    }}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={(index) => index.toString()}
                    horizontal={true}
                    style={[styles.list, APPEARANCES.SHADOW]}
                    renderItem={({ item }) => {
                        return (
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
                                    <Image source = {require('../asset/images/user.png')} style = {styles.userImg} />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = {
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
        width: DIMENSION(70),
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

}


