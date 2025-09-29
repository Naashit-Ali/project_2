import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import PostCard from '../components/molecules/PostCard';
import MainHeader from '../components/organisms/MainHeader';
import CustomHeading from '../components/molecules/CustomHeading';
import TextPill from '../components/organisms/TextPill';
import SearchBar from '../components/molecules/SearchBar';
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
      <CustomHeading
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
  },
  backgroundVideo: {
    width: '100%',
    height: 200, // adjust height for banner-style video
    backgroundColor: "#000",
  },
});

export default HomeScreen