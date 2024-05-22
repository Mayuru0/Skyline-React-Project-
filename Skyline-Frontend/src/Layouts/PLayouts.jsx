import React from 'react'
import {Outlet} from 'react-router';
import Header from '../Components/PassengerComponents/Header/Header'
import Footer from '../Components/PassengerComponents/Footer/Footer'




const PLayouts = () => {
  return (
    <div>
      
       <Header/>
      <Outlet/>
      <Footer />
     

  
     
   

    </div>
  )
}

export default PLayouts