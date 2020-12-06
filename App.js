import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import CurrentLocation from './Components/Location/location';
import Header from './src/components/header.js'
import DeMap from './src/map.js'
import Footer from './src/components/footer.js'


export default function App() {
  const [userLocation, setUserLocation] = useState({})
  return (
    
    <View style={styles.container}>
      {/* <Header /> */}
      <DeMap />
      <StatusBar style="auto" />
      <Footer />
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
