import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import { colors } from '../../theme/colors';
import CustomImage from '../atoms/CustomImage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const PostCard = ({
  post = {},
  onLike,
  onComment,
  onShare,
}) => {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [videoStates, setVideoStates] = useState({});
  const [galleryVideoStates, setGalleryVideoStates] = useState({});

  const {
    user = {},
    content = '',
    media = [],
    likes = [],
    comments = [],
    timestamp = '2h ago',
  } = post;

  const { avatar, username = 'Username' } = user;

  const handleVideoPlay = (index, isGallery = false) => {
    if (isGallery) {
      setGalleryVideoStates(prev => ({
        ...prev,
        [index]: { ...prev[index], paused: false, showControls: true }
      }));
    } else {
      setVideoStates(prev => ({
        ...prev,
        [index]: { ...prev[index], paused: false, showControls: true }
      }));
    }
  };

  const handleVideoPause = (index, isGallery = false) => {
    if (isGallery) {
      setGalleryVideoStates(prev => ({
        ...prev,
        [index]: { ...prev[index], paused: true, showControls: true }
      }));
    } else {
      setVideoStates(prev => ({
        ...prev,
        [index]: { ...prev[index], paused: true, showControls: true }
      }));
    }
  };

  const handleMediaPress = (index) => {
    setCurrentImageIndex(index);
    setGalleryVisible(true);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <CustomImage
        source={avatar ? { uri: avatar } : Images.logo}
        style={styles.avatar}
      />
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

  const renderSingleMedia = (item, index) => {
    const videoState = videoStates[index] || { paused: true, showControls: false };



    return (
      <Pressable
        key={index}
        style={styles.singleMediaContainer}
        onPress={() => handleMediaPress(index)}
      >
        <CustomImage
          source={{ uri: item.uri }}
          style={styles.singleMedia}
        />
      </Pressable>
    );
  };

  const renderGridMedia = () => {
    const displayMedia = media.slice(0, 4);
    const remainingCount = Math.max(0, media.length - 3);

    return (
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
          {displayMedia.slice(0, 2).map((item, index) => {
            const videoState = videoStates[index] || { paused: true, showControls: false };

            return (
              <Pressable
                key={index}
                style={styles.gridItem}
                onPress={() => handleMediaPress(index)}
              >
                { (
                  <CustomImage
                    source={{ uri: item.uri }}
                    style={styles.gridMedia}
                  />
                )}
                {item.type === 'video' && (
                  <View style={styles.playButtonSmall}>
                    <Text style={styles.playIconSmall}>▶</Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
        {displayMedia.length > 2 && (
          <View style={styles.gridRow}>
            {displayMedia.slice(2, 4).map((item, index) => {
              const actualIndex = index + 2;
              const isLast = actualIndex === 3 && remainingCount > 0;

              return (
                <Pressable
                  key={actualIndex}
                  style={styles.gridItem}
                  onPress={() => handleMediaPress(actualIndex)}
                >
                  { (
                    <CustomImage
                      source={{ uri: item.uri }}
                      style={styles.gridMedia}
                    />
                  )}
                  {item.type === 'video' && !isLast && (
                    <View style={styles.playButtonSmall}>
                      <Text style={styles.playIconSmall}>▶</Text>
                    </View>
                  )}
                  {isLast && (
                    <View style={styles.overlay}>
                      <Text style={styles.overlayText}>+{remainingCount}</Text>
                    </View>
                  )}
                </Pressable>
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

    return renderGridMedia();
  };

  const renderLikes = () => {
    const likeCount = likes.length;
    if (likeCount === 0) return null;

    const displayAvatars = likes.slice(0, 3);
    const isLikedByUser = likes.some(like => like.isCurrentUser);

    return (
      <View style={styles.likesContainer}>
        <View style={styles.likeAvatars}>
          {displayAvatars.map((like, index) => (
            <CustomImage
              key={index}
              source={like.avatar ? { uri: like.avatar } : Images.logo}
              style={[styles.likeAvatar, { marginLeft: index > 0 ? -8 : 0 }]}
            />
          ))}
        </View>
        <Text style={styles.likeText}>
          {isLikedByUser ? 'You' : likes[0]?.username}
          {likeCount > 1 && (
            <Text style={styles.likeCount}>
              {isLikedByUser && likeCount > 1 ? ', ' : ''}
              {!isLikedByUser && likeCount > 1 ? ` +${likeCount - 1}` : ''}
              {isLikedByUser && likeCount > 1 ? `+${likeCount - 1}` : ''}
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
        <Text style={styles.commentsText}>{commentCount} comments</Text>
      </Pressable>
    );
  };

  const renderCommentInput = () => (
    <View style={styles.commentInputContainer}>
      <TextInput
        style={styles.commentInput}
        placeholder="Write a comment..."
        placeholderTextColor={colors.lightGray}
        value={commentText}
        onChangeText={setCommentText}
        multiline
      />
      <Pressable
        style={styles.sendButton}
        onPress={() => {
          if (commentText.trim() && onComment) {
            onComment(commentText.trim());
            setCommentText('');
          }
        }}
      >
        <Text style={styles.sendText}>Send</Text>
      </Pressable>
    </View>
  );

  const renderGallery = () => (
    <Modal
      visible={galleryVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setGalleryVisible(false)}
    >
      <View style={styles.galleryContainer}>
        <Pressable
          style={styles.galleryBackdrop}
          onPress={() => setGalleryVisible(false)}
        />
        <FlatList
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
          renderItem={({ item, index }) => {
            const galleryVideoState = galleryVideoStates[index] || { paused: true, showControls: false };

            return (
              <View style={styles.galleryItemContainer}>
                { (
                  <CustomImage
                    source={{ uri: item.uri }}
                    style={styles.galleryImage}
                    resizeMode="contain"
                  />
                )}
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <Pressable
          style={styles.closeButton}
          onPress={() => setGalleryVisible(false)}
        >
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
        {renderLikes()}
        {renderComments()}
        {renderCommentInput()}
      </View>
      {renderGallery()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: moderateScale(4),
    borderRadius: moderateScale(12),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(16),
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
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: colors.themeBlack,
    marginBottom: moderateScale(2),
  },
  timestamp: {
    fontSize: moderateScale(12),
    color: colors.lightGray,
  },
  contentContainer: {
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(12),
  },
  content: {
    fontSize: moderateScale(14),
    color: colors.themeBlack,
    lineHeight: moderateScale(20),
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
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: colors.white,
    fontSize: moderateScale(20),
    marginLeft: moderateScale(3),
  },
  gridContainer: {
    padding: moderateScale(2),
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: moderateScale(2),
  },
  gridItem: {
    flex: 1,
    marginHorizontal: moderateScale(1),
    height: moderateScale(150),
    position: 'relative',
  },
  gridMedia: {
    width: '100%',
    height: '100%',
  },
  playButtonSmall: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconSmall: {
    color: colors.white,
    fontSize: moderateScale(12),
    marginLeft: moderateScale(2),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: colors.white,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  footer: {
    padding: moderateScale(16),
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  likeAvatars: {
    flexDirection: 'row',
    marginRight: moderateScale(8),
  },
  likeAvatar: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.white,
  },
  likeText: {
    fontSize: moderateScale(12),
    color: colors.themeBlack,
  },
  likeCount: {
    color: colors.lightGray,
  },
  commentsContainer: {
    marginBottom: moderateScale(12),
  },
  commentsText: {
    fontSize: moderateScale(12),
    color: colors.lightGray,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.lightGrayV2,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
  },
  commentInput: {
    flex: 1,
    fontSize: moderateScale(14),
    color: colors.themeBlack,
    maxHeight: moderateScale(80),
    marginRight: moderateScale(8),
  },
  sendButton: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
  },
  sendText: {
    fontSize: moderateScale(14),
    color: colors.primary,
    fontWeight: 'bold',
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
  galleryPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -35 }, { translateY: -35 }],
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryPlayIcon: {
    color: colors.white,
    fontSize: moderateScale(30),
    marginLeft: moderateScale(5),
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
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
});

export default PostCard;