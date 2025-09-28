import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PostCard from './PostCard';

const PostCardExample = () => {
  const examplePosts = [
    {
      user: {
        avatar: 'https://example.com/avatar1.jpg',
        username: 'john_doe',
      },
      content: '30 Days fitness challenge accepted! 💪',
      media: [
        {
          uri: 'https://example.com/workout.jpg',
          type: 'image',
        },
      ],
      likes: [
        {
          avatar: 'https://example.com/avatar2.jpg',
          username: 'jane_smith',
          isCurrentUser: true,
        },
        {
          avatar: 'https://example.com/avatar3.jpg',
          username: 'mike_wilson',
          isCurrentUser: false,
        },
      ],
      comments: [
        {
          id: '1',
          user: {
            avatar: 'https://example.com/avatar4.jpg',
            username: 'sarah_jones',
          },
          text: 'Great job! Keep it up!',
          timestamp: '1h ago',
        },
      ],
      timestamp: '2h ago',
    },
    {
      user: {
        avatar: 'https://example.com/avatar5.jpg',
        username: 'travel_blogger',
      },
      content: 'Amazing sunset from my trip to Bali! 🌅',
      media: [
        {
          uri: 'https://example.com/sunset1.jpg',
          type: 'image',
        },
        {
          uri: 'https://example.com/sunset2.jpg',
          type: 'image',
        },
        {
          uri: 'https://example.com/sunset3.jpg',
          type: 'image',
        },
        {
          uri: 'https://example.com/sunset4.jpg',
          type: 'image',
        },
        {
          uri: 'https://example.com/sunset5.jpg',
          type: 'image',
        },
      ],
      likes: [
        {
          avatar: 'https://example.com/avatar6.jpg',
          username: 'adventure_seeker',
          isCurrentUser: false,
        },
      ],
      comments: [],
      timestamp: '4h ago',
    },
    {
      user: {
        avatar: 'https://example.com/avatar7.jpg',
        username: 'chef_master',
      },
      content: 'Cooking tutorial: How to make the perfect pasta! 🍝',
      media: [
        {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          type: 'video',
          thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      ],
      likes: [
        {
          avatar: 'https://example.com/avatar8.jpg',
          username: 'food_lover',
          isCurrentUser: false,
        },
        {
          avatar: 'https://example.com/avatar9.jpg',
          username: 'cooking_fan',
          isCurrentUser: true,
        },
      ],
      comments: [
        {
          id: '2',
          user: {
            avatar: 'https://example.com/avatar10.jpg',
            username: 'kitchen_novice',
          },
          text: 'This looks delicious! Will definitely try this recipe.',
          timestamp: '30m ago',
        },
      ],
      timestamp: '6h ago',
    },
    {
      user: {
        avatar: 'https://example.com/avatar11.jpg',
        username: 'mixed_media_creator',
      },
      content: 'My weekend adventure - hiking and camping! 🏔️⛺',
      media: [
        {
          uri: 'https://example.com/mountain1.jpg',
          type: 'image',
        },
        {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          type: 'video',
          thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
        {
          uri: 'https://example.com/camping1.jpg',
          type: 'image',
        },
        {
          uri: 'https://example.com/sunset_timelapse.mp4',
          type: 'video',
          thumbnail: 'https://example.com/sunset_thumb.jpg',
        },
        {
          uri: 'https://example.com/campfire.jpg',
          type: 'image',
        },
      ],
      likes: [
        {
          avatar: 'https://example.com/avatar12.jpg',
          username: 'nature_lover',
          isCurrentUser: false,
        },
        {
          avatar: 'https://example.com/avatar13.jpg',
          username: 'adventure_buddy',
          isCurrentUser: true,
        },
      ],
      comments: [
        {
          id: '3',
          user: {
            avatar: 'https://example.com/avatar14.jpg',
            username: 'hiking_enthusiast',
          },
          text: 'What an amazing view! Which trail did you take?',
          timestamp: '2h ago',
        },
      ],
      timestamp: '1d ago',
    },
  ];

  const handleLike = (postIndex) => {
    console.log('Like pressed for post:', postIndex);
  };

  const handleComment = (comment, postIndex) => {
    console.log('Comment submitted:', comment, 'for post:', postIndex);
  };

  const handleShare = (postIndex) => {
    console.log('Share pressed for post:', postIndex);
  };

  return (
    <ScrollView style={styles.container}>
      {examplePosts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
          onLike={() => handleLike(index)}
          onComment={(comment) => handleComment(comment, index)}
          onShare={() => handleShare(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
});

export default PostCardExample;