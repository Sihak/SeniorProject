import React, { Component } from 'react'
import { Text, View, Platform, TouchableOpacity, Dimensions } from 'react-native'
import styles, { colors } from './styles'
import Carousels, { Pagination } from 'react-native-snap-carousel'
import { sliderWidth, itemWidth } from './styles/sliderEntry'
import SliderEntry from './components/sliderEntry'

const SLIDER_1_FIRST_ITEM = 0;
export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      slider1Ref: null
    }
  }

  // componentWillMount() {
  //   this.props.actions.fetchCarousel()
  // }

  _renderItem({ item, index }) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
      />
    );
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  Sliders = (ENTRIES1) => {
    const { slider1ActiveSlide, slider1Ref } = this.state;
    return (
      <Carousels
        layout={'default'} 
        layoutCardOffset={18}
        autoplay={true}
        ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
        data={ENTRIES1}
        renderItem={this._renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_1_FIRST_ITEM}
        inactiveSlideScale={.50}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={1}
        autoplay={true}
        autoplayDelay={10000}
        autoplayInterval={3000}
        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
      />
    );
  }
  render() {
    const { data } = this.props
    return (
      this.Sliders(data)
    )
  }
}
