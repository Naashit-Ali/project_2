# PostCard Component

A comprehensive React Native component for displaying social media-style posts with image and video support.

## Features

- ✅ User header with avatar, username, and timestamp
- ✅ Post text/caption
- ✅ Dynamic media grid (1, 2-4, 4+ items)
- ✅ Video playback with react-native-video
- ✅ Fullscreen gallery/carousel viewer
- ✅ Like count with user avatars
- ✅ Comments section with input
- ✅ Responsive design

## Installation

Make sure you have `react-native-video` installed:

```bash
npm install react-native-video --legacy-peer-deps
```

For iOS, you may need to run:
```bash
cd ios && pod install
```

## Usage

```javascript
import PostCard from './src/components/molecules/PostCard';

const MyComponent = () => {
  const post = {
    user: {
      avatar: 'https://example.com/avatar.jpg',
      username: 'john_doe',
    },
    content: 'Check out this amazing video!',
    media: [
      {
        uri: 'https://example.com/video.mp4',
        type: 'video',
        thumbnail: 'https://example.com/thumbnail.jpg', // Optional
      },
      {
        uri: 'https://example.com/image.jpg',
        type: 'image',
      },
    ],
    likes: [
      {
        avatar: 'https://example.com/user2.jpg',
        username: 'jane_smith',
        isCurrentUser: true,
      },
    ],
    comments: [
      {
        id: '1',
        user: {
          avatar: 'https://example.com/user3.jpg',
          username: 'mike_wilson',
        },
        text: 'Great post!',
        timestamp: '2h ago',
      },
    ],
    timestamp: '4h ago',
  };

  return (
    <PostCard
      post={post}
      onLike={() => console.log('Liked')}
      onComment={(comment) => console.log('Comment:', comment)}
      onShare={() => console.log('Shared')}
    />
  );
};
```

## Props

### `post` (object)
The main post data object.

#### `post.user` (object)
- `avatar` (string, optional): User avatar URL
- `username` (string): User's display name

#### `post.content` (string, optional)
The text content/caption of the post.

#### `post.media` (array, optional)
Array of media items.

Each media item should have:
- `uri` (string): Media URL
- `type` (string): Either 'image' or 'video'
- `thumbnail` (string, optional): Thumbnail URL for videos

#### `post.likes` (array, optional)
Array of like objects.

Each like should have:
- `avatar` (string, optional): User avatar URL
- `username` (string): User's display name
- `isCurrentUser` (boolean): Whether this is the current user's like

#### `post.comments` (array, optional)
Array of comment objects.

Each comment should have:
- `id` (string): Unique comment ID
- `user` (object): User object with `avatar` and `username`
- `text` (string): Comment text
- `timestamp` (string): Comment timestamp

#### `post.timestamp` (string)
When the post was created.

### Callback Props

- `onLike` (function, optional): Called when like button is pressed
- `onComment` (function, optional): Called when comment is submitted
- `onShare` (function, optional): Called when share button is pressed

## Media Grid Behavior

- **1 media item**: Displays full-width/large
- **2-4 media items**: Shows in a 2x2 grid layout
- **4+ media items**: Shows first 3 items + overlay with "+X more" count

## Video Features

- **Play button overlay**: Shows on video thumbnails
- **Inline playback**: Videos play within the post
- **Gallery playback**: Full controls in fullscreen mode
- **Auto-pause**: Videos pause when scrolled out of view
- **Thumbnail support**: Optional poster/thumbnail for videos

## Example

See `PostCard.example.js` for comprehensive usage examples including:
- Single image posts
- Multi-image grid posts
- Video posts
- Mixed media posts (images + videos)

## Styling

The component uses the app's existing color scheme and sizing from:
- `src/theme/colors.js`
- `react-native-size-matters` for responsive sizing

## Dependencies

- `react-native-video`: For video playback
- `react-native-size-matters`: For responsive sizing
- Custom components: `CustomImage`
- Theme: App color scheme

## Notes

- Videos in grid view show as thumbnails (paused)
- Only single videos auto-play inline
- Gallery mode supports full video controls
- Component follows existing app patterns and conventions