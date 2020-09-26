import React, {useState, useEffect} from 'react';

// import {StatusBar} from 'expo-status-bar';
import { Text, View} from 'react-native';
import Map from './map/map'

// import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
// import { disableExpoCliLogging } from 'expo/build/logs/Logs';


export default function FindLocation() {
  const [location, setLocation] = useState({});
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();

  useEffect( () => {
    async function getPermissions() {
      let { status } = await Location.requestPermissionsAsync();
        if ( status == 'granted') {
          let currentLocation = await Location.getCurrentPositionAsync({});
              setLocation(currentLocation.coords);
              setUserLat(currentLocation.coords.latitude);
              setUserLong(currentLocation.coords.longitude);
        }
    }
    getPermissions();
  },);

  return(
    <View>
      <Map userLocation={location} />
    </View>
  )
} 