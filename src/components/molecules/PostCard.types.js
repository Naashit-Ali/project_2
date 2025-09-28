export const PostCardPropTypes = {
  post: {
    user: {
      avatar: '',
      username: '',
    },
    content: '',
    media: [
      {
        uri: '',
        type: '', // 'image' | 'video'
      },
    ],
    likes: [
      {
        avatar: '',
        username: '',
        isCurrentUser: false,
      },
    ],
    comments: [
      {
        id: '',
        user: {
          avatar: '',
          username: '',
        },
        text: '',
        timestamp: '',
      },
    ],
    timestamp: '',
  },
  onLike: () => {},
  onComment: () => {},
  onShare: () => {},
};

export const defaultPost = {
  user: {
    avatar: null,
    username: 'User',
  },
  content: '',
  media: [],
  likes: [],
  comments: [],
  timestamp: 'now',
};