import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Card from './Card';
import SearchBox from '../../component/searchBox';
import { COLORS, APPEARANCES, DIMENSION } from '../../module';
import { observer, inject } from 'mobx-react'
import TabHeader from '../../component/tabHeader';

@inject('restaurant')
@observer
export default class FavouriteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProvinceForShow: '',
            // seeAll: this.props.navigation.state.params.isSeeAll ? true : false,
        };
    }

    componentDidMount() {
        this.props.restaurant.getRestaurant();
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
                <TabHeader
                    iconPressed={() => this.props.navigation.navigate('notification')}
                    headerTittle={'Favourite'}
                />

                <FlatList style={styles.body}
                    ItemSeparatorComponent={() => this.itemSeperator()}
                    data={stores}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <Card
                            cardPressed={() => this.props.navigation.navigate('ViewDetail', {
                                id: item.id,
                                description: item.description,
                                illustration: item.coverUrl,
                                tittle: item.businessName,
                                backgroundColor: '#fff',
                            })}
                            cover={item.coverUrl}
                            tittle={item.businessName}
                            location={item.location}
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