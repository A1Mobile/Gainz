import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import WatchScreen from './components/WatchScreen';
import TypeScreen from './components/TypeScreen';
import ScanScreen from './components/ScanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTintColor: "green",
              title: "Home",
            }}
          />
          <Stack.Screen
            name="WebView"
            component={WatchScreen}
            options={{
              headerTintColor: "green",
              title: "",
            }}
          />
          <Stack.Screen
            name="Type"
            component={TypeScreen}
            options={{
              headerTintColor: "green",
              title: "",
            }}
          />
          <Stack.Screen
            name="Scan"
            component={ScanScreen}
            options={{
              headerTintColor: "green",
              title: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}