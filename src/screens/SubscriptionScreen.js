import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import MainHeader from '../components/organisms/MainHeader';
import {moderateScale} from 'react-native-size-matters';
import CustomHeading from '../components/molecules/CustomHeading';
import CustomButton from '../components/atoms/CustomButton';
import {fonts} from '../theme/font';
import {colors} from '../theme/colors';
import {Icon} from 'native-base';
import AntDesign from '@react-native-vector-icons/ant-design';
import CustomText from '../components/atoms/CustomText';
import NavigationService from '../navigation/NavigationService';

const SubscriptionScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = [
    {
      id: 'yearly',
      title: 'Yearly',
      description: 'Include sharing friends and family',
      originalPrice: '$60.99/Year',
      discountedPrice: '$30.99/Year',
      save: 'For you 50% OFF',
    },
    {
      id: 'monthly',
      title: 'Monthly',
      description: 'Individual only',
      price: '$16.99/Year',
    },
  ];

  return (
    <ScreenBoiler
      containerStyle={{}}
      scrollEnabled
      isBack
      wrapperContainerStyle={{
        paddingHorizontal: moderateScale(5, 0.3),
      }}>
      <CustomHeading title={'Subscription'} />

      <View style={styles.plansContainer}>
        {plans.map(plan => (
          <TouchableOpacity
            key={plan.id}
            style={[
              styles.planCard,
              selectedPlan === plan.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedPlan(plan.id)}
            activeOpacity={0.7}>
            {plan.save && selectedPlan === plan.id && (
              <View style={styles.saveBadge}>
                <CustomText style={styles.saveText}>{plan.save}</CustomText>
              </View>
            )}

            <View style={styles.radioContainer}>
              <View
                style={[
                  styles.radioOuter,
                  // selectedPlan === plan.id && styles.radioOuterSelected
                ]}>
                {selectedPlan === plan.id && (
                  <Icon
                    as={AntDesign}
                    name="check-circle"
                    size={moderateScale(24, 0.3)}
                    color={colors?.secondaryV2}
                  />
                )}
              </View>
              <CustomText
                style={[
                  styles.planTitle,
                  selectedPlan === plan.id && styles.selectedText,
                ]}>
                {plan.title}
              </CustomText>
            </View>

            <CustomText
              style={[
                styles.planDescription,
                selectedPlan === plan.id && styles.selectedDescText,
              ]}>
              {plan.description}
            </CustomText>

            <View style={styles.priceContainer}>
              {plan.discountedPrice ? (
                <>
                  <CustomText
                    style={[
                      styles.discountedPrice,
                      selectedPlan === plan.id && styles.selectedText,
                    ]}>
                    {plan.discountedPrice}
                  </CustomText>
                  <CustomText
                    style={[
                      styles.originalPrice,
                      selectedPlan === plan.id && styles.selectedOriginalPrice,
                    ]}>
                    {plan.originalPrice}
                  </CustomText>
                </>
              ) : (
                <CustomText
                  style={[
                    styles.regularPrice,
                    selectedPlan === plan.id && styles.selectedText,
                  ]}>
                  {plan.price}
                </CustomText>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <CustomButton
        title={'Confirm'}
        style={{
          marginTop: moderateScale(30, 0.3),
        }}
        onPress={() => {}}
      />
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  plansContainer: {
    marginTop: moderateScale(20, 0.3),
    gap: moderateScale(15, 0.3),
  },
  planCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(16, 0.3),
    padding: moderateScale(22, 0.3),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    position: 'relative',
  },
  selectedCard: {
    backgroundColor: '#E8D9FF',
    borderColor: '#A78BFA',
  },
  saveBadge: {
    position: 'absolute',
    top: moderateScale(-12, 0.3),
    right: moderateScale(20, 0.3),
    backgroundColor: '#A78BFA',
    paddingHorizontal: moderateScale(12, 0.3),
    paddingVertical: moderateScale(6, 0.3),
    borderRadius: moderateScale(50, 0.3),
    zIndex: 10,
  },
  saveText: {
    color: colors?.white,
    fontSize: moderateScale(12, 0.3),
    fontFamily: fonts?.medium,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8, 0.3),
  },
  radioOuter: {
    width: moderateScale(22, 0.3),
    height: moderateScale(22, 0.3),
    borderRadius: moderateScale(11, 0.3),
    borderWidth: 2,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10, 0.3),
    backgroundColor: '#FFFFFF',
  },
  radioOuterSelected: {
    borderColor: '#A78BFA',
  },
  radioInner: {
    width: moderateScale(12, 0.3),
    height: moderateScale(12, 0.3),
    borderRadius: moderateScale(6, 0.3),
    backgroundColor: '#A78BFA',
  },
  planTitle: {
    fontSize: moderateScale(18, 0.3),
    fontWeight: '600',
    color: colors?.gray,
    fontFamily: fonts?.medium,
  },
  selectedText: {
    color: colors?.themeBlack,
  },
  planDescription: {
    fontSize: moderateScale(13, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular,
    marginBottom: moderateScale(12, 0.3),
    // marginLeft: moderateScale(32, 0.3),
  },
  selectedDescText: {
    color: colors?.gray,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: moderateScale(32, 0.3),
    gap: moderateScale(10, 0.3),
  },
  discountedPrice: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.medium,
    color: colors?.gray,
  },
  originalPrice: {
    fontSize: moderateScale(16, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.medium,
    textDecorationLine: 'line-through',
  },
  selectedOriginalPrice: {
    color: colors?.gray,
  },
  regularPrice: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.medium,
    color: colors?.gray,
  },
  confirmButton: {
    backgroundColor: '#D4AF37',
    borderRadius: moderateScale(25, 0.3),
    paddingVertical: moderateScale(16, 0.3),
    alignItems: 'center',
    marginTop: moderateScale(30, 0.3),
    marginHorizontal: moderateScale(10, 0.3),
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16, 0.3),
    fontWeight: '600',
  },
});

export default SubscriptionScreen;
