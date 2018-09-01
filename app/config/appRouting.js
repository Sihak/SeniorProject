import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NewFeedRouting from "./newFeedRouting";
import { COLORS } from '../module';
import {View} from 'react-native';

const color = "rgba(0,0,0,0.3)";
const activeColor = COLORS.POSITIVE_COLOR;
const iconSize = 28;
const _extraSize = 10;

const AppRouting = TabNavigator(
  {

    NewFeedRouting: {
      screen: NewFeedRouting,
      navigationOptions: {
        title: "Neew Feed",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="dashboard"
              size={iconSize + _extraSize}             
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <MaterialIcons
                name="dashboard"
                size={iconSize}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },

    SearchRouting: {
      screen: NewFeedRouting,
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="search"
              size={iconSize + _extraSize}            
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <MaterialIcons
                name="search"
                size={iconSize}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },

    Map: {
      screen: NewFeedRouting,
      navigationOptions: {
        title: "Map",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <View style = {customizedStyles.iconContainer}>
              <MaterialIcons
                name="place"
                size={iconSize + _extraSize}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={activeColor}
              />
            </View>

          ) : (
              <MaterialIcons
                name="place"
                size={iconSize}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },

    FavouriteRouting: {
      screen: NewFeedRouting,
      navigationOptions: {
        title: "Favourite",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="favorite"
              size={iconSize + _extraSize}             
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <MaterialIcons
                name="favorite"
                size={iconSize}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },
    MeRouting: {
      screen: NewFeedRouting,
      navigationOptions: {
        title: "Me",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="person"
              size={iconSize + _extraSize}
            
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <MaterialIcons
                name="person"
                size={iconSize}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
    },
  },
  {
    removeClippedSubviews: true,
    swipeEnabled: false,
    initialRouteName: "NewFeedRouting",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      labelStyle: {
        fontSize: 13,
        fontWeight: '900'
      },
      activeTintColor: activeColor,
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F5',
        backgroundColor: '#fff',
        paddingTop: 5,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      },
    },
  }
);

const customizedStyles = {
  iconContainer:{
    width:65,
    height:65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  }
}

export default AppRouting;

function extraSize() {
  return 15;
}
