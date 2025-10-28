
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated, Image } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import Images from '../assets/images'
import { moderateScale } from 'react-native-size-matters'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = 3
const ITEM_SPACING = 8
const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_SPACING

const DemoScreen = () => {
  const [selectedWeight, setSelectedWeight] = useState(128)
  const scrollViewRef = useRef(null)
  const scaleAnim = useRef(new Animated.Value(1)).current
  const opacityAnim = useRef(new Animated.Value(1)).current
  const lastWeightRef = useRef(128)
  const isScrollingRef = useRef(false)

  // Generate weight marks from 40 to 200 kg (1 kg increments for whole numbers)
  const generateWeightMarks = () => {
    const marks = []
    for (let i = 40; i <= 200; i += 1) {
      marks.push(i)
    }
    return marks
  }

  const weightMarks = generateWeightMarks()

  useEffect(() => {
    // Scroll to initial position (128kg)
    const initialIndex = weightMarks.findIndex(w => w === 128)
    if (scrollViewRef.current && initialIndex !== -1) {
      setTimeout(() => {
        scrollViewRef.current.scrollTo({
          x: initialIndex * TOTAL_ITEM_WIDTH,
          animated: false
        })
      }, 100)
    }
  }, [])

  const animateWeightChange = () => {
    // Scale and opacity animation for smooth weight change
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
    ]).start()
  }

  const handleScroll = (event) => {
    isScrollingRef.current = true
    const offset = event.nativeEvent.contentOffset.x
    const index = Math.round(offset / TOTAL_ITEM_WIDTH)

    if (index >= 0 && index < weightMarks.length) {
      const weight = weightMarks[index]

      if (weight !== lastWeightRef.current) {
        lastWeightRef.current = weight
        setSelectedWeight(weight)
      }
    }
  }

  const handleScrollEnd = (event) => {
    const offset = event.nativeEvent.contentOffset.x
    const index = Math.round(offset / TOTAL_ITEM_WIDTH)

    if (scrollViewRef.current && index >= 0 && index < weightMarks.length) {
      const weight = weightMarks[index]

      // Snap to exact position
      scrollViewRef.current.scrollTo({
        x: index * TOTAL_ITEM_WIDTH,
        animated: true
      })

      // Update final weight and animate
      if (weight !== selectedWeight) {
        setSelectedWeight(weight)
        lastWeightRef.current = weight
        animateWeightChange()
      }
    }

    isScrollingRef.current = false
  }

  const getLeftLabel = () => Math.max(40, selectedWeight - 1)
  const getRightLabel = () => Math.min(200, selectedWeight + 1)

  return (
    <ScreenBoiler>
      <View style={styles.container}>
        {/* Weight Display */}
        <View style={styles.weightContainer}>
          <Animated.Text
            style={[
              styles.weightNumber,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              }
            ]}
          >
            {selectedWeight}
          </Animated.Text>
          <Text style={styles.weightUnit}>kg</Text>
        </View>

        {/* Weight Picker */}
        <View style={styles.pickerContainer}>
          {/* Center Indicator Image */}
          <Image source={Images.indicator} style={styles.centerIndicator} resizeMode="contain" />

          {/* Scrollable Weight Marks */}
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleScrollEnd}
            onScrollEndDrag={handleScrollEnd}
            scrollEventThrottle={16}
            snapToInterval={TOTAL_ITEM_WIDTH}
            decelerationRate="fast"
            bounces={false}
          >
            {weightMarks.map((weight, index) => {
              const isMainMark = weight % 10 === 0
              const isMidMark = weight % 5 === 0 && !isMainMark

              return (
                <View
                  key={`weight-${weight}`}
                  style={styles.markContainer}
                >
                  <View
                    style={[
                      styles.line,
                      isMainMark ? styles.mainLine : isMidMark ? styles.midLine : styles.smallLine
                    ]}
                  />
                </View>
              )
            })}
          </ScrollView>

          {/* Static Labels - positioned relative to selected weight */}
          <View style={styles.labelsContainer}>
            <View style={[styles.labelWrapper, { left: '25%' }]}>
              <Text style={styles.label}>{getLeftLabel()}</Text>
            </View>
            <View style={[styles.labelWrapper, { right: '25%' }]}>
              <Text style={styles.label}>{getRightLabel()}</Text>
            </View>
          </View>
        </View>

      
      </View>
    </ScreenBoiler>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  weightContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  weightNumber: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: -2,
  },
  weightUnit: {
    fontSize: 24,
    color: '#666',
    marginLeft: 4,
  },
  pickerContainer: {
    position: 'relative',
    height: 100,
    marginBottom: 40,
  },
  centerIndicator: {
    position: 'absolute',
    left: '50%',
    top: -10,
    width: moderateScale(30,0.3),
    height: moderateScale(100,0.3),
    marginLeft: -12.5,
    zIndex: 10,
  },
  scrollContent: {
    paddingLeft: width / 2,
    paddingRight: width / 2,
    alignItems: 'flex-start',
  },
  markContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_SPACING / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  line: {
    borderRadius: 1,
  },
  mainLine: {
    height: 40,
    width: 2.5,
    backgroundColor: '#666666',
  },
  midLine: {
    height: 28,
    width: 2,
    backgroundColor: '#AAAAAA',
  },
  smallLine: {
    height: 18,
    width: 1.5,
    backgroundColor: '#CCCCCC',
  },
  labelsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelWrapper: {
    position: 'absolute',
    width: 30,
    alignItems: 'center',
    transform: [{ translateX: -15 }],
  },
  label: {
    fontSize: 13,
    color: '#666',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2C2C54',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default DemoScreen
