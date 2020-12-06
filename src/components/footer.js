import React from 'react';
import { Footer, Button, Text, Content} from 'native-base';

export default function DeFooter() {
  return (
    <>
      <Content />
      <Footer >
        <Button style={{backgroundColor: 'rgba(220, 62, 230, 90)'}}>
          <Text>
            Spotted A Magical Creature?
          </Text>
        </Button>
      </Footer>
    </>
  )
}