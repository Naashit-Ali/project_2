import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import NavigationService from './NavigationService';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import DrawerNavigation from './DrawerNavigation';
import MealDetail from '../screens/MealDetail';
import SubscriptionScreen from '../screens/SubscriptionScreen';
// import InfoSteps from '../../InfoSteps';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import MindsetDetailScreen from '../screens/MindsetDetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import DemoScreen from '../screens/DemoScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator
        initialRouteName="DrawerNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        {/* Auth Screens */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
        {/* <Stack.Screen name="InfoSteps" component={InfoSteps} /> */}
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />

        {/* Main App - Drawer Navigator containing BottomTabs */}
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

        {/* Modal/Detail Screens (over the drawer) */}
        <Stack.Screen name="MealDetail" component={MealDetail} />
        <Stack.Screen name="WorkoutDetailScreen" component={WorkoutDetailScreen} />
        <Stack.Screen name="MindsetDetailScreen" component={MindsetDetailScreen} />
        <Stack.Screen name="EventDetailScreen" component={EventDetailScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
