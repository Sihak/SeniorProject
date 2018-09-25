import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import PrimaryHeader from '../../component/primaryHeader';
import Card from './Card';
import SearchBox from '../../component/searchBox';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import testingData from '../../asset/testingData';


export default class ListMenu extends Component {
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
                    backgroundColor={this.props.navigation.state.params.backgroundColor}
                    backPressed={() => this.props.navigation.goback()}
                    headerTittle={this.props.navigation.state.params.type}
                />

                <View style = {{justifyContent:'center',alignItems:'center'}}>
                    <FlatList style={[styles.body, APPEARANCES.SHADOW]}
                        ItemSeparatorComponent={() => this.itemSeperator()}
                        data={testingData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={this.props.itemPressed}
                                style={[styles.card, APPEARANCES.SHADOW]}>
                                <View style={styles.coverContainer}>
                                    <Image
                                        style={styles.cover} source={require('../../asset/images/porkSpa.jpg')} />
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.companyName}>Pork Spaghetti</Text>

                                    <View style={styles.contact}>
                                        <MaterialIcons style={styles.icon} name={'monetization-on'} />
                                        <Text style={styles.contactText}>
                                            Price: 5$
                            </Text>
                                    </View>
                                    <View style={styles.contact}>
                                        <MaterialIcons style={styles.icon} name={'lens'} />
                                        <Text style={styles.contactText}>
                                            Available
                            </Text>
                                    </View>
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

    list: {
        paddingVertical: 5,
    },
    scrollableMenu: {
        marginTop: 10,
    },
    card: {
        marginVertical: 5,
        width: DIMENSION(90),
        height: DIMENSION(60),
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
});