import React from 'react'
import { StatusBar, Text, Platform, View, Image, StyleSheet, Button } from "react-native";

const LoadingScreen = () => {

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
        hidden={false}
        showHideTransition="fade"
      />
      <View>
        <Image
          source={require("../../assets/images/dices 1.png")}
          style={styles.image}
        />
        <Text style={styles.title}>DICE GAME</Text>
        <Button style={styles.btn} title='play Now'></Button>
      </View>
    </>
  );
} 

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 300,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    alignSelf: "center",marginTop:90
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 40,
  },
  btn: {
    alignSelf: "center",
    width: 100,
  },
});

export default LoadingScreen;