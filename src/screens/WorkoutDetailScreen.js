import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import CustomHeading from '../components/molecules/CustomHeading'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import CustomImage from '../components/atoms/CustomImage'
import CustomText from '../components/atoms/CustomText'
import Images from '../assets/images'
import CustomButton from '../components/atoms/CustomButton'
import Video from 'react-native-video'
import StepIndicator from 'react-native-step-indicator'

const { width } = Dimensions.get('window')

// Dummy data for media gallery
const mediaGallery = [
    {
        id: 1,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isMain: true
    },
    {
        id: 2,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    },
    {
        id: 3,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800',
    },
    {
        id: 4,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
    },
]

const WorkoutDetailScreen = () => {
    const [selectedMedia, setSelectedMedia] = useState(mediaGallery[0])
    // const [currentPosition, setCurrentPosition] = useState(0)

    const IconWithText = ({ image, text }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomImage source={image} style={styles?.imageIcon} />
                <CustomText style={styles?.text}>{text}</CustomText>
            </View>
        )
    }

    const labels = ['Warmup', '02 Minutes set', '20 Seconds cooldown']
    
    const customStyles = {
        stepIndicatorSize: moderateScale(30, 0.3),
        currentStepIndicatorSize: moderateScale(45, 0.3),
        separatorStrokeWidth: moderateScale(2, 0.3),
        currentStepStrokeWidth: moderateScale(3, 0.3),
        stepStrokeCurrentColor: '#A78BFA',
        stepStrokeWidth: moderateScale(3, 0.3),
        stepStrokeFinishedColor: '#A78BFA',
        stepStrokeUnFinishedColor: '#E5E7EB',
        separatorFinishedColor: '#A78BFA',
        separatorUnFinishedColor: '#E5E7EB',
        stepIndicatorFinishedColor: '#A78BFA',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: moderateScale(14, 0.3),
        currentStepIndicatorLabelFontSize: moderateScale(16, 0.3),
        stepIndicatorLabelCurrentColor: '#A78BFA',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#9CA3AF',
        labelColor: colors?.themeBlack || '#1F2937',
        labelSize: moderateScale(14, 0.3),
        currentStepLabelColor: colors?.themeBlack || '#1F2937',
        labelFontFamily: fonts?.regular,
        
        
    }

    return (
        <ScreenBoiler>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomHeading title={'Workout detail'} />

                {/* Main Media Display */}
                <View style={styles?.mainMediaContainer}>
                    {selectedMedia.type === 'video' ? (
                        <View style={styles?.videoContainer}>
                            <Video
                                source={{ uri: selectedMedia.video }}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="cover"
                                muted={false}
                                controls
                                paused
                            />
                        </View>
                    ) : (
                        <CustomImage 
                            source={{ uri: selectedMedia.image }} 
                            style={styles?.mainMedia}
                            resizeMode="cover"
                        />
                    )}
                </View>

                {/* Thumbnail Scroller */}
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={styles?.thumbnailScroller}
                    contentContainerStyle={styles?.thumbnailContent}
                >
                    {mediaGallery.map((media) => (
                        <TouchableOpacity
                            key={media.id}
                            onPress={() => setSelectedMedia(media)}
                            style={[
                                styles?.thumbnailContainer,
                                selectedMedia.id === media.id && styles?.selectedThumbnail
                            ]}
                        >
                            <CustomImage 
                                source={{ uri: media.thumbnail }} 
                                style={styles?.thumbnail}
                                resizeMode="cover"
                            />
                            {media.type === 'video' && (
                                <View style={styles?.thumbnailPlayIcon}>
                                    <Text style={styles?.miniPlayIcon}>▶</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Workout Info */}
                <CustomText style={styles?.heading}>Squat Exercise</CustomText>
                <CustomText style={styles?.description}>
                    Join me for a 30-day squat challenge! Follow my daily routine and transform your fitness journey.
                </CustomText>

                <View style={styles?.rowContainer}>
                    <IconWithText
                        image={Images?.clock}
                        text="12 Mins"
                    />
                    <IconWithText
                        image={Images?.fire}
                        text="120 Kcal"
                    />
                </View>

                {/* Steps Section */}
                <CustomText style={[styles?.heading, { marginTop: moderateScale(24, 0.3) }]}>
                    Steps
                </CustomText>

                <View style={styles?.stepIndicatorContainer}>
                    <StepIndicator
                        customStyles={customStyles}
                        direction='vertical'
                        currentPosition={8}
                        labels={labels}
                        stepCount={3}


                    />
                </View>

                <CustomButton
                    title={'Save to my plan'}
                    style={{
                        marginTop: moderateScale(30, 0.3),
                        marginBottom: moderateScale(20, 0.3),
                    }}
                />
            </ScrollView>
        </ScreenBoiler>
    )
}

const styles = StyleSheet.create({
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
    heading: {
        fontSize: moderateScale(18, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.medium,
        marginTop: moderateScale(10, 0.3),
    },
    description: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.darkGray,
        fontFamily: fonts?.regular,
        marginTop: moderateScale(6, 0.3),
        lineHeight: moderateScale(20, 0.3),
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(16, 0.3),
        marginTop: moderateScale(12, 0.3),
    },
    mainMediaContainer: {
        width: '100%',
        height: moderateScale(200, 0.3),
        borderRadius: moderateScale(16, 0.3),
        overflow: 'hidden',
        marginTop: moderateScale(16, 0.3),
        backgroundColor: colors?.lightGray,
    },
    mainMedia: {
        width: '100%',
        height: '100%',
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    thumbnailScroller: {
        marginTop: moderateScale(12, 0.3),
    },
    thumbnailContent: {
        paddingRight: moderateScale(16, 0.3),
    },
    thumbnailContainer: {
        width: moderateScale(80, 0.3),
        height: moderateScale(80, 0.3),
        borderRadius: moderateScale(12, 0.3),
        overflow: 'hidden',
        marginRight: moderateScale(12, 0.3),
        borderWidth: 2,
        borderColor: 'transparent',
        position: 'relative',
    },
    selectedThumbnail: {
        borderColor: colors?.primary,
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    thumbnailPlayIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    miniPlayIcon: {
        fontSize: moderateScale(16, 0.3),
        color: '#fff',
    },
    stepIndicatorContainer: {
        height: moderateScale(150, 0.3),
    },  
})

export default WorkoutDetailScreen