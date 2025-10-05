import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import { moderateScale } from 'react-native-size-matters'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import { colors } from '../theme/colors'
import JournalCard from '../components/organisms/JournalCard'

const MindsetDetailScreen = () => {
    return (
        <ScreenBoiler
            scrollEnabled
            wrapperContainerStyle={{
                paddingHorizontal: moderateScale(16, 0.3),
            }}
        >
            <MainHeader
                isBack
            />

            <CustomHeading
                title={'Growth Mindset'}
            />
<JournalCard type={3}/>
            <CustomText style={styles?.description}>
                A growth mindset is the belief that abilities and intelligence can be developed through dedication, effort, and learning. It contrasts with a fixed mindset, which assumes that talents are innate and unchangeable. Embracing a growth mindset encourages resilience, adaptability, and a love for learning. It fosters a positive attitude towards challenges, viewing them as opportunities for growth rather than obstacles. Individuals with a growth mindset are more likely to persevere in the face of setbacks, seek feedback, and continuously improve their skills. This mindset is essential for personal development, academic success, and professional achievement.
            </CustomText>

        </ScreenBoiler>
    )
}

const styles = StyleSheet?.create({
    description: {
        fontSize: moderateScale(14, 0.3),
        fontFamily: fonts?.regular,
        color: colors?.themeBlack,
        marginTop: moderateScale(10, 0.3),
        lineHeight: moderateScale(20, 0.3),
    },
})

export default MindsetDetailScreen