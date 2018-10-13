//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import TabHeader from '../../component/tabHeader';
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// create a component
class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TabHeader
                    iconPressed={() => this.props.navigation.navigate('notification')}
                    icon={'settings'}
                    headerTittle={'Profile'}
                />
                <View>
                    {/* Profile Picture */}
                    <View style={styles.profilePicture}>
                        <View style={styles.image}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.imageRound}
                                    source={require('../../asset/images/profilePic.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileDetail}>
                            <Text style={styles.profileNmaeText}>
                                Selena Gomez
                            </Text>
                            <Text style={styles.profileEmailText}>
                                selenagomez@gmail.com
                            </Text>
                        </View>
                        {/* <TouchableOpacity>
                            <MaterialIcons style={styles.icon} name='more-vert' />
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5, }}>
                        <FlatList
                            style={{padding:10}}
                            showsHorizontalScrollIndicator={false}
                            data={['Add', 'About', 'Profile', 'Store', 'Setting', 'Login']}
                            keyExtractor={(index) => index.toString()}
                            horizontal={true}
                            renderItem={({ item }) => 
                                {
                                    switch (item) {
                                        case 'Add':
                                            return (<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <TouchableOpacity style={styles.allStore}>
                                                    <MaterialIcons style={styles.iconAdd} name='add' />
                                                </TouchableOpacity>
                                                <Text>{item}</Text>
                                            </View>)
                                        default:
                                            return (<View style={{ marginLeft: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <TouchableOpacity style={styles.allStore}>
                                                </TouchableOpacity>
                                                <Text>{item}</Text>
                                            </View>)
                                    }
                                }
                            }
                        />
                    </View>
                    {/* <View style={styles.body}>
                        <Image
                            source={require('../../asset/images/imageShopCover.jpg')}
                            style={styles.cardBackgroundImage} />
                        <TouchableOpacity style={styles.addStore}>
                            <MaterialIcons style={styles.iconAdd} name='add' />
                        </TouchableOpacity>
                        <Text>
                            Create Your Store
                        </Text>
                    </View> */}
                    <FlatList
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        data={['About', 'Profile', 'Store', 'Setting', 'Login']}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.cellSetting}
                                    onPress={()=> this.props.navigation.navigate('About')}
                                >
                                    <View style={{flexDirection:'row'}}>
                                    <Text style={{ fontSize: 16, fontWeight: '200', paddingLeft: 20 }}>
                                        {item}
                                    </Text>
                                    <View style={{flex:1}}></View>
                                    <MaterialIcons 
                                    style={{
                                        paddingRight:30,
                                        color: '#333',
                                        fontSize: 18}}
                                    name= 'add'
                                    />
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    cellSetting: {
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'gray',
        borderBottomWidth: 0.5,
        flex: 1,
        height: 50,

    },
    allStore: {
        borderWidth: 1,
        borderColor: '#4897D8',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f3f5',
        width: DIMENSION(20),
        height: DIMENSION(20),
        margin: 2,
        borderRadius: DIMENSION(15),
        opacity: 0.80,
    },
    addStore: {
        borderWidth: 1,
        borderColor: '#4897D8',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f3f5',
        width: DIMENSION(20),
        height: DIMENSION(20),
        borderRadius: DIMENSION(15),
        opacity: 0.80,
    },
    cardBackgroundImage: {
        width: DIMENSION(90),
        height: DIMENSION(50),
        borderRadius: 5,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: DIMENSION(10)
    },
    optionImage: {
        backgroundColor: '#4897D8',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 12.5,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    iconAdd: {
        color: '#333',
        fontSize: 50,
    },
    icon: {
        fontSize: 18,
        paddingTop: DIMENSION(2)
    },
    profileEmailText: {
        alignItems: 'center',
        position: 'relative',
        color: '#333',
        fontWeight: "400",
        fontSize: 12,
        paddingBottom: DIMENSION(2)
    },
    profileNmaeText: {
        alignItems: 'center',
        paddingTop: DIMENSION(1),
        color: '#4897D8',
        fontWeight: "bold",
        fontSize: 18
    },
    profileDetail: {
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: DIMENSION(5),
    },
    image: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.45,
        shadowRadius: 2,
    },
    imageRound: {
        width: DIMENSION(20),
        height: DIMENSION(20),
        borderRadius: DIMENSION(10),
    },
    profilePicture: {
        alignItems: 'center',
        width: '100%',
        paddingLeft: DIMENSION(5),
        paddingRight: DIMENSION(5),
        paddingTop: DIMENSION(5)
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default ProfileScreen;
