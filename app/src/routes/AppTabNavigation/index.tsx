import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeacherScreen from '../../screens/Teacher';
import FavoriteScreen from '../../screens/Favorite';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppTabNavigation() {
  return (
    <Navigator 
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo700',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#F4F4FC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D'
      }}
    >
      <Screen 
        name="teacher" 
        component={TeacherScreen}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-easel" color={focused ? '#8257E5' : color} size={size}/>
          ),
        }}
      />
      <Screen 
        name="favorite" 
        component={FavoriteScreen} 
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-heart" color={focused ? '#8257E5' : color} size={size}/>
          ),
        }}
      />
    </Navigator>
  );
};