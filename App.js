import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import CurrentLocation from './Components/Location/location';
import DeMap from './map.js'


export default function App() {
  const [userLocation, setUserLocation] = useState({})
  return (
    
    <View style={styles.container}>
      <Text>HELLO MERMAIDS!</Text>
      <DeMap />
      <StatusBar style="auto" />
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
});
