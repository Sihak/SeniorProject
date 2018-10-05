import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class RatingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givenStar: this.props.givenStar || 0,
            ratable: this.props.ratable,
        };
    }

    async onRate(value) {
        await this.setState({
            givenStar: value
        });
        await this.props.givenStar(this.state.givenStar);
    }

    render() {
        const { ratable, givenStar } = this.state;
        return (
            <View style={styles.ratingContainer}>
                <TouchableOpacity
                    onPress={() => this.onRate(givenStar === 1 ? 0 : 1)}
                    disabled={!ratable}
                >
                    <MaterialIcons name={'star'} style={[styles.rate, givenStar >= 1 && { color: activeColor }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onRate(2)}
                    disabled={!ratable}
                >
                    <MaterialIcons name={'star'} style={[styles.rate, givenStar >= 2 && { color: activeColor }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onRate(3)}

                    disabled={!ratable}
                >
                    <MaterialIcons name={'star'} style={[styles.rate, givenStar >= 3 && { color: activeColor }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onRate(4)}

                    disabled={!ratable}
                >
                    <MaterialIcons name={'star'} style={[styles.rate, givenStar >= 4 && { color: activeColor }]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onRate(5)}

                    disabled={!ratable}
                >
                    <MaterialIcons name={'star'} style={[styles.rate, givenStar === 5 && { color: activeColor }]} />
                </TouchableOpacity>
            </View>
        );
    }
}
const activeColor = COLORS.ORANGE_YELLOW
const styles = {
    ratingContainer: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    rate: {
        fontSize: 32,
        color: 'gray'
    }
}