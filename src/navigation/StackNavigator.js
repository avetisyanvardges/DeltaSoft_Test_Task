import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../services/RootNavigation';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../screens/Details';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          sharedElements={route => [route.params.item.publishedAt]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
