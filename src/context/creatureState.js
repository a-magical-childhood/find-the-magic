import React, { useReducer } from 'react';
import axios from 'axios';

import Context from './context.js';
import Reducer from './creatureReducer.js'

export default function CreatureState (props) {
  let initState = {
    creatures: [],
  }

  const [state, dispatch] = useReducer(Reducer, initState);

  const getDeCreatures = async () => {
    try{
      let res = await axios.get('https://heroku-creatures.herokuapp.com/api/v1/creatures/');
      let {data} = res;
      dispatch({ 
        type: "GET_CREATURES", 
        payload: data})
    } catch(e) {
      console.error('Those darn Tree Sprites are at it again. CreatureState.js getDeCreatures has an error of ', e);
    }
  }; 

  const getCreatureInfo = async(id) => {
    try{
      let rest = await axios.get('https://heroku-creatures.herokuapp.com/api/v1/creatures/');
       let {data} = res;
       dispatch({
         type: "GET_DESCRIPTION",
         payload: data
       })
    } catch(e) {
      console.error('A dragon ate all the descriptions. CreatureState.js getCreatureInfo has an error of ', e);
    }
  }

  return (
    <Context.Provider
    value={{
      creatures: state.creatures,
      getDeCreatures,
    }} >
      {props.children}
    </Context.Provider>
  )
}