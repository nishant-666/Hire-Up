import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import './App.css'
const LoaderExampleText = () => (
  <div>
    
      <Dimmer active inverted>
        <Loader inverted style={{fontFamily:'Baloo Tamma 2',fontSize:20}}>Loading Jobs for you! Please wait..</Loader>
      </Dimmer>

   
  </div>
)

export default LoaderExampleText