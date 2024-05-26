import React from 'react'
import {Outlet} from 'react-router';

import VHeader from '../Components/PassengerComponennts/Header/Header';
import VFooter from '../Components/PassengerComponennts/Footer/Footer';
import Dialogflow from '../Pages/Passenger/Chatbot/Dialogflow';




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