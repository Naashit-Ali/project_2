import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import NavigationService from './NavigationService';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import BottomNavigation from './BottomNavigation';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import MealDetail from '../screens/MealDetail';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const screens = {
    SplashScreen,
    WelcomeScreen,
    SignUpScreen,
    HomeScreen,
    ProfileSetupScreen,
    BottomNavigation,
    SubscriptionScreen,
    MealDetail,
    WorkoutDetailScreen
  };
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator
        initialRouteName="WorkoutDetailScreen"
        screenOptions={{
          headerShown: false, // hide headers globally (optional)
        }}>
        {Object.entries(screens).map(([name, component]) => (
          <Stack.Screen name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
