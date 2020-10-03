import React, {  useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';


export default function DoMap(){
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: null,
    zoomEnabled: true
  })
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      // (error) => this.setState({ error: error.messsage }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 }
    );
  })

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  return(
    <View style={styles.container}>
        

        <MapView
          style={styles.map}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.012,
          }}
        >
          <Marker coordinate={currentLocation} />
        </MapView>
      </View>


  )
}




