import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = 8  // Wider for smoother scrolling
const ITEM_SPACING = 4
const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_SPACING

const EventDetailScreen = () => {
  const [selectedWeight, setSelectedWeight] = useState(128.0)
  const scrollViewRef = useRef(null)
  const scrollTimeout = useRef(null)

  // Generate weight marks from 10 to 200 kg (0.1 increments for precision)
  const generateWeightMarks = () => {
    const marks = []
    for (let i = 100; i <= 2000; i++) {  // 100 = 10.0kg, 2000 = 200.0kg (in tenths)
      marks.push(i / 10)
    }
    return marks
  }

  const weightMarks = generateWeightMarks()

  useEffect(() => {
    // Scroll to initial position (128.0kg)
    const initialIndex = weightMarks.findIndex(w => Math.abs(w - 128.0) < 0.01)
    if (scrollViewRef.current && initialIndex !== -1) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: initialIndex * TOTAL_ITEM_WIDTH,
          animated: false
        })
        setSelectedWeight(128.0)
      }, 150)
    }
  }, [])

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x
    
    // Clear any existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }
    
    // Calculate the closest index
    const index = Math.round(offset / TOTAL_ITEM_WIDTH)
    
    if (index >= 0 && index < weightMarks.length) {
      const weight = weightMarks[index]
      setSelectedWeight(parseFloat(weight.toFixed(1)))
    }
  }

  const handleScrollEnd = (event) => {
    const offset = event.nativeEvent.contentOffset.x
    const index = Math.round(offset / TOTAL_ITEM_WIDTH)
    
    // Add a small delay to ensure smooth snapping
    scrollTimeout.current = setTimeout(() => {
      if (scrollViewRef.current && index >= 0 && index < weightMarks.length) {
        const snapPosition = index * TOTAL_ITEM_WIDTH
        scrollViewRef.current.scrollTo({
          x: snapPosition,
          animated: true
        })
        
        const weight = weightMarks[index]
        setSelectedWeight(parseFloat(weight.toFixed(1)))
      }
    }, 10)
  }

  const getLeftLabel = () => {
    const leftWeight = Math.max(10.0, selectedWeight - 1.0)
    return parseFloat(leftWeight.toFixed(1))
  }
  
  const getRightLabel = () => {
    const rightWeight = Math.min(200.0, selectedWeight + 1.0)
    return parseFloat(rightWeight.toFixed(1))
  }

  return (
    <ScreenBoiler>
      <View style={styles.container}>
        {/* Weight Display */}
        <View style={styles.weightContainer}>
          <Text style={styles.weightNumber}>{selectedWeight.toFixed(1)}</Text>
          <Text style={styles.weightUnit}>kg</Text>
        </View>

        {/* Weight Picker */}
        <View style={styles.pickerContainer}>
          {/* Center Indicator - Thick Golden Bar */}
          <View style={styles.centerIndicator} />

          {/* Scrollable Weight Marks */}
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleScrollEnd}
            onScrollEndDrag={handleScrollEnd}
            scrollEventThrottle={8}
            snapToInterval={TOTAL_ITEM_WIDTH}
            decelerationRate={0.98}
            bounces={false}
            overScrollMode="never"
          >
            {weightMarks.map((weight, index) => {
              // Determine mark type based on decimal value
              const decimalPart = (weight * 10) % 10
              const isMainMark = decimalPart === 0  // Every whole kg (50.0, 51.0, 52.0)
              const isHalfMark = decimalPart === 5   // Every 0.5 kg (50.5, 51.5)
              
              return (
                <View
                  key={index}
                  style={styles.markContainer}
                >
                  <View
                    style={[
                      styles.line,
                      isMainMark ? styles.mainLine : isHalfMark ? styles.midLine : styles.smallLine
                    ]}
                  />
                </View>
              )
            })}
          </ScrollView>

          {/* Static Labels */}
          <View style={styles.labelsContainer}>
            <View style={[styles.labelWrapper, { left: '25%' }]}>
              <Text style={styles.label}>{getLeftLabel().toFixed(1)}</Text>
            </View>
            <View style={[styles.labelWrapper, { right: '25%' }]}>
              <Text style={styles.label}>{getRightLabel().toFixed(1)}</Text>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
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
    backgroundColor: '#F5F5F5',
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
    top: 0,
    width: 16,
    height: 70,
    backgroundColor: '#F5C842',
    borderRadius: 8,
    marginLeft: -8,
    zIndex: 10,
    shadowColor: '#F5C842',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
  },
  scrollContent: {
    paddingHorizontal: width / 2,
    alignItems: 'flex-start',
  },
  markContainer: {
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_SPACING / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  line: {
    borderRadius: 2,
  },
  mainLine: {
    height: 45,
    width: 4,
    backgroundColor: '#8E8E8E',
  },
  midLine: {
    height: 30,
    width: 3,
    backgroundColor: '#B0B0B0',
  },
  smallLine: {
    height: 20,
    width: 2,
    backgroundColor: '#D0D0D0',
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
    width: 40,
    alignItems: 'center',
    transform: [{ translateX: -20 }],
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

export default EventDetailScreen