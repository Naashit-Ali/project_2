import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
// import { moderateScale } from 'react-native-size-matters';
// import CustomButton from './src/components/atoms/CustomButton';
// import CustomImage from './src/components/atoms/CustomImage';
// import CustomText from './src/components/atoms/CustomText';
// import { colors } from './src/theme/colors';
// import { fonts } from './src/theme/font';
// import { globalStyles } from './src/utils/globalStyles';
import Images from '../assets/images';
import { moderateScale } from 'react-native-size-matters';
import CustomButton from '../components/atoms/CustomButton';
import CustomImage from '../components/atoms/CustomImage';
import CustomText from '../components/atoms/CustomText';
import { colors } from '../theme/colors';
import { fonts } from '../theme/font';
import { globalStyles } from '../utils/globalStyles';
import Entypo from '@react-native-vector-icons/entypo';

const InfoSteps = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // State for each step
  const [dietaryGoal, setDietaryGoal] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [gender, setGender] = useState('');
  const [selectedAge, setSelectedAge] = useState(18);
  const [weight, setWeight] = useState(128);
  const [age, setAge] = useState('');

  // Age picker refs
  const flatListRef = useRef(null);
  const ITEM_HEIGHT = 120;

  const [expandedType, setExpandedType] = useState('Endomorph');

  const toggleAccordion = (typeId) => {
    setExpandedType(expandedType === typeId ? null : typeId);
    setBodyType(typeId);
  };


  // Weight picker refs and state
  const weightScrollViewRef = useRef(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const lastWeightRef = useRef(128);
  const isScrollingRef = useRef(false);

  // Weight picker constants
  const ITEM_WIDTH = 3;
  const ITEM_SPACING = 8;
  const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_SPACING;

  const dietaryGoals = [
    'I want to loose weight',
    'I want to gain weight',
    'I want to maintain weight',
  ];

  const bodyTypes = [
    {
      id: 'Mesomorph',
      title: 'Mesomorph',
      description: 'This is a dummy text, your main paragraph for the "Mesomorph" goes here.',
      image: Images?.body, // Replace with your image
    },
    {
      id: 'Endomorph',
      title: 'Endomorph',
      description: 'This is a dummy text, your main paragraph for the "Endomorph" goes here.',
      image: Images?.body, // Replace with your image
    },
    {
      id: 'Ectomorph',
      title: 'Ectomorph',
      description: 'This is a dummy text, your main paragraph for the "Ectomorph" goes here.',
      image: Images?.body, // Replace with your image
    },
  ];
  const genders = [
    {label: 'Male', image: Images?.male},
    {label: 'Female', image: Images?.female},
  ];

  // Generate age array from 13 to 95
  const ages = Array.from({length: 83}, (_, i) => i + 13);

  // Generate weight marks from 40 to 200 kg
  const generateWeightMarks = () => {
    const marks = [];
    for (let i = 40; i <= 200; i += 1) {
      marks.push(i);
    }
    return marks;
  };

  const weightMarks = generateWeightMarks();

  // Initialize age picker scroll position
  useEffect(() => {
    if (currentStep === 5 && flatListRef.current) {
      const initialIndex = ages.indexOf(selectedAge);
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: initialIndex,
          animated: false,
          viewPosition: 0.5,
        });
      }, 100);
    }
  }, [currentStep]);

  // Initialize weight picker scroll position
  useEffect(() => {
    if (currentStep === 4 && weightScrollViewRef.current) {
      const initialIndex = weightMarks.findIndex(w => w === 128);
      if (initialIndex !== -1) {
        setTimeout(() => {
          weightScrollViewRef.current.scrollTo({
            x: initialIndex * TOTAL_ITEM_WIDTH,
            animated: false
          });
        }, 100);
      }
    }
  }, [currentStep]);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to next screen on step 5
      navigation.navigate('ProfileSetupScreen'); // Replace 'NextScreen' with your actual screen name
    }
  };

  const isContinueDisabled = () => {
    if (currentStep === 1) return !dietaryGoal;
    if (currentStep === 2) return !bodyType;
    if (currentStep === 3) return !gender;
    if (currentStep === 4) return !weight;
    if (currentStep === 5) return !selectedAge;
    return false;
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    const newAge = ages[index];
    if (newAge && newAge !== selectedAge) {
      setSelectedAge(newAge);
    }
  };

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  // Weight picker animation
  const animateWeightChange = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.8,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 80,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  // Weight picker scroll handlers
  const handleWeightScroll = (event) => {
    isScrollingRef.current = true;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / TOTAL_ITEM_WIDTH);

    if (index >= 0 && index < weightMarks.length) {
      const newWeight = weightMarks[index];

      if (newWeight !== lastWeightRef.current) {
        lastWeightRef.current = newWeight;
        setWeight(newWeight);
      }
    }
  };

  const handleWeightScrollEnd = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / TOTAL_ITEM_WIDTH);

    if (weightScrollViewRef.current && index >= 0 && index < weightMarks.length) {
      const newWeight = weightMarks[index];

      weightScrollViewRef.current.scrollTo({
        x: index * TOTAL_ITEM_WIDTH,
        animated: true
      });

      if (newWeight !== weight) {
        setWeight(newWeight);
        lastWeightRef.current = newWeight;
        animateWeightChange();
      }
    }

    isScrollingRef.current = false;
  };

  const getLeftLabel = () => Math.max(40, weight - 1);
  const getRightLabel = () => Math.min(200, weight + 1);

  const renderAgeItem = ({item, index}) => {
    const currentIndex = ages.indexOf(selectedAge);
    const distance = Math.abs(index - currentIndex);

    let opacity = 0.2;
    let scale = 1;
    let fontSize = 30;

    if (distance === 0) {
      opacity = 1;
      scale = 1;
      fontSize = 128;
    } else if (distance === 1) {
      opacity = 0.5;
      scale = 1;
      fontSize = 60;
    } else if (distance === 2) {
      opacity = 0.3;
      scale = 1;
      fontSize = 30;
    }

    const isSelected = item === selectedAge;

    return (
      <View style={[styles.ageItemContainer, {height: ITEM_HEIGHT}]}>
        {isSelected ? (
          <View style={styles.selectedAgePill}>
            <Text style={[styles.ageText, {fontSize, opacity: 1}]}>{item}</Text>
          </View>
        ) : (
          <Text
            style={[
              styles.ageText,
              {
                fontSize,
                opacity,
                transform: [{scale}],
                color: '#D3D3D3',
              },
            ]}>
            {item}
          </Text>
        )}
      </View>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Text style={styles.question}>What is your dietary goal?</Text>
            <View style={styles.optionsContainer}>
              {dietaryGoals.map(goal => (
                <TouchableOpacity
                  key={goal}
                  style={[
                    styles.optionButton,
                    dietaryGoal === goal && styles.optionButtonSelected,
                  ]}
                  onPress={() => setDietaryGoal(goal)}>
                  <View style={styles.radioContainer}>
                    <View
                      style={[
                        styles.radioOuter,
                        dietaryGoal === goal && styles.radioOuterSelected,
                      ]}>
                      {dietaryGoal === goal && (
                        <View style={styles.radioInner} />
                      )}
                    </View>
                    <Text
                      style={[
                        styles.optionText,
                        dietaryGoal === goal && styles.optionTextSelected,
                      ]}>
                      {goal}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        );

    case 2:
  return (
    <>
      <Text style={styles.question}>What is your body type?</Text>
      <View style={styles.optionsContainer}>
        {bodyTypes.map((type) => {
          const isExpanded = expandedType === type.id;
          const isSelected = bodyType === type.id;

          return (
            <View key={type.id} style={styles.accordionItem}>
              <TouchableOpacity
                style={[
                  styles.accordionHeader,
                  isSelected && styles.accordionHeaderSelected,
                ]}
                onPress={() => toggleAccordion(type.id)}
                activeOpacity={0.7}>
                <View style={styles.headerContent}>
                  <View
                    style={[
                      styles.radioOuter,
                      isSelected && styles.radioOuterSelected,
                    ]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                  <Text
                    style={[
                      styles.headerText,
                      isSelected && styles.headerTextSelected,
                    ]}>
                    {type.title}
                  </Text>
                </View>
                <Entypo
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={24}
                color={colors?.themeBlack}
                />
                {/* <Text style={styles.chevron}>{isExpanded ? '−' : '+'}</Text> */}
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.accordionBody}>
                  <Text style={styles.descriptionText}>{type.description}</Text>
                  <View style={styles.imageCard}>
                    <Text style={styles.cardTitle}>{type.title}</Text>
                    <Text style={styles.cardDescription}>{type.description}</Text>
                    <Image
                      source={type.image}
                      style={styles.bodyImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </>
  );

      case 3:
        return (
          <>
            <Text style={styles.question}>What is your gender?</Text>
            <View style={styles.optionsContainer}>
              {genders.map(g => (
                // <TouchableOpacity
                //   key={g?.label}
                //   style={[
                //     styles.optionButton,
                //     gender === g?.label && styles.optionButtonSelected,
                //   ]}
                //   onPress={() => setGender(g?.label)}>
                //   <View style={styles.radioContainer}>
                //     <View
                //       style={[
                //         styles.radioOuter,
                //         gender === g?.label && styles.radioOuterSelected,
                //       ]}>
                //       {gender === g?.label && <View style={styles.radioInner} />}
                //     </View>
                //     <Text
                //       style={[
                //         styles.optionText,
                //         gender === g?.label && styles.optionTextSelected,
                //       ]}>
                //       {g?.label}
                //     </Text>
                //   </View>
                // </TouchableOpacity>
                <ImageBackground
                  key={g?.label}
                  source={g?.image}
                  style={{
                    width: '100%',
                    height: moderateScale(150, 0.3),
                    marginBottom: moderateScale(15, 0.3),
                    justifyContent: 'flex-end',
                  }}
                  imageStyle={{
                    borderRadius: moderateScale(15, 0.3),
                    ...globalStyles?.elevationStyle,
                  ...gender === g?.label && {borderWidth:2,borderColor:colors?.orange}  
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={gender}
                    style={[styles.optionButtonTransparent]}
                    onPress={() => setGender(g?.label)}>
                    <CustomText style={styles.genderLabel}>
                      {g?.label}
                    </CustomText>
                    <View
                      style={[
                        styles.radioOuter,
                        gender === g?.label && styles.radioOuterSelected,
                      ]}>
                      {gender === g?.label && (
                        <View style={styles.radioInner} />
                      )}
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              ))}
            </View>
          </>
        );

      case 4:
        return (
          <>
            <Text style={styles.question}>What is your weight?</Text>

            {/* Weight Display */}
            <View style={styles.weightContainer}>
              <Animated.Text
                style={[
                  styles.weightNumber,
                  {
                    transform: [{scale: scaleAnim}],
                    opacity: opacityAnim,
                  },
                ]}>
                {weight}
              </Animated.Text>
              <Text style={styles.weightUnit}>kg</Text>
            </View>

            {/* Weight Picker */}
            <View style={styles.pickerContainer}>
              {/* Center Indicator Image */}
              <Image
                source={Images.indicator}
                style={styles.centerIndicator}
                resizeMode="contain"
              />

              {/* Scrollable Weight Marks */}
              <ScrollView
                ref={weightScrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.weightScrollContent}
                onScroll={handleWeightScroll}
                onMomentumScrollEnd={handleWeightScrollEnd}
                onScrollEndDrag={handleWeightScrollEnd}
                scrollEventThrottle={16}
                snapToInterval={TOTAL_ITEM_WIDTH}
                decelerationRate="fast"
                bounces={false}>
                {weightMarks.map((w, index) => {
                  const isMainMark = w % 10 === 0;
                  const isMidMark = w % 5 === 0 && !isMainMark;

                  return (
                    <View key={`weight-${w}`} style={styles.markContainer}>
                      <View
                        style={[
                          styles.line,
                          isMainMark
                            ? styles.mainLine
                            : isMidMark
                            ? styles.midLine
                            : styles.smallLine,
                        ]}
                      />
                    </View>
                  );
                })}
              </ScrollView>

              {/* Static Labels */}
              <View style={styles.labelsContainer}>
                <View style={[styles.labelWrapper, {left: '25%'}]}>
                  <Text style={styles.weightLabel}>{getLeftLabel()}</Text>
                </View>
                <View style={[styles.labelWrapper, {right: '25%'}]}>
                  <Text style={styles.weightLabel}>{getRightLabel()}</Text>
                </View>
              </View>
            </View>
          </>
        );

      case 5:
        return (
          <>
            <Text style={styles.question}>What is your age?</Text>
            <View style={styles.agePickerContainer}>
              {/* Top Gradient Overlay */}
              <LinearGradient
                colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
                style={styles.topGradient}
                pointerEvents="none"
              />

              {/* Age Picker */}
              <FlatList
                ref={flatListRef}
                data={ages}
                renderItem={renderAgeItem}
                keyExtractor={item => item.toString()}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                getItemLayout={getItemLayout}
                contentContainerStyle={styles.ageListContent}
                style={styles.ageList}
                onScrollToIndexFailed={info => {
                  const wait = new Promise(resolve => setTimeout(resolve, 500));
                  wait.then(() => {
                    flatListRef.current?.scrollToIndex({
                      index: info.index,
                      animated: false,
                      viewPosition: 0.5,
                    });
                  });
                }}
              />

              {/* Bottom Gradient Overlay */}
              <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                style={styles.bottomGradient}
                pointerEvents="none"
              />
            </View>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <CustomImage
            isPressable
            onPress={handleBack}
            source={Images?.arrowLeft}
            resizeMode="contain"
            style={{
              width: moderateScale(15, 0.3),
              height: moderateScale(15, 0.3),
            }}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.stepIndicatorContainer}>
          <Text style={styles.stepIndicator}>
            {currentStep}/{totalSteps}
          </Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {renderStepContent()}
          <CustomButton
            title={'Continue'}
            onPress={handleContinue}
            disabled={isContinueDisabled()}
            style={[
              styles.continueButton,
              isContinueDisabled() && styles.continueButtonDisabled,
            ]}
            textStyle={[
              styles.continueText,
              isContinueDisabled() && styles.continueTextDisabled,
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  backText: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.medium,
  },
  stepIndicatorContainer: {
    paddingHorizontal: moderateScale(12, 0.3),
    paddingVertical: moderateScale(6, 0.3),
    backgroundColor: colors?.lightBlue,
    borderRadius: moderateScale(10, 0.3),
  },
  stepIndicator: {
    fontSize: 16,
    fontWeight: '600',
    color: colors?.blueV2,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  question: {
    fontSize: moderateScale(32, 0.3),
    fontFamily: fonts?.bold,
    color: colors?.themeBlack,
    textAlign: 'center',
    marginBottom: 40,
    width: '70%',
    alignSelf: 'center',
  },
  container: {
    width: '100%',
    padding: 16,
  },
  accordionItem: {
    marginBottom: 16,
  },
  accordionHeader: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accordionHeaderSelected: {
    borderColor: '#000000',
    borderWidth: 2,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#000000',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#000000',
  },
  headerText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  headerTextSelected: {
    color: '#000000',
    fontWeight: '600',
  },
  chevron: {
    fontSize: 24,
    color: '#666666',
    fontWeight: '300',
  },
  accordionBody: {
    marginTop: 12,
    paddingHorizontal: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 12,
  },
  imageCard: {
    backgroundColor: '#4F46E5',
    borderRadius: 15,
    padding: 16,
    position: 'relative',
    minHeight: 160,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
    maxWidth: '60%',
  },
  bodyImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 150,
    height: 210,
  },

  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: colors?.white,
    borderRadius: moderateScale(15, 0.3),
    paddingVertical: moderateScale(11, 0.3),
    paddingHorizontal: moderateScale(16, 0.3),
    marginBottom: moderateScale(15, 0.3),
    borderWidth: 1,
    borderColor: colors?.lightGrayV2,
  },
  optionButtonTransparent: {
    width: '100%',
    height: '100%',
    paddingHorizontal: moderateScale(16, 0.3),
    paddingVertical: moderateScale(11, 0.3),
    justifyContent: 'space-between',
  },
  optionButtonSelected: {
    borderColor: colors?.themeBlack,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: moderateScale(22, 0.3),
    height: moderateScale(22, 0.3),
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors?.themeBlack,
    marginRight: moderateScale(12, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: colors?.themeBlack,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors?.themeBlack,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  optionTextSelected: {
    color: colors?.themeBlack,
    fontWeight: '600',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: moderateScale(20, 0.3),
  },
  input: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 18,
    fontSize: 16,
    color: '#333',
    borderWidth: 2,
    borderColor: '#f0f0f0',
  },
  continueButton: {
    backgroundColor: colors?.themeBlack,
  },
  continueButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  continueTextDisabled: {
    color: '#999',
  },
  genderLabel: {
    fontSize: moderateScale(16, 0.3),
    fontFamily: fonts?.semiBold,
    color: colors?.themeBlack,
  },
  agePickerContainer: {
    height: 480 ,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(20, 0.3),
  },
  ageList: {
    flex: 1,
    width: '100%',
  },
  ageListContent: {
    paddingVertical: moderateScale(150,0.3),
    alignItems: 'center',
  },
  ageItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  selectedAgePill: {
    backgroundColor: '#E8B84D',
    borderRadius: 45,
    width: 285,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageText: {
    fontFamily: fonts?.bold,
    color: '#fff',
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 160,
    zIndex: 10,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    zIndex: 10,
  },
  // Weight Picker Styles
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: moderateScale(20, 0.3),
    marginBottom: moderateScale(40, 0.3),
  },
  weightNumber: {
    fontSize: moderateScale(96, 0.3),
    fontFamily: fonts?.bold,
    color: colors?.themeBlack,
    letterSpacing: -2,
  },
  weightUnit: {
    fontSize: moderateScale(36, 0.3),
    color: '#676C75',
    marginLeft: moderateScale(4, 0.3),
    fontFamily: fonts?.medium,
  },
  pickerContainer: {
    position: 'relative',
    height: moderateScale(100, 0.3),
    marginBottom: moderateScale(40, 0.3),
  },
  centerIndicator: {
    position: 'absolute',
    left: '50%',
    top: moderateScale(-10, 0.3),
    width: moderateScale(30, 0.3),
    height: moderateScale(100, 0.3),
    marginLeft: moderateScale(-15, 0.3),
    zIndex: 10,
  },
  weightScrollContent: {
    paddingLeft: screenWidth / 2,
    paddingRight: screenWidth / 2,
    alignItems: 'flex-start',
  },
  markContainer: {
    width: 3,
    marginHorizontal: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  line: {
    borderRadius: 1,
  },
  mainLine: {
    height: moderateScale(40, 0.3),
    width: moderateScale(2.5, 0.3),
    backgroundColor: '#666666',
  },
  midLine: {
    height: moderateScale(28, 0.3),
    width: moderateScale(2, 0.3),
    backgroundColor: '#AAAAAA',
  },
  smallLine: {
    height: moderateScale(18, 0.3),
    width: moderateScale(1.5, 0.3),
    backgroundColor: '#CCCCCC',
  },
  labelsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: moderateScale(20, 0.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelWrapper: {
    position: 'absolute',
    width: moderateScale(30, 0.3),
    alignItems: 'center',
    transform: [{translateX: moderateScale(-15, 0.3)}],
  },
  weightLabel: {
    fontSize: moderateScale(13, 0.3),
    color: '#666',
    fontFamily: fonts?.medium,
  },
});

export default InfoSteps;