import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Animated, Image } from 'react-native';
import { colors } from '../theme/colors';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import WorkoutScreen from '../screens/WorkoutScreen';
import MealScreen from '../screens/MealScreen';
import HomeScreen from '../screens/HomeScreen';
import Images from '../assets/images';
import MindsetScreen from '../screens/MindsetScreen';
import EventScreen from '../screens/EventScreen';
import { fonts } from '../theme/font';

const Tab = createBottomTabNavigator();
const TabBarIcon = ({ focused, iconFocused, iconUnfocused, label }) => {
  const scaleAnim = React.useRef(new Animated.Value(focused ? 1 : 0)).current;
  const opacityAnim = React.useRef(new Animated.Value(focused ? 1 : 0.6)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: focused ? 1 : 0,
        useNativeDriver: true,
        friction: 8,
        tension: 100,
      }),
      Animated.timing(opacityAnim, {
        toValue: focused ? 1 : 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused]);

  const pillScale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const pillWidth = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [moderateScale(50, 0.3), moderateScale(100, 0.3)],
  });

  return (
    <View style={styles.iconContainer}>
      {focused && (
        <Animated.View
          style={[
            styles.pillBackground,
            {
              width: pillWidth,
              transform: [{ scale: pillScale }],
            },
          ]}
        />
      )}
      <Animated.View
        style={[
          styles.iconContent,
          {
            opacity: opacityAnim,
          },
        ]}
      >
        <Animated.Image
          source={focused ? iconFocused : iconUnfocused}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        {focused && (
          <Animated.Text
            style={[
              styles.label,
              {
                opacity: scaleAnim,
              },
            ]}
          >
            {label}
          </Animated.Text>
        )}
      </Animated.View>
    </View>
  );
};

const BottomNavigation = () => {
  const { user } = useSelector((state) => state?.authReducer);

  const tabScreens = [
    {
      name: 'HomeScreen',
      component: HomeScreen,
      iconFocused: Images.facebook,
      iconUnfocused: Images.facebook,
      label: 'Home',
    },
    {
      name: 'WorkoutScreen',
      component: WorkoutScreen,
      iconFocused: Images.facebook,
      iconUnfocused: Images.facebook,
      label: 'Workout',
    },
    {
      name: 'MealScreen',
      component: MealScreen,
      iconFocused: Images.facebook,
      iconUnfocused: Images.facebook,
      label: 'Meal',
    },
    {
      name: 'MindsetScreen',
      component: MindsetScreen,
      iconFocused: Images.facebook,
      iconUnfocused: Images.facebook,
      label: 'Mindset',
    },
    {
      name: 'EventScreen',
      component: EventScreen,
      iconFocused: Images.facebook,
      iconUnfocused: Images.facebook,
      label: 'Event',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          position: 'absolute',
          overflow: 'hidden',
          height: moderateScale(55, 0.3),
          paddingBottom: moderateScale(10, 0.3),
          paddingTop: moderateScale(10, 0.3),
          paddingHorizontal: moderateScale(20, 0.3),
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}
    >
      {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                iconFocused={screen.iconFocused}
                iconUnfocused={screen.iconUnfocused}
                label={screen.label}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: moderateScale(50, 0.3),
  },
  pillBackground: {
    position: 'absolute',
    height: moderateScale(42, 0.3),
    backgroundColor: colors?.secondary,
    borderRadius: moderateScale(25, 0.3),
  },
  iconContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15, 0.3),
    gap: moderateScale(8, 0.3),
    zIndex: 1,
  },
  imageStyle: {
    width: moderateScale(24, 0.6),
    height: moderateScale(24, 0.6),
  },
  label: {
    color: colors.white,
    fontSize: moderateScale(10, 0.3),
   fontFamily: fonts?.regular
  },
});

export default BottomNavigation;