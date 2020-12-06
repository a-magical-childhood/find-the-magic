import React from 'react';
import { Header } from 'react-native-elements';

export default function header() {
  return (
      <Header
          centerComponent={{ text: 'Mystical Creatures', style: {color: 'white', fontWeight: 'bold', } }}
          // rightComponent={<WhaleLogo />}
          containerStyle={{
              backgroundColor: 'rgba(220, 62, 230, 90)',
              opacity: .75,
              zIndex: 2,
              position: 'absolute', 
              top: 0,
              width: '100%'
          }}

      />
  )
}

