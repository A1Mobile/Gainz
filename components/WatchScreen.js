import React from "react";
import {  View,  Text,  ActivityIndicator,  TouchableOpacity,  StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export default function WatchScreen(props) {

  function LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  return (
    <>
      <View style={styles.flexContainer}>
        <WebView 
          source={{ uri: props.route.params.videoURI }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
           />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Text style={{ color: "green" }}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
  },
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: "#d3d3d3",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});