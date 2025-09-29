import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
const { width, height } = Dimensions.get("window");


const HomeScreen = () => {
  return (
     <View style={styles.container}>
      <Video
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // your video link or require('path')
        style={styles.backgroundVideo}
        resizeMode="cover" // contain | stretch | cover
        repeat // loops video
        muted={false} // set true if you don’t want sound
        controls // show native controls (play/pause, seek bar)
        paused={false} // set true if you want to start paused
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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