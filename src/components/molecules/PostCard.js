import React, {useState, useRef} from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Video from 'react-native-video';
import Images from '../../assets/images';
import {colors} from '../../theme/colors';
import CustomImage from '../atoms/CustomImage';
import {Icon} from 'native-base';
import AntDesign from '@react-native-vector-icons/ant-design';
import { fonts } from '../../theme/font';
import SafeFlatList from '../atoms/SafeFlatList';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const PostCard = ({post = {}, onLike, onComment, onShare}) => {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [videoStates, setVideoStates] = useState({});
  const [galleryVideoStates, setGalleryVideoStates] = useState({});
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const videoRefs = useRef({});

  const {
    user = {},
    content = '',
    media = [],
    likes = [],
    comments = [],
    timestamp = '2h ago',
  } = post;

  const {avatar, username = 'Username'} = user;

  const handleVideoPlay = (index, isGallery = false) => {
    if (isGallery) {
      setGalleryVideoStates(prev => ({
        ...prev,
        [index]: {...prev[index], paused: false, showControls: true},
      }));
    } else {
      setVideoStates(prev => ({
        ...prev,
        [index]: {...prev[index], paused: false, showControls: true},
      }));
    }
  };

  const handleVideoPause = (index, isGallery = false) => {
    if (isGallery) {
      setGalleryVideoStates(prev => ({
        ...prev,
        [index]: {...prev[index], paused: true, showControls: true},
      }));
    } else {
      setVideoStates(prev => ({
        ...prev,
        [index]: {...prev[index], paused: true, showControls: true},
      }));
    }
  };

  const handleMediaPress = index => {
    const mediaItem = media[index];
    if (mediaItem.type === 'video') {
      setFullscreenVideo({...mediaItem, index});
    } else {
      setCurrentImageIndex(index);
      setGalleryVisible(true);
    }
  };

  const handleVideoLoad = (index, data) => {
    setVideoStates(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        duration: data.duration,
        paused: true,
        showControls: false,
      },
    }));
  };

  const toggleVideoPlayPause = index => {
    setVideoStates(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        paused: !prev[index]?.paused,
        showControls: true,
      },
    }));
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <CustomImage source={Images.user} style={styles.avatar} />
      <View style={styles.headerText}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );

  const renderPostContent = () => {
    if (!content) return null;
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  };

  const renderMediaItem = (
    item,
    index,
    style,
    playButtonStyle,
    playIconStyle,
  ) => {
    const videoState = videoStates[index] || {
      paused: true,
      showControls: false,
    };

    if (item.type === 'video') {
      return (
        <Pressable
          key={index}
          style={style}
          onPress={() => handleMediaPress(index)}>
          <Video
            ref={ref => (videoRefs.current[index] = ref)}
            source={{uri: item.uri}}
            style={[style, {position: 'absolute'}]}
            // poster={item.thumbnail}
            paused={videoState.paused}
            resizeMode="cover"
            onLoad={data => handleVideoLoad(index, data)}
            controls={false}
            muted={true}
          />
          {/* {item.thumbnail && (
            <CustomImage
              source={{ uri: item.thumbnail }}
              style={[style, { position: 'absolute' }]}
            />
          )} */}
          <Pressable
            style={playButtonStyle}
            onPress={e => {
              e.stopPropagation();
              toggleVideoPlayPause(index);
            }}>
            <Text style={playIconStyle}>{videoState.paused ? '▶' : '⏸'}</Text>
          </Pressable>
        </Pressable>
      );
    }

    return (
      <Pressable
        key={index}
        style={style}
        onPress={() => handleMediaPress(index)}>
        <CustomImage
          source={{uri: item.uri}}
          style={[style, {position: 'absolute'}]}
        />
      </Pressable>
    );
  };

  const renderSingleMedia = (item, index) => {
    return renderMediaItem(
      item,
      index,
      styles.singleMediaContainer,
      styles.playButton,
      styles.playIcon,
    );
  };

  const renderSequentialMedia = () => {
    const firstMedia = media[0];
    const secondRowMedia = media.slice(1, 4);
    const remainingCount = Math.max(0, media.length - 4);

    return (
      <View style={styles.sequentialContainer}>
        {renderMediaItem(
          firstMedia,
          0,
          styles.firstMediaContainer,
          styles.playButton,
          styles.playIcon,
        )}

        {secondRowMedia.length > 0 && (
          <View style={styles.secondRow}>
            {secondRowMedia.map((item, index) => {
              const actualIndex = index + 1;
              const isLast =
                index === secondRowMedia.length - 1 && remainingCount > 0;

              return (
                <View key={actualIndex} style={styles.secondRowItem}>
                  {renderMediaItem(
                    item,
                    actualIndex,
                    styles.secondRowItemInner,
                    styles.playButtonSmall,
                    styles.playIconSmall,
                  )}
                  {isLast && (
                    <View style={styles.overlay}>
                      <Text style={styles.overlayText}>+{remainingCount}</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  };

  const renderMedia = () => {
    if (!media || media.length === 0) return null;

    if (media.length === 1) {
      return renderSingleMedia(media[0], 0);
    }

    return renderSequentialMedia();
  };

  const renderLikes = () => {
    const likeCount = likes.length;
    if (likeCount === 0) return null;
    return (
      <View style={styles.likeTextContainer}>
        <Icon
          name="heart"
          as={AntDesign}
          style={{fontSize: moderateScale(14), color: '#FF6B9D'}}
        />
        <Text style={styles.likeLabel}>
          {likes[0]?.username || 'Unknown'}
          {likeCount > 1 && (
            <Text style={styles.likeCount}>
              , {likeCount > 2 ? `${likes[1]?.username || 'Unknown'} ` : ''}
              {likeCount > 2
                ? `+${likeCount - 2}`
                : likes[1]?.username || 'Unknown'}
            </Text>
          )}
        </Text>
      </View>
    );
  };

  const renderComments = () => {
    const commentCount = comments.length;
    if (commentCount === 0) return null;

    return (
      <Pressable style={styles.commentsContainer} onPress={onComment}>
        <Text style={styles.likeLabel}>💬 {commentCount + ' '}Comment{commentCount > 1 && 's'}</Text>
      </Pressable>
    );
  };

  const renderCommentInput = () => (
    <View style={styles.commentInputContainer}>
      <CustomImage source={Images.user} style={styles.commentAvatar} />
      <TextInput
        style={styles.commentInput}
        placeholder="Write a comment..."
        placeholderTextColor={colors.lightGray}
        value={commentText}
        onChangeText={setCommentText}
        multiline
      />
    </View>
  );

  const renderFullscreenVideo = () => (
    <Modal
      visible={!!fullscreenVideo}
      transparent={false}
      animationType="fade"
      onRequestClose={() => setFullscreenVideo(null)}>
      <View style={styles.fullscreenContainer}>
        {fullscreenVideo && (
          <Video
            source={{uri: fullscreenVideo.uri}}
            style={styles.fullscreenVideo}
            controls={true}
            resizeMode="contain"
            paused={false}
            fullscreen={true}
            onEnd={() => setFullscreenVideo(null)}
          />
        )}
        <Pressable
          style={styles.fullscreenCloseButton}
          onPress={() => setFullscreenVideo(null)}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      </View>
    </Modal>
  );

  const renderGallery = () => (
    <Modal
      visible={galleryVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setGalleryVisible(false)}>
      <View style={styles.galleryContainer}>
        <Pressable
          style={styles.galleryBackdrop}
          onPress={() => setGalleryVisible(false)}
        />
        <SafeFlatList
          data={media}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={currentImageIndex}
          getItemLayout={(data, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
          renderItem={({item, index}) => {
            console.log('🚀 ~ item:', item);
            return (
              <View style={styles.galleryItemContainer}>
                {item?.type === 'image' ? (
                  <CustomImage
                    source={{uri: item.uri}}
                    style={styles.galleryImage}
                    resizeMode="contain"
                  />
                ) : (
                  <Video
                    source={{uri: item?.uri}} // your video link or require('path')
                    style={styles.backgroundVideo}
                    resizeMode="cover" // contain | stretch | cover
                    repeat // loops video
                    muted={false} // set true if you don't want sound
                    controls // show native controls (play/pause, seek bar)
                    paused={false} // set true if you want to start paused
                  />
                )}
              </View>
            );
          }}
          keyExtractor={(item, index) => `gallery_${item?.uri}_${index}`}
        />
        <Pressable
          style={styles.closeButton}
          onPress={() => setGalleryVisible(false)}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderPostContent()}
      {renderMedia()}
      <View style={styles.footer}>
        <View style={styles?.likeAndCommentConatiner}>
          {renderLikes()}
          {renderComments()}
        </View>
        {renderCommentInput()}
      </View>
      {renderGallery()}
      {renderFullscreenVideo()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(12),
  },
  headerText: {
    flex: 1,
  },
  username: {
    fontSize: moderateScale(15),
    fontFamily: fonts?.medium,
    color: colors.themeBlack,
    marginBottom: moderateScale(2),
  },
  timestamp: {
    fontSize: moderateScale(12),
    color: colors.themeBlack,
    fontFamily: fonts?.medium,
  },
  contentContainer: {
    paddingVertical: moderateScale(12),
  },
  content: {
    fontSize: moderateScale(14),
    color: colors.themeBlack,
    lineHeight: moderateScale(20),
    fontFamily: fonts?.regular,
  },
  singleMediaContainer: {
    width: '100%',
    height: moderateScale(300),
    position: 'relative',
  },
  singleMedia: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}],
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: 'rgba(105, 100, 103, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: colors.white,
    fontSize: moderateScale(20),
    marginLeft: moderateScale(3),
  },
  gridContainer: {},
  gridRow: {
    flexDirection: 'row',
    marginBottom: moderateScale(4),
  },
  gridItem: {
    flex: 1,
    marginHorizontal: moderateScale(2),
    height: moderateScale(120),
    position: 'relative',
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  gridMedia: {
    width: '100%',
    height: '100%',
  },
  sequentialContainer: {},
  firstMediaContainer: {
    width: '100%',
    height: moderateScale(250),
    position: 'relative',
    marginBottom: moderateScale(4),
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  firstMedia: {
    width: '100%',
    height: '100%',
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondRowItem: {
    flex: 1,
    marginHorizontal: moderateScale(1),
    height: moderateScale(80),
    position: 'relative',
    borderRadius: moderateScale(6),
    overflow: 'hidden',
  },
  secondRowMedia: {
    width: '100%',
    height: '100%',
  },
  secondRowItemInner: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  playButtonSmall: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -15}, {translateY: -15}],
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: 'rgba(105, 100, 103, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconSmall: {
    color: colors.gradientPrimary,
    fontSize: moderateScale(20),
    marginLeft: moderateScale(2),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: moderateScale(12),
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(12),
  },
  
  
  
  
  likeTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
  },
  likeLabel: {
    fontSize: moderateScale(14),
    color: colors.themeBlack,
    fontFamily: fonts?.regular,
  },
  likeCount: {
  fontSize: moderateScale(14),
    color: colors.themeBlack,
    fontFamily: fonts?.regular,
  },
  likeAndCommentConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(12),
  },
  commentsText: {
    fontSize: moderateScale(13),
    color: colors.lightGray,
    fontWeight: '500',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(24),
    paddingVertical: moderateScale(8),
  },
  commentAvatar: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    marginRight: moderateScale(8),
  },
  commentInput: {
    flex: 1,
    fontSize: moderateScale(14),
    color: colors.themeBlack,
    maxHeight: moderateScale(80),
    paddingVertical: 0,
  },
  sendButton: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
  },
  sendText: {
    fontSize: moderateScale(14),
    color: '#FF6B9D',
    fontWeight: '600',
  },
  galleryContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  galleryItemContainer: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  galleryImage: {
    width: screenWidth,
    height: screenHeight * 0.8,
  },
  closeButton: {
    position: 'absolute',
    top: moderateScale(50),
    right: moderateScale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: colors.themeBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenVideo: {
    width: screenWidth,
    height: screenHeight,
  },
  fullscreenCloseButton: {
    position: 'absolute',
    top: moderateScale(50),
    right: moderateScale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  backgroundVideo: {
    width: '100%',
    height: '100%', // adjust height for banner-style video
    backgroundColor: '#000',
  },
});

export default PostCard;
//  post={{
//               user: {
//                 avatar: 'https://example.com/avatar.jpg',
//                 username: 'John Doe',
//               },
//               content: 'This is a sample post content',
//               media: [
//                 {
//                   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
//                   type: 'image',
//                 },
//                 {
//                   uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
//                   type: 'video',
//                   // thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
//                 },
//                 {
//                   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
//                   type: 'image',
//                 },
//                 {
//                   uri: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F1oIrMoqckYTE96ekt5ECyT%2F51471e1e09c39541c1564bc164bd9b06%2Fdesktop-how-often-to-go-to-the-gym.jpg&w=3840&q=85',
//                   type: 'image',
//                 },
//                 {
//                   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
//                   type: 'image',
//                 },
//                 {
//                   uri: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F1oIrMoqckYTE96ekt5ECyT%2F51471e1e09c39541c1564bc164bd9b06%2Fdesktop-how-often-to-go-to-the-gym.jpg&w=3840&q=85',
//                   type: 'video',
//                 },
//               ],
//               likes: [
//                 {avatar: 'https://example.com/avatar1.jpg', username: 'You'},
//                 {avatar: 'https://example.com/avatar2.jpg', username: 'John'},
//                 {avatar: 'https://example.com/avatar1.jpg', username: 'User1'},
//                 {avatar: 'https://example.com/avatar2.jpg', username: 'User2'},
//               ],
//               comments: [
//                 {
//                   user: {
//                     avatar: 'https://example.com/avatar3.jpg',
//                     username: 'User3',
//                   },
//                   text: 'Nice post!',
//                 },
//               ],
//               timestamp: '2h ago',
//             }}
//             onComment={() => console.log('Comment Pressed')}
