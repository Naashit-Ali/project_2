import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import { moderateScale, s } from 'react-native-size-matters'
import CustomImage from '../components/atoms/CustomImage'
import Images from '../assets/images'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import CustomButton from '../components/atoms/CustomButton'
import { Image } from 'native-base'

const ProfileScreen = () => {

    const Card = ({ title, Image }) => {
        return (
            <View style={{
                width: '100%',
                marginTop: moderateScale(16, 0.3),
            }}>
                <CustomText style={styles?.heading2}>
                    30 days fitness challenge accepted
                </CustomText>
                <CustomImage
                    source={Images?.welcomeBg}
                    style={styles?.cardImg}
                    resizeMode='cover'
                />
            </View>
        )
    }


    return (
        <ScreenBoiler
            // containerStyle={{
            //     backgroundColor: 'green',
            //     paddingHorizontal: moderateScale(0, 0.3),
            //     width: '100%'
            // }}
            // wrapperContainerStyle={{
            //     backgroundColor: 'blue',
            //     // paddningHorizontal: moderateScale(0, 0.3),
            // }}
        >
            <MainHeader
                isBack
                isMenu
            />

            <View style={styles?.profileContainer}>
                <CustomImage
                    source={Images?.user}
                    style={styles?.img}
                    resizeMode='cover'
                />
                <CustomText style={styles?.name}>Alex Carter</CustomText>
                <CustomText style={styles?.email}>alexCarter@gmail.com</CustomText>
                <CustomText style={[styles?.name, {
                    marginTop: moderateScale(24, 0.3),
                }]}>Fitness Goal</CustomText>
                <CustomText style={styles?.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CustomText>
                <CustomButton
                    title={'Edit Profile'}
                    style={styles?.button}
                />
            </View>

            <View style={styles?.container}>

                <CustomText style={styles?.name}>Fitness achievement</CustomText>

                <FlatList
                    data={[1, 2, 3]}
                    renderItem={() => <Card />}
                    contentContainerStyle={styles?.scrollContainer}
                />
            </View>

        </ScreenBoiler>
    )
}

const styles = StyleSheet?.create({
    profileContainer: {
        width: '100%',
        marginTop: moderateScale(50, 0.3),
        alignItems: 'center',
    },
    img: {
        width: moderateScale(100, 0.3),
        height: moderateScale(100, 0.3),
        borderRadius: moderateScale(50, 0.3),
    },
    name: {
        fontSize: moderateScale(16, 0.3),
        marginTop: moderateScale(12, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.bold,
    },
    email: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.grayV2,
        fontFamily: fonts?.regular,
    },
    description: {
        fontSize: moderateScale(14, 0.3),
        marginTop: moderateScale(4, 0.3),
        color: colors?.grayV2,
        fontFamily: fonts?.regular,
        textAlign: 'center',
    },
    button: {
        marginTop: moderateScale(16, 0.3),
    },
    container: {
        width: '100%',
        backgroundColor: 'red',
        padding: moderateScale(16, 0.3),
        borderTopLeftRadius: moderateScale(24, 0.3),
        borderTopRightRadius: moderateScale(24, 0.3),
        marginTop: moderateScale(32, 0.3),
        gap: moderateScale(16, 0.3),
        margninHorizontal: -moderateScale(16, 0.3),
    },
    cardImg: {
        width: '100%',
        height: moderateScale(170, 0.3),
        borderRadius: moderateScale(12, 0.3),
        marginTop: moderateScale(10, 0.3),
    },
    scrollContainer: {
        gap: moderateScale(12, 0.3),
        paddingBottom: moderateScale(20, 0.3),
    }
})


export default ProfileScreen