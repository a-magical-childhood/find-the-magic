import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


export default function DoMap(props){

  const userLocation = props.userLocation;
  console.log('*******************');
  console.log('MAPS.JS USERLOCATION', userLocation);
  const userRegion={
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  console.log('userRegion', userRegion);
  console.log('******************');



  return(
    <>
      <MapView
      region={userRegion}
      // onRegionChange={userRegion}
      />
    </>
  )
}