import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import TabHeader from '../../component/tabHeader';
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import ScrollableMenu from '../../component/scrollableMenu';
import SearchBox from '../../component/searchBox'
export default class NewFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigate(screen, type, backgroundColor, isSeeAll) {
    this.props.navigation.navigate(screen, { type: type, backgroundColor: backgroundColor, isSeeAll: isSeeAll })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabHeader
          iconPressed={() => this.props.navigation.navigate('notification')}
          icon={'notifications'}
          headerTittle={'New Feed'}
        />
        
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.MAIN_BACKGROUND_COLOR }}>
          <View style={styles.featureButtonContainer}>
            <TouchableOpacity
              onPress={() => this.navigate('List', 'Drinks', COLORS.ORANGE_YELLOW, false)}
              style={[styles.feature, APPEARANCES.SHADOW, { backgroundColor: COLORS.ORANGE_YELLOW }]}>
              <Image source={require('../../asset/images/drinks.png')} style={styles.featureIcon} />
              <Text style={styles.label} >Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigate('List', 'Food', COLORS.LIGHT_BLUE, false)}
              style={[styles.feature, APPEARANCES.SHADOW, { backgroundColor: COLORS.LIGHT_BLUE }]}>
              <Image source={require('../../asset/images/food.png')} style={styles.featureIcon} />
              <Text style={styles.label} >Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigate('List', 'Street Food', COLORS.DARK_GREEN, false)}
              style={[styles.feature, APPEARANCES.SHADOW, { backgroundColor: COLORS.DARK_GREEN }]}>
              <Image source={require('../../asset/images/streetFood.png')} style={styles.featureIcon} />
              <Text style={styles.label}>Street Food</Text>
            </TouchableOpacity>
          </View>
          <ScrollableMenu
            seeAllPressed={() => this.navigate('List', 'Drinks', COLORS.ORANGE_YELLOW, true)}
            itemPressed={() => this.props.navigation.navigate('ViewDetail', {
              backgroundColor: COLORS.ORANGE_YELLOW,
            })}
            tittle={'Drink'}
          />
          <ScrollableMenu
            seeAllPressed={() => this.navigate('List', 'Food', COLORS.LIGHT_BLUE, true)}
            itemPressed={() => this.props.navigation.navigate('ViewDetail', {
              backgroundColor: COLORS.LIGHT_BLUE,
            })}
            tittle={'Food'}
          />
          <ScrollableMenu
            seeAllPressed={() => this.navigate('List', 'Street Food', COLORS.DARK_GREEN, true)}
            itemPressed={() => this.props.navigation.navigate('ViewDetail', {
              backgroundColor: COLORS.DARK_GREEN,
            })}
            tittle={'Street Food'}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = {
  featureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: DIMENSION(6),
    marginTop: 15,
  },
  feature: {
    width: DIMENSION(27),
    height: DIMENSION(35),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.1,
  },
  featureIcon: {
    width: 55,
    height: 55,
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.TEXT_BLACK
  }

}