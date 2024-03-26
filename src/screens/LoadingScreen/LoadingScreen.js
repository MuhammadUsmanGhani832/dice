import React from 'react'
import { StatusBar, Text, Platform, View } from "react-native";

const LoadingScreen = () => {

    console.log(Platform);
  return (
    <>
      <StatusBar
        backgroundColor="#61dafb" // Sets the background color to light blue
        barStyle="dark-content" // Sets the status bar icons and text to dark
        animated={true} // Enables animated transitions
        hidden={false} // Shows the status bar
        showHideTransition="fade" // Sets the transition effect to fade
      />

      <View style={{ alignItems: "center" }}>
        <Text>OS: {Platform.OS}</Text>
        <Text>Version: {Platform.Version}</Text>
      </View>
    </>
  );
}

export default LoadingScreen;