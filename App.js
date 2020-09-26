import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrentLocation from './Components/Location/location';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO MERMAIDS!</Text>
      < CurrentLocation />
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
