import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../atoms/CustomImage';
import CustomText from '../atoms/CustomText';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/font';
import {Icon} from 'native-base';
import AntDesign from '@react-native-vector-icons/ant-design';

const CustomDrawerContent = props => {
  const {navigation} = props;

  const menuItems = [
        {
      label: 'Saved Workouts',
      icon: Images?.saved,
      route: 'SavedWorkoutScreen',
    },
        {
      label: 'Saved Meals',
      icon: Images?.bowl,
      route: 'SavedMealsScreen',
    },
      {
      label: 'My Progress',
      icon: Images?.progress,
      route: 'MyProgressScreen',
    },
      {
      label: 'Fitness Goal',
      icon: Images?.progress,
      route: 'MyProgressScreen',
    },
      {
      label: 'Subscriptions',
      icon: Images?.star,
      route: 'SubscriptionScreen',
    },
    {
      label: 'Settings',
      icon: Images?.progress,
      route: 'ProfileScreen',
    },


  
  
  ];

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Curved Yellow Header */}
        <View style={styles.headerCurve}>
          <View style={styles.curveShape} />
        </View>

        {/* Profile Section - Overlapping the curve */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <CustomImage
              source={Images?.user}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
          <CustomText style={styles.profileName}>Alex Carter</CustomText>
          <CustomText style={styles.profileEmail}>
            alexgoshhh24@gmail.com
          </CustomText>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate(item.route);
              }}
              activeOpacity={0.8}>
              <CustomImage
                source={item.icon}
                style={styles.menuIcon}
                resizeMode="contain"
              />
              <CustomText style={styles.menuLabel}>{item.label}</CustomText>
              <Icon
                name="right"
                as={AntDesign}
                size={moderateScale(16, 0.3)}
                color={colors.themeBlack}
              />
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: moderateScale(20, 0.3),
  },
  headerCurve: {
    height: moderateScale(100, 0.3),
    overflow: 'hidden',
  },
  curveShape: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
  },
  profileSection: {
    marginTop: moderateScale(-35, 0.3),
    paddingHorizontal: moderateScale(20, 0.3),
  },
  profileImageContainer: {
    width: moderateScale(70, 0.3),
    height: moderateScale(70, 0.3),
    borderRadius: moderateScale(45, 0.3),
    backgroundColor: colors.white,
    padding: moderateScale(4, 0.3),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: moderateScale(12, 0.3),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(45, 0.3),
    backgroundColor: colors.lightGrayV2,
  },
  profileName: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts.medium,
    color: colors.primary,
    marginBottom: moderateScale(4, 0.3),
  },
  profileEmail: {
    fontSize: moderateScale(12, 0.3),
    fontFamily: fonts.regular,
    color: colors.themeBlack,
    marginBottom: moderateScale(30, 0.3),
  },
  menuContainer: {
    paddingHorizontal: moderateScale(20, 0.3),
    gap: moderateScale(16, 0.3),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(16, 0.3),
    borderRadius: moderateScale(8, 0.3),
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  menuIcon: {
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3),
    tintColor: colors.primary,
    marginRight: moderateScale(16, 0.3),
  },
  menuLabel: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: fonts.medium,
    color: colors.themeBlack,
    flex: 1,
  },
});

export default CustomDrawerContent;
