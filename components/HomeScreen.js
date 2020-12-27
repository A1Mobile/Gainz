import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen(props) {

  function handleScan() {
    props.navigation.navigate('Scan');
  }

  function handleType() {
    props.navigation.navigate('Type');
  }
  
  return (
    <View style={styles.flexContainer}>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={() => handleScan()} >
          <Text style={{ color: "green" }}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleType()} >
          <Text style={{ color: "green" }}>Type</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={ { fontSize: 20, fontWeight: 'bold', paddingLeft: 40, paddingRight:40, paddingTop:100 } }>
          Simply scan YouTube QR code or type Embed ID to watch YouTube video!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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