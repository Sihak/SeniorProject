import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from '../../../screen/map/carousel';
import { DIMENSION, APPEARANCES, COLORS } from '../../../module';

// const testingData = [{
//     title: 'Earlier this morning, NYC',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://largebannerprinting.com/wp-content/uploads/2017/06/RB27-AA-demo.png'
//   },
//   {
//     title: 'Earlier this morning, NYC',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1601/mikalaimanyshau160100083/50304057-colourful-shopping-vector-flat-banner-for-your-business-web-sites-etc-quality-design-illustrations-e.jpg'
//   },
//   {
//     title: 'Earlier this morning, NYC',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://previews.123rf.com/images/ylivdesign/ylivdesign1705/ylivdesign170502813/78258025-online-shopping-banner-horizontal-cartoon-style.jpg'
//   },
//   ]

export default class MainCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
   
    render() {
        // console.log("data:", this.props.restaurant.stores )
        return (
            <View style={{ width: DIMENSION(100), height: DIMENSION(50), marginTop: 5 }}>
                <Carousel 
                    data={this.props.data?this.props.data:testingData} 
                 layout={this.props.inLayout}
                />
            </View>
        );
    }
}
