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
import MindsetDetailScreen from '../screens/MindsetDetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SavedMealsScreen from '../screens/SavedMealsScreen';
import SavedWorkoutScreen from '../screens/SavedWorkoutScreen';
import MyProgressScreen from '../screens/MyProgressScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import DemoScreen from '../screens/DemoScreen';

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
    WorkoutDetailScreen,
    MindsetDetailScreen,
    NotificationScreen,
    SettingScreen,
    ProfileScreen,
    EditProfileScreen,
    SavedMealsScreen,
    SavedWorkoutScreen,
    MyProgressScreen,
    EventDetailScreen,
    DemoScreen,
  };
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator
        initialRouteName="DemoScreen"
        screenOptions={{
          headerShown: false, 
        }}>
        {Object.entries(screens).map(([name, component]) => (
          <Stack.Screen name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
