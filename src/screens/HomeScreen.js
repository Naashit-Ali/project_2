import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import PostCard from '../components/molecules/PostCard';
import MainHeader from '../components/organisms/MainHeader';
import CustomHeading from '../components/molecules/CustomHeading';
import TextPill from '../components/organisms/TextPill';
import SearchBar from '../components/molecules/SearchBar';
import WorkoutCard from '../components/organisms/WorkoutCard';
const { width, height } = Dimensions.get("window");


const HomeScreen = () => {
  const [selectedPill, setSelectedPill] = React.useState(null);
  return (
     <View style={styles.container}>
      {/* <Video
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // your video link or require('path')
        style={styles.backgroundVideo}
        resizeMode="cover" // contain | stretch | cover
        repeat // loops video
        muted={false} // set true if you don’t want sound
        controls // show native controls (play/pause, seek bar)
        paused={false} // set true if you want to start paused
      /> */}

      {/* <PostCard
        post={{
          user: {
            avatar: "https://example.com/avatar.jpg",
            username: "John Doe",
            },
            content: "This is a sample post content",
            media: [
              { uri: "https://example.com/image1.jpg", type: "image" },
              { uri: "https://example.com/video1.mp4", type: "video" },
              ],
              likes: [
                { avatar: "https://example.com/avatar1.jpg", username: "User1" },
                { avatar: "https://example.com/avatar2.jpg", username: "User2" },
                ],
                comments: [
                  { user: { avatar: "https://example.com/avatar3.jpg", username: "User3" }, text: "Nice post!" },
                  ],
                  timestamp: "2h ago",
                  }}
                  onComment={() => console.log("Comment Pressed")}
                  /> */}
                  
                  <MainHeader />
      {/* <CustomHeading
      title={ 'Home'}
      />

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center',
        gap: 10,
        width: '100%',
       }}
      >
        {[...Array(10).keys()].map((item, index) => (
          <TextPill
            key={index}
            title={`Pill ${index + 1}`}
            isSelected={selectedPill == index}
            id={index}
            onPress={() => setSelectedPill(index)}
          />
        ))}
      </ScrollView>
      <SearchBar/>
      <WorkoutCard/> */}
      <PostCard
        post={{
          user: {
            avatar: 'https://example.com/avatar.jpg',
            username: 'John Doe',
          },
          content: 'This is a sample post content',
          media: [
            {
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
              type: 'image',
            },
            {
              uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
              type: 'video',
              // thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
            },
            {
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
              type: 'image',
            },
            {
              uri: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F1oIrMoqckYTE96ekt5ECyT%2F51471e1e09c39541c1564bc164bd9b06%2Fdesktop-how-often-to-go-to-the-gym.jpg&w=3840&q=85',
              type: 'image',
            },
            {
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby7FxM4LwRdj1cafv66KUGmCVWIAuORa3Lbd-5AW8buWQyt_x53icbLNWq3ERq0Glz58&usqp=CAU',
              type: 'image',
            },
            {
              uri: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F1oIrMoqckYTE96ekt5ECyT%2F51471e1e09c39541c1564bc164bd9b06%2Fdesktop-how-often-to-go-to-the-gym.jpg&w=3840&q=85',
              type: 'video',
            },
          ],
          likes: [
            {avatar: 'https://example.com/avatar1.jpg', username: 'You'},
            {avatar: 'https://example.com/avatar2.jpg', username: 'John'},
            {avatar: 'https://example.com/avatar1.jpg', username: 'User1'},
            {avatar: 'https://example.com/avatar2.jpg', username: 'User2'},
          ],
          comments: [
            {
              user: {
                avatar: 'https://example.com/avatar3.jpg',
                username: 'User3',
              },
              text: 'Nice post!',
            },
          ],
          timestamp: '2h ago',
        }}
        onComment={() => console.log('Comment Pressed')}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    // backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  backgroundVideo: {
    width: '100%',
    height: 200, // adjust height for banner-style video
    backgroundColor: "#000",
  },
});

export default HomeScreen