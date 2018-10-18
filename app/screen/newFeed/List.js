import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import PrimaryHeader from '../../component/primaryHeader';
import Card from './Card';
import SearchBox from '../../component/searchBox';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import Ionicons from 'react-native-vector-icons/Ionicons';
import testingData from '../../asset/testingData';
import { observer, inject } from 'mobx-react'

@inject('restaurant')
@observer
export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProvinceForShow: '',
            seeAll: this.props.navigation.state.params.isSeeAll ? true : false,
            type  : this.props.navigation.state.params.type,
        };
    }

    componentDidMount(){
        this.props.restaurant.getRestaurant(this.state.type);
    }

    itemSeperator() {
        return (
            <View style={{ height: DIMENSION(5) }} ></View>
        )
    }

    returnData(forShow, name) {
        this.setState({
            selectedProvinceForShow: forShow,
            selectedPrvinceName: name
        })
    }

    render() {
        const { stores, loading } = this.props.restaurant;
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.MAIN_BACKGROUND_COLOR }}>
                <PrimaryHeader
                    backgroundColor={'#fff'}
                    backPressed={() => this.props.navigation.popToTop()}
                    headerTittle={this.props.navigation.state.params.type}
                />
                {!this.state.seeAll &&
                    <View>
                        <SearchBox
                            placeholder={'Search here...'}
                        />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SelectPlace', { returnData: this.returnData.bind(this), backgroundColor: this.props.navigation.state.params.backgroundColor })}
                            style={[{ marginTop: 10, backgroundColor: '#fff', height: 33, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 8, flexDirection: 'row', marginHorizontal: DIMENSION(4), }, APPEARANCES.SHADOW]} >
                            <Ionicons name='md-pin' style={{ fontSize: 16, color: '#32D6FA', marginRight: 5 }} />
                            <Text> {(this.state.selectedProvinceForShow != '' ? this.state.selectedProvinceForShow : 'All').toUpperCase()} </Text>
                        </TouchableOpacity>
                    </View>
                }


                <FlatList style={styles.body}
                    ItemSeparatorComponent={() => this.itemSeperator()}
                    data={stores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <Card
                            cardPressed={() => this.props.navigation.navigate('ViewDetail', {
                                illustration: item.coverUrl,
                                tittle: item.businessName,
                                backgroundColor: this.props.navigation.state.params.backgroundColor,
                            })}
                            cover={item.coverUrl}
                            tittle={item.businessName}
                            location = {item.location}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    body: {
        marginTop: 15,
        flex: 1,
    }
});