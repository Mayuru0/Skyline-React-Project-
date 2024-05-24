import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


//visitor routes
import VLayout from "../Layouts/VLayout";
import Home from "../Pages/Visitor/Home";

import Expreience from "../Pages/Visitor/Expreience";
import Help from "../Pages/Visitor/Help";
import About from "../Pages/Visitor/About";
import Login from "../Pages/Visitor/Login";
import Registration from "../Pages/Visitor/Registration";
import FlightList from "../Pages/Visitor/FlightList";
import Booking from "../Pages/Visitor/Booking/booking";


//Passenger routes
import PLayouts from "../Layouts/PLayouts";
import PHome from "../Pages/Passenger/PHome";
import PBook from "../Pages/Passenger/Booking/PBook";
import PFlightList from "../Pages/Passenger/PFlightList";
import PExpreience from "../Pages/Passenger/PExpreience";
import PHelp from "../Pages/Passenger/PHelp";
import UserProfile from "../Pages/Passenger/UserProfile";
import PAbout from "../Pages/Passenger/PAbout";


//admin routes
import DashBoard from "../Pages/Admin/DashBoard";
import ManageAirports from "../Pages/Admin/ManageAirports";
import ManageFlight from "../Pages/Admin/ManageFlight";
import ManageBooking from "../Pages/Admin/ManageBooking/ManageBooking";
import UserFeedback from "../Pages/Admin/UserFeedback";
import ManageStaff from "../Pages/Admin/ManageStaff";
import Adminprofile from "../Pages/Admin/Adminprofile";

import ALayout from"../Layouts/ALayout";
import ManageCountries from "../Pages/Admin/ManageCountries";
import RePassengers from "../Pages/Admin/RePassengers";
import AdminRegistration from "../Pages/Admin/AdminRegistration";
import ManageAirplane from "../Pages/Admin/ManageAriplanes/ManageAirplane";
import AddTour from "../Pages/Admin/TourManagement/addTour";









const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VLayout/>}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Booking/>} />
          <Route path="/flightlist" element={<FlightList />} />
          <Route path="/expreience" element={<Expreience />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          
          
      
        </Route>

          <Route path="/Passenger" element={<PLayouts/>}>
          <Route path="/Passenger" element={<Navigate to="phome" />} />
          <Route path="/Passenger/phome" element={<PHome />} />
          <Route path="/Passenger/Pbook" element={<PBook />} />
          <Route path="/Passenger/Pflightlist" element={<PFlightList />} />
          <Route path="/Passenger/Pexpreience" element={<PExpreience />} />
          <Route path="/Passenger/Phelp" element={<PHelp/>} />
          <Route path="/Passenger/UserProfile" element={<UserProfile/>} />
          <Route path="/Passenger/Pabout" element={<PAbout/>} />
          


        </Route>
       
  
        <Route path="/admin" element={<ALayout/>} >  
          <Route path="/admin" element={<Navigate to ='admin/dashboard' />} />
         <Route path="/admin/dashboard" element={<DashBoard />} />
         <Route path="/admin/countries" element={<ManageCountries />} />
        <Route path="/admin/manageairports" element={<ManageAirports />} />
        <Route path="/admin/manageflight" element={<ManageFlight />} />
        <Route path="/admin/managebooking" element={<ManageBooking />} />
        <Route path="/admin/userfeedback" element={<UserFeedback/>} />
        <Route path="/admin/managestaf" element={<ManageStaff />} />
        <Route path="/admin/profile" element={<Adminprofile />} />
        <Route path="/admin/repassenger" element={<RePassengers/>} />
        <Route path="/admin/registration" element={<AdminRegistration/>} />
        <Route path="/admin/manageairplane" element={<ManageAirplane/>} />
        <Route path="/admin/addTour" element={<AddTour/>} />

                    
          
        </Route>
  
      </Routes>
    </div>
  );
};

export default Routers;
