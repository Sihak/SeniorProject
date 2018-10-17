//import liraries
import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class Loading extends Component {
    _onClick = () => {
        const { nav } = this.props
        nav.openDrawer()
    }
    render() {
        return (
            <View style={{ 
                position:'absolute',
                justifyContent:"center",
                alignItems:"center", 
                width:deviceWidth,
                height: deviceHeight,
                padding:16,
                backgroundColor:"rgba(255,255,255,.5)",
                zIndex:1000 }}>
                <Image 
                style={{width: 50, height:50}}
                source={require('../asset/images/loading.gif')}/>
			</View>
        );
    }
}
export default Loading;

