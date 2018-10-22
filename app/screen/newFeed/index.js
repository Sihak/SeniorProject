import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import TabHeader from '../../component/tabHeader';
import { DIMENSION, APPEARANCES, COLORS } from '../../module';
import ScrollableMenu from '../../component/scrollableMenu';
import SearchBox from '../../component/searchBox'
import { observer, inject } from 'mobx-react';
@inject('restaurant')
@observer
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
    const { drinks, foods, streetFoods,loading } = this.props.restaurant;
    return (
      <View style={{ flex: 1 }}>
        <TabHeader
          iconPressed={() => this.props.navigation.navigate('notification')}
          headerTittle={'New Feed'}
        />
        
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.MAIN_BACKGROUND_COLOR }}>
          <View style={styles.featureButtonContainer}>
            <TouchableOpacity
              onPress={() => this.navigate('List', 'drinks', COLORS.ORANGE_YELLOW, false)}
              style={[styles.feature, APPEARANCES.SHADOW, { backgroundColor: COLORS.ORANGE_YELLOW }]}>
              <Image source={require('../../asset/images/drinks.png')} style={styles.featureIcon} />
              <Text style={styles.label} >Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigate('List', 'foods', COLORS.LIGHT_BLUE, false)}
              style={[styles.feature, APPEARANCES.SHADOW, { backgroundColor: COLORS.LIGHT_BLUE }]}>
              <Image source={require('../../asset/images/food.png')} style={styles.featureIcon} />
              <Text style={styles.label} >Food</Text>
            </TouchableOpacity>
          </View>
          <ScrollableMenu
            data = {drinks}
            seeAllPressed={() => this.navigate('List', 'Drinks', COLORS.ORANGE_YELLOW, true)}
            itemPressed={(item) => this.props.navigation.navigate('ViewDetail', {
              id:item.id,
              description: item.description,
              illustration: item.coverUrl,
              tittle: item.businessName,
              backgroundColor: COLORS.ORANGE_YELLOW,
            })}
            tittle={'Drink'}
          />
          <ScrollableMenu
            data = {foods}
            seeAllPressed={() => this.navigate('List', 'Food', COLORS.LIGHT_BLUE, true)}
            itemPressed={(item) => this.props.navigation.navigate('ViewDetail', {
              id:item.id,
              description: item.description,
              illustration: item.coverUrl,
              tittle: item.businessName,
              backgroundColor: COLORS.LIGHT_BLUE,
            })}
            tittle={'Food'}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = {
  featureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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