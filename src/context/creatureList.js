import React, { useContext, useEffect, useState} from 'react';
import {Image} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Marker } from 'react-native-maps';

import Context from './context.js';
import KidUser from '../../img/explorer.png';
import Tail from '../../img/mermaid.png'
import Fairy from '../../img/fairy.png'
import Dragon from '../../img/dragon.png'
import creatureReducer from './creatureReducer.js';


export default function CreatureList() {
  const CreatureContext = useContext(Context);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: null
  })

  let creatureImage = Tail;

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

  function whichCreature(obj){
   const { creature_name} = obj
   console.log('CREATURE NAME', creature_name);

    switch (creature_name) {
      case 'dragon':
        creatureImage = Dragon;
        break;
      case 'fairy':
        creatureImage = Fairy;
        break;
      default: 
        creatureImage = Tail;
        break;
    }
  }



  return (
    <>
      <Marker coordinate={currentLocation}>
        <Image source={KidUser} style={{width:45, height: 45}}></Image>
      </Marker>
   
      {(CreatureContext.creatures && CreatureContext.creatures.length) ? CreatureContext.creatures.map((creature, idx) => (



        console.log('******'),
        console.log('creature insdie creaturelist.js', creature),
        whichCreature(creature),
        <Marker
        key={creature.id}
        coordinate={{latitude: creature.latitude, longitude: creature.longitude}}> 
         
        <Image source={creatureImage} style={{width: 25, height: 45}} />
      </Marker>
      ))
    : null}
      
    </>
  )

}
