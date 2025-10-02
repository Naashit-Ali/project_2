import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import { moderateScale } from 'react-native-size-matters'
import CustomHeading from '../components/molecules/CustomHeading'
import Video from 'react-native-video'
import { fonts } from '../theme/font'
import { colors } from '../theme/colors'
import ProgressCard from '../components/organisms/ProgressCard'
import CustomText from '../components/atoms/CustomText'
import IngredientCard from '../components/organisms/IngredientCard'

const MealDetail = () => {
    return (
        <ScreenBoiler
            wrapperContainerStyle={{
                paddingHorizontal: moderateScale(16, 0.3),
            }}
        >
            <MainHeader type={1}
                isBack
            />

            <CustomHeading
                title={'Recipe Detail'}
            />
            <View style={{
                borderRadius: moderateScale(10, 0.3),
                overflow: 'hidden',
            }}>
                <Video
                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                    style={{ width: '100%', height: moderateScale(250, 0.3), borderRadius: moderateScale(10, 0.3) }}
                    resizeMode="cover"
                    repeat={true}
                    muted={false}
                    paused={true}
                />
            </View>

            <View style={styles?.contentContainer}>
                <CustomText style={styles?.title}>Classic Grilled Chicken Quinoa Bowl With Asparagus</CustomText>
                <CustomText style={styles?.description}>A healthy and delicious bowl featuring grilled chicken, quinoa, and fresh asparagus, perfect for a nutritious meal.</CustomText>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10, 0.3) }}>

                    <ProgressCard />
                    <ProgressCard
                        progressColor='yellow'
                        title='9g Fat'
                    /><ProgressCard
                        progressColor='green'
                        title='92g Protein'
                    />


                </View>
            </View>


            <CustomText
                style={[styles?.title,
                {
                    marginTop: moderateScale(20, 0.3),
                }
                ]}
            >Ingredients</CustomText>

            <IngredientCard/>


        </ScreenBoiler>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: moderateScale(18, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.medium,
    },
    description: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.grayV2,
        fontFamily: fonts?.regular,
    },
    image: {
        width: '100%',
        height: moderateScale(200, 0.3),
        borderTopLeftRadius: moderateScale(12, 0.3),
        borderTopRightRadius: moderateScale(12, 0.3),
    },
    contentContainer: {
        // padding: moderateScale(12, 0.3),
        gap: moderateScale(6, 0.3),
        marginTop: moderateScale(12, 0.3),
    },
})


export default MealDetail