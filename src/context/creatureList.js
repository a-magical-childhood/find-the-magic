import React, { useContext, useEffect, useState} from 'react';
import {Image} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Marker } from 'react-native-maps';

import Context from './context.js';
import KidUser from '../../img/youAreHere.gif';
import Tail from '../../img/tail.png'
import creatureReducer from './creatureReducer.js';


export default function CreatureList() {
  const CreatureContext = useContext(Context);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: null
  })

  useEffect(() => {
    CreatureContext.getDeCreatures();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000}
    )
  }, []);

  return (
    <>
      <Marker coordinate={currentLocation}>
        <Image source={KidUser} style={{width:45, height: 75}}></Image>
      </Marker>
      {(CreatureContext.creature && CreatureContext.creature.length) ? CreatureContext.creature.map((creature, idx) => (
        <Marker
        key={creatureReducer.idx}
        coordinate={{latitude: creature.cords.latitude, longitude: creature.cords.longitude}}> 
        <Image source={Tail} style={{width: 25, height: 45}} />
      </Marker>
      ))
    : null}
      
    </>
  )

}
