import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";



const Stack = createStackNavigator();

function MyStack (){
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

export default function App(){
  return (
    <NavigationContainer><MyStack/></NavigationContainer>
  )
}