import React, {  useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';


export default function DoMap(){
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: null
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




// export default function DoMap(){

//   const {userLocation} = useContext(SettingsContext)

//   console.log('MAP.JS userLocation', userLocation)

//   let latitude = 37.7882;
//   let longitude = -122.4324;

  
//   useEffect(() => {
//    latitude = userLocation.latitude;
//    longitude = userLocation.longitude;
//   }, [userLocation])
  
//   const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//   });

//   return(
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         showsUserLocation={true}
//         loadingEnabled={true}
//         region={{
//           latitude: latitude,
//           longitude: longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//        >
//         {/* <Marker coordinate={userLocation} /> */}
//         </MapView>
//     </View>
//   )
// }
