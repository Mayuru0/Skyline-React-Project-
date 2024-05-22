import React from 'react'
import {Outlet} from 'react-router';

import VHeader from '../Components/VisitorComponennts/vHeader/Header';
import VFooter from '../Components/VisitorComponennts/vFooter/Footer';
import Dialogflow from '../Pages/Visitor/Chatbot/Dialogflow';




const VLayout = () => {
  return (
    <div>
       <VHeader/>
      <Outlet/>
      <Dialogflow />
      <VFooter/>
     

  
     
   

    </div>
  )
}

export default VLayout