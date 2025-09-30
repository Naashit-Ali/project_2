import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import Video from 'react-native-video'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import Images from '../../assets/images'
import CustomImage from '../atoms/CustomImage'

const WorkoutCard = () => {

    const IconWithText = ({ image, text }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomImage source={image} style={styles?.imageIcon} />
                <CustomText style={styles?.text}>{text}</CustomText>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{
                overflow: 'hidden',
                borderRadius: moderateScale(10, 0.3),
            }}>
                <Video
                    source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
                    style={styles.backgroundVideo}
                    resizeMode="cover"
                    muted={false}
                    controls
                    paused
                /></View>

            <View style={{
                padding: moderateScale(10, 0.3),
                gap: moderateScale(5, 0.3),
            }}>
                <CustomText style={styles?.heading}>Squat Exercise</CustomText>
                <CustomText style={styles?.description}>
                    Watch my daily workout routine for 30 days challenge
                </CustomText>

                <View style={styles?.rowContainer}>
                    <IconWithText
                        image={Images?.clock}
                        text="15 minutes"
                    />
                    <IconWithText
                        image={Images?.fire}
                        text="100 Calories"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet?.create({
    container: {
        width: '100%',
        backgroundColor: colors?.white,
        borderRadius: moderateScale(10, 0.3),
        marginTop: moderateScale(20, 0.3),
    },
    backgroundVideo: {
        width: '100%',
        height: moderateScale(260, 0.3),
        borderRadius: moderateScale(10, 0.3),
    },
    heading: {
        fontSize: moderateScale(18, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.medium,
    },
    description: {
        fontSize: moderateScale(16, 0.3),
        color: colors?.darkGray,
        fontFamily: fonts?.regular
    },
    text: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.darkGray,
        fontFamily: fonts?.regular,
    },
    imageIcon: {
        width: moderateScale(24, 0.3),
        height: moderateScale(24, 0.3),
        marginRight: moderateScale(8, 0.3),
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(8, 0.3)
    }
})
export default WorkoutCard