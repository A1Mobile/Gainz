import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    props.navigation.navigate('WebView', {
        videoURI: data,
    });
  };

  if (hasPermission === null) {
    return <Text style={{ color: 'white'}}>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingTop:100 }}>No Access to camera</Text>;
  }
  return (

    <View style={styles.container}>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && 
        <View style={styles.tabBarContainer}>
            <TouchableOpacity onPress={() => setScanned(false)} >
                <Text style={{ color: "red" }}>Tap to Scan</Text>
            </TouchableOpacity>
        </View>
        }
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
