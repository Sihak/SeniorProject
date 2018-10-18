//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../module';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ENTRIES2 = [
	{
		title: 'case 2',
		latitude: 12.546932,
		longitude: 104.920049,
	},
	{
		title: 'data 2',
		latitude: 13.546932,
		longitude: 104.920049,
	},
	{
		title: 'Favourites ',
		latitude: 14.546932,
		longitude: 104.920049,
	},
	{
		title: 'filter landscapes 1',
		latitude: 14.546932,
		longitude: 104.920049,
	},
]
//Properties: search,onSearchPressed
class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // searchFood: [],
            // searchDrink: [],
            // searchStreetFood: [],
            value: null,
        }
    }
    // searchFilter(value){
    //     const data = ENTRIES2;
    //     const dataFiltered = data.filter(
    //         ENTRIES2 =>
    //     ENTRIES2.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    //     )
    //     console.log(dataFiltered);
    // }

    render() {
        return (
            <View style={styles.search}>
                <TextInput
                    style={[styles.searchInput, APPEARANCES.SHADOW]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'rgba(0,0,0,.5)'}
                    onChangeText={(text) => this.setState({value:text})}
                />
                <TouchableOpacity
                    onPress={() => this.props.onSearchPressed(this.state.value)}
                >
                    <FontAwesome style={[APPEARANCES.SHADOW, { fontSize: DIMENSION(7), marginLeft: DIMENSION(3), color: '#333', fontWeight: '300' }, APPEARANCES.SHADOW]} name='search' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        height: DIMENSION(9),
        width: DIMENSION(83),
        backgroundColor: 'rgba(255,255,255,1)',
        paddingLeft: 15,
        borderRadius: 8,
        // borderWidth: 0.8,
        borderColor: '#333'

    },
});
export default SearchBox;

