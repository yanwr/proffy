import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../../screens/Landing';
import GiveClassesScreen from '../../screens/GiveClasses';
import AppTabNavigation from '../AppTabNavigation';

const { Navigator, Screen } = createStackNavigator();

export default function AppStackNavigation() {

  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="landing" component={LandingScreen} />
        <Screen name="give-classes" component={GiveClassesScreen} />
        <Screen name="study" component={AppTabNavigation} />
      </Navigator>
    </NavigationContainer>
  );
};