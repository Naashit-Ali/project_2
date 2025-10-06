import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import MainHeader from '../components/organisms/MainHeader'
import CustomHeading from '../components/molecules/CustomHeading'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../components/atoms/CustomImage'
import Images from '../assets/images'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import { colors } from '../theme/colors'

const { width } = Dimensions.get('window')

const MyProgressScreen = () => {

    // Sample data for the last 7 days
    const adherenceData = [
        { day: 'Mon', value: 600 },
        { day: 'Tue', value: 400 },
        { day: 'Wed', value: 1000 },
        { day: 'Thu', value: 300 },
        { day: 'Fri', value: 500 },
        { day: 'Sat', value: 700 },
        { day: 'Sun', value: 650 },
    ]

    const maxValue = 1000
    const chartHeight = moderateScale(150, 0.3)

    const Card = ({ title, heading, image }) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <CustomImage
                        source={image}
                        resizeMode='contain'
                        style={styles.cardIcon}
                    />
                    <CustomText style={styles.cardHeading}>{heading}</CustomText>
                </View>
                <CustomText style={styles.cardTitle}>{title}</CustomText>
            </View>
        )
    }

    const BarChart = () => {
        return (
            <View style={styles.chartContainer}>
                <View style={styles.chartHeader}>
                    <CustomText style={styles.chartTitle}>
                        Adherence (last 7 days)
                    </CustomText>
                </View>
                
                {/* Y-axis labels */}
                <View style={styles.chartWrapper}>
                    <View style={styles.yAxis}>
                        <CustomText style={styles.yAxisLabel}>1000</CustomText>
                        <CustomText style={styles.yAxisLabel}>800</CustomText>
                        <CustomText style={styles.yAxisLabel}>600</CustomText>
                        <CustomText style={styles.yAxisLabel}>400</CustomText>
                        <CustomText style={styles.yAxisLabel}>200</CustomText>
                        <CustomText style={styles.yAxisLabel}>0</CustomText>
                    </View>

                    {/* Chart bars */}
                    <View style={styles.barsContainer}>
                        <View style={[styles.barsWrapper, { height: chartHeight }]}>
                            {adherenceData.map((item, index) => {
                                const barHeight = (item.value / maxValue) * chartHeight
                                const isHighlight = item.day === 'Wed' // Highlight Wednesday
                                
                                return (
                                    <View key={index} style={styles.barColumn}>
                                        <View style={[styles.bar, { height: barHeight }]}>
                                            <View
                                                style={[
                                                    styles.barFill,
                                                    {
                                                        height: '100%',
                                                        backgroundColor: isHighlight
                                                            ? colors?.primary || '#FFB800'
                                                            : colors?.grayV3 || '#D3D3D3',
                                                    },
                                                ]}
                                            />
                                        </View>
                                    </View>
                                )
                            })}
                        </View>

                        {/* X-axis labels */}
                        <View style={styles.xAxis}>
                            {adherenceData.map((item, index) => (
                                <CustomText key={index} style={styles.xAxisLabel}>
                                    {item.day}
                                </CustomText>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const MonthlyChallenge = () => {
        return (
            <View style={styles.challengeContainer}>
                <CustomText style={styles.challengeMonth}>September</CustomText>
                <CustomText style={styles.challengeTitle}>Monthly Challenge</CustomText>
                <CustomText style={styles.challengeSubtitle}>
                    8 Chased in 30 Days
                </CustomText>
                
                {/* Progress bar */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarBackground}>
                        <View
                            style={[
                                styles.progressBarFill,
                                { width: '26.67%' }, // 8/30 = 26.67%
                            ]}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScreenBoiler>
            <MainHeader isBack />
            
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <CustomHeading title={'Accountability'} />
                
                {/* Cards Row */}
                <View style={styles.cardsRow}>
                    <Card
                        title={'5 Days'}
                        heading={'Streak'}
                        image={Images?.calendar}
                    />
                    <Card
                        title={'1,245'}
                        heading={'Points'}
                        image={Images?.award || Images?.calendar}
                    />
                </View>

                {/* Bar Chart */}
                <BarChart />

                {/* Monthly Challenge */}
                <MonthlyChallenge />
            </ScrollView>
        </ScreenBoiler>
    )
}

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: moderateScale(30, 0.3),
    },
    cardsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: moderateScale(20, 0.3),
    },
    card: {
        width: '48%',
        padding: moderateScale(20, 0.3),
        borderRadius: moderateScale(8, 0.3),
        backgroundColor: colors?.white || '#FFFFFF',
        gap: moderateScale(6, 0.3),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(8, 0.3),
    },
    cardIcon: {
        width: moderateScale(20, 0.3),
        height: moderateScale(20, 0.3),
    },
    cardHeading: {
        fontFamily: fonts?.medium,
        fontSize: moderateScale(14, 0.3),
        color: colors?.grayV2 || '#6B7280',
    },
    cardTitle: {
        fontFamily: fonts?.semiBold || fonts?.medium,
        fontSize: moderateScale(24, 0.3),
        color: colors?.themeBlackV2 || '#1F2937',
    },
    chartContainer: {
        backgroundColor: colors?.white || '#FFFFFF',
        borderRadius: moderateScale(12, 0.3),
        padding: moderateScale(20, 0.3),
        marginBottom: moderateScale(20, 0.3),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    chartHeader: {
        marginBottom: moderateScale(20, 0.3),
    },
    chartTitle: {
        fontFamily: fonts?.medium,
        fontSize: moderateScale(16, 0.3),
        color: colors?.themeBlackV2 || '#1F2937',
    },
    chartWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    yAxis: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: moderateScale(150, 0.3),
        paddingRight: moderateScale(10, 0.3),
        paddingBottom: moderateScale(25, 0.3),
    },
    yAxisLabel: {
        fontFamily: fonts?.regular,
        fontSize: moderateScale(10, 0.3),
        color: colors?.grayV2 || '#9CA3AF',
    },
    barsContainer: {
        flex: 1,
    },
    barsWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingHorizontal: moderateScale(10, 0.3),
    },
    barColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    bar: {
        width: moderateScale(24, 0.3),
        justifyContent: 'flex-end',
    },
    barFill: {
        width: '100%',
        borderRadius: moderateScale(4, 0.3),
    },
    xAxis: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: moderateScale(10, 0.3),
        paddingHorizontal: moderateScale(10, 0.3),
    },
    xAxisLabel: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts?.regular,
        fontSize: moderateScale(12, 0.3),
        color: colors?.grayV2 || '#6B7280',
    },
    challengeContainer: {
        backgroundColor: colors?.white || '#FFFFFF',
        borderRadius: moderateScale(12, 0.3),
        padding: moderateScale(20, 0.3),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    challengeMonth: {
        fontFamily: fonts?.regular,
        fontSize: moderateScale(12, 0.3),
        color: colors?.grayV2 || '#9CA3AF',
        marginBottom: moderateScale(4, 0.3),
    },
    challengeTitle: {
        fontFamily: fonts?.semiBold || fonts?.medium,
        fontSize: moderateScale(18, 0.3),
        color: colors?.themeBlackV2 || '#1F2937',
        marginBottom: moderateScale(4, 0.3),
    },
    challengeSubtitle: {
        fontFamily: fonts?.regular,
        fontSize: moderateScale(14, 0.3),
        color: colors?.grayV2 || '#6B7280',
        marginBottom: moderateScale(16, 0.3),
    },
    progressBarContainer: {
        width: '100%',
    },
    progressBarBackground: {
        width: '100%',
        height: moderateScale(8, 0.3),
        backgroundColor: colors?.grayV4 || '#E5E7EB',
        borderRadius: moderateScale(4, 0.3),
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: colors?.primary || '#8B5CF6',
        borderRadius: moderateScale(4, 0.3),
    },
})

export default MyProgressScreen