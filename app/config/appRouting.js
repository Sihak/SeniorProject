import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NewFeedRouting from "./newFeedRouting";

const color = "rgba(0,0,0,0.3)";
const activeColor = '#333';
const iconSize = 26;

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
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ): (
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
              size={iconSize}
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
            <MaterialIcons
              name="map"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialIcons
              name="map"
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
              size={iconSize}
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
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ): (
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
    removeClippedSubviews : true,
    swipeEnabled: false,
    initialRouteName: "NewFeedRouting",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        labelStyle : {
            fontSize: 13,
            fontWeight: '900'
        },
        activeTintColor : activeColor,
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

export default AppRouting;