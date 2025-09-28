import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../assets/images'
import CustomImage from '../components/atoms/CustomImage'
import { moderateScale } from 'react-native-size-matters'
import * as Animatable from 'react-native-animatable'
import { colors } from '../theme/colors'
import NavigationService from '../navigation/NavigationService'

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.navigate('WelcomeScreen')
    }, 3000) // Navigate after 3 seconds (animation + delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LinearGradient
      colors={colors?.gradientPrimary}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
    >
      <Animatable.View
        animation="slideInRight"
        duration={1500}
        delay={500}
        easing="ease-out"
      >
        <CustomImage source={Images.logo} style={styles.logo} resizeMode="contain" />
      </Animatable.View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(200,0.3),
    height: moderateScale(200,0.3),
  },
})

export default SplashScreen