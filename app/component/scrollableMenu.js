import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS } from '../module'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class ScrollableMenu extends Component {
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
                    showsHorizontalScrollIndicator={false}
                    data={this.props.data}
                    keyExtractor={(index) => index.toString()}
                    horizontal={true}
                    style={[styles.list, APPEARANCES.SHADOW]}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                            onPress = {() => this.props.itemPressed(item)}
                            style={[styles.card, APPEARANCES.SHADOW]}>
                                <View style={styles.coverContainer}>
                                    <Image
                                        style={styles.cover} source={{uri:item.coverUrl}} />
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.companyName}>{item.businessName}</Text>
                                    <View style={styles.contact}>
                                        <MaterialIcons style={styles.icon} name={'place'} />
                                        <Text style={styles.contactText}>
                                            {item.location.toUpperCase()}
                                    </Text>
                                    </View>
                                    <View style={styles.contact}>
                                        <MaterialIcons style={styles.icon} name={'call'} />
                                        <Text style={styles.contactText}>
                                            {item.contact}
                                    </Text>
                                    </View>
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
    list: {
        paddingVertical: 5,
    },
    scrollableMenu: {
        marginTop: 10,
    },
    card: {
        marginVertical: 5,
        width: DIMENSION(70),
        height: DIMENSION(55),
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
        backgroundColor: '#fff',
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
        marginTop: 5,
        color: COLORS.TEXT_BLACK,
        fontSize: 12,
        fontWeight: '600'
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

    companyName: {
        fontSize: 18,
        fontWeight: '900',
        color: COLORS.TEXT_BLACK
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
    }

}
