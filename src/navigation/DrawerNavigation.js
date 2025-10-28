import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SavedWorkoutScreen from '../screens/SavedWorkoutScreen';
import SavedMealsScreen from '../screens/SavedMealsScreen';
import BottomNavigation from './BottomNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import CustomDrawerContent from '../components/organisms/CustomDrawerContent';
import MyProgressScreen from '../screens/MyProgressScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="MainTabs"
        component={BottomNavigation}
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
        }}
      />
      <Drawer.Screen
        name="SavedWorkoutScreen"
        component={SavedWorkoutScreen}
        options={{
          drawerLabel: 'Saved Workouts',
        }}
      />
      <Drawer.Screen
        name="SavedMealsScreen"
        component={SavedMealsScreen}
        options={{
          drawerLabel: 'Saved Meals',
        }}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          drawerLabel: 'Settings',
        }}
      />
      <Drawer.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          drawerLabel: 'Edit Profile',
        }}
      />
      <Drawer.Screen
        name="MyProgressScreen"
        component={MyProgressScreen}
        options={{
          drawerLabel: 'My Progress',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
