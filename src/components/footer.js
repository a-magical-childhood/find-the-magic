import React, {useState} from 'react';
import { Footer, Button, Text, Content} from 'native-base';
import {Overlay} from 'react-native-elements';
import Form from './form';

export default function DeFooter() {
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible);
  }


  return (
    <>
      <Content />
      <Footer >
        <Button 
        style={{backgroundColor: 'rgba(220, 62, 230, 90)'}}
        onPress={toggleOverlay}
        >
          <Text>
            Spotted A Magical Creature?
          </Text>

          <Overlay 
              isVisible={visible} 
              onBackdropPress={toggleOverlay} 
              style={{
                padding: 10, 
                textAlign: 'center' 
                }}
              >
                <Form />
            </Overlay>

        </Button>
      </Footer>
    </>
  )
}