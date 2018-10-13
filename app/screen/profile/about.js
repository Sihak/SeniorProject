//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabHeader from '../../component/tabHeader';
// create a component
class AbooutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TabHeader
                    iconPressed={() => this.props.navigation.navigate('notification')}
                    icon={'settings'}
                    headerTittle={'Profile'}
                />
                <Text>AbooutScreen</Text>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
});

//make this component available to the app
export default AbooutScreen;
