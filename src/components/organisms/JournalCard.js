import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import Slider from '@react-native-community/slider'
import NavigationService from '../../navigation/NavigationService'
import { globalStyles } from '../../utils/globalStyles'

const JournalCard = ({type = 1}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(78) // 01:18 in seconds
  const [duration, setDuration] = useState(180) // 03:00 in seconds

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {NavigationService?.navigate('MindsetDetailScreen')}}
    style={styles?.container}> 
      <CustomText style={styles?.labelText}>
        {type === 3 ? 'Audio note' : type !== 1 ? '02 Aug 2024' : 'Audio note'}
      </CustomText>
      <CustomText style={styles?.nameText}>Growth Mindset</CustomText>
      <CustomText style={styles?.descriptionText}>
        Embrace challenges as opportunities for learning.
      </CustomText>
      
      {type === 3 ? (
        <View style={styles?.audioPlayerContainer}>
          {/* Slider Progress Bar */}
          <Slider
            style={styles?.slider}
            minimumValue={0}
            maximumValue={duration}
            value={currentTime}
            onValueChange={(value) => setCurrentTime(Math.floor(value))}
            minimumTrackTintColor={colors?.themeYellow || '#F59E0B'}
            maximumTrackTintColor={colors?.lightGray || '#E5E7EB'}
            thumbTintColor={colors?.themeYellow || '#F59E0B'}
          />
          
          {/* Time Display and Play Button */}
          <View style={styles?.timeControlContainer}>
            <TouchableOpacity 
              onPress={togglePlayPause}
              activeOpacity={0.7}
              style={styles?.playButtonType3}
            >
              <Text style={styles?.playIconText}>{isPlaying ? '⏸' : '▶'}</Text>
            </TouchableOpacity>
            
            <CustomText style={styles?.timeText}>{formatTime(currentTime)}</CustomText>
            
            <CustomText style={styles?.durationText}>{formatTime(duration)}</CustomText>
          </View>
        </View>
      ) : type !== 1 ? (
        <TouchableOpacity 
          style={styles?.audioContainer}
          onPress={togglePlayPause}
          activeOpacity={0.7}
        >
          {/* Play/Pause Button */}
          <View style={styles?.playButton}>
            <Text style={styles?.playIcon}>{isPlaying ? '⏸' : '▶'}</Text>
          </View>

          {/* Waveform Visualization */}
          <View style={styles?.waveformContainer}>
            {[...Array(23)].map((_, index) => {
              const height = Math.random() * 10 + 10
              return (
                <View
                  key={`wave_bar_${index}`}
                  style={[
                    styles?.waveBar,
                    {
                      height: moderateScale(height, 0.3),
                      backgroundColor: index < 15 && isPlaying
                        ? colors?.themePurple || '#A78BFA'
                        : colors?.themePurple || '#A78BFA'
                    }
                  ]}
                />
              )
            })}
          </View>
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet?.create({
  container: {
    width: '99%',
    padding: moderateScale(16, 0.3),    
    backgroundColor: colors?.white,
    borderRadius: moderateScale(12, 0.3),
    gap: moderateScale(6, 0.3),
    alignSelf: 'center',
    ...globalStyles?.elevationStyle
  },
  labelText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.grayV2 || '#9CA3AF',
    fontFamily: fonts?.regular,
  },
  nameText: {
    fontSize: moderateScale(16, 0.3),
    color: colors?.themeBlack || '#1F2937',
    fontFamily: fonts?.medium || fonts?.medium,
    marginTop: moderateScale(2, 0.3),
  },
  descriptionText: {     
    fontSize: moderateScale(14, 0.3),
    color: colors?.darkGray || '#6B7280',
    fontFamily: fonts?.regular,
    lineHeight: moderateScale(20, 0.3),
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors?.lightPurple || '#F3F4F6',
    borderRadius: moderateScale(50, 0.3),
    padding: moderateScale(6, 0.3),
    gap: moderateScale(12, 0.3),
    width: '50%',
    marginTop: moderateScale(6, 0.3),
  },
  playButton: {
    width: moderateScale(25, 0.3),
    height: moderateScale(25, 0.3),
    borderRadius: moderateScale(20, 0.3),
    backgroundColor: colors?.themePurple || '#A78BFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.white || '#FFFFFF',
    marginLeft: moderateScale(2, 0.3),
  },
  waveformContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: moderateScale(20, 0.3),
    gap: moderateScale(2, 0.3),
  },
  waveBar: {
    width: moderateScale(2, 0.3),
    borderRadius: moderateScale(1, 0.3),
    backgroundColor: colors?.themePurple,
  },
  audioPlayerContainer: {
    marginTop: moderateScale(12, 0.3),
  },
  slider: {
    width: '100%',
    height: moderateScale(40, 0.3),
    marginTop: moderateScale(-4, 0.3),
  },
  timeControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12, 0.3),
    marginTop: moderateScale(-10, 0.3),
  },
  playButtonType3: {
    padding: moderateScale(4, 0.3),
  },
  playIconText: {
    fontSize: moderateScale(18, 0.3),
    color: colors?.darkGray || '#6B7280',
  },
  timeText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.themeBlack || '#1F2937',
    fontFamily: fonts?.medium,
    flex: 1,
  },
  durationText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.darkGray || '#6B7280',
    fontFamily: fonts?.regular,
  },
})

export default JournalCard