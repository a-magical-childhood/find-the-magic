import React, { useContext, useEffect, useState} from 'react';

import axios from 'axios';
import { Container, Form, Item, Input, Label, Picker } from 'native-base'
export default function CreatureForm (){
  const [creatureName, setCreatureName] = useState('');
  const [latitude, setLatitude]= useState(0);
  const [longitude, setLongitude] = useState(0);
  const [description, setDescription] = useState('');
  const [explorer, setExplorer] = useState('');

  async function sendSighting (){
    axios.put(''), {
      creature_name: creatureName,
      latitude: latitude,
      longitude: longitude,
      description: description,
      explorer: explorer
    }

  } 

  const handleLat = (e) => {
    setLatitude(e.target.value);
  }
  const handleLong = (e) => {
    setLongitude(e.target.value);
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleExplorer = (e) => {
    setExplorer(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('inside handle submit in form.js');
    console.log('object to post {');
    console.log('creature_name: ', creatureName);
    console.log('lat:', latitude);
    console.log('long: ', longitude);
    console.log('description: ', description);
    console.log('explorer: ', explorer);
    console.log('}');
    
    
    /// this gets called and changes something to trigger useeffect to call the put function. 
  }

  const handleCreature = (e) => {
    setCreatureName(e.target.value)
    console.log( 'inside handle Creature... CreatureName: ', creatureName)
  }

  return(
    <>
      <Form>
        <Picker 
          mode="dropdown"
          // when line 61 is comment out it gets stuck in a loop when commented in it breaks because ICON is an unknown variable
          iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Mystical Creature"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={setCreatureName()}
                onValueChange={handleCreature}
              >
            <Picker.Item label="Dragon" value="key0" />
            <Picker.Item label="Fairy" value="key1" />
            <Picker.Item label="Mermaid" value="key2" />
            <Picker.Item label="Unicorn" value="key3" />
            <Picker.Item label="Sasquatch" value="key4" />
        </Picker>
        <Item floatingLabel>
          <Label>What exactly did you see?!</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Explorer</Label>
          <Input />
        </Item>
      </Form>
   
    </>
  )

}