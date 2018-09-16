//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, APPEARANCES, DIMENSION } from '../module';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


//Properties: search,onSearchPressed
class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        return (
            <View style={styles.search}>
                <TextInput
                    style={[styles.searchInput, APPEARANCES.SHADOW]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'rgba(0,0,0,.5)'}
                    onChangeText={(value) => this.props.search(value)}
                />
                <TouchableOpacity
                    onPress={() => this.props.onSearchPressed}
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
        borderRadius: 10,
    },
});
export default SearchBox;

