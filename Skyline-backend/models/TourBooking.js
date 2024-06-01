const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TourBookingSchema = new Schema({
    userId: {
        type: String,
      },
      tourId: {
        type: String,
      },
      from:{
        type: String,
        required: true,
      },
      to:{
        type: String,
        required: true,
      },
      tripType:{
        type: String,
        required: true,
      },
      flight:{
        type: String,
        required: true,
      },
      title:{
        type: Number,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      passportNo: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      passenger: {
        type: Number,
        required: true,
      },
      departureDate: {
        type: String,
        required: true,
      },
      returnDate: {
        type: String,
        required: true,
      },
      classtype: {
        type: String,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
      status:{
        type: String,
        default: "Waiting",
      },
      payment_status:{
        type: String,
        default: "Not Paid",
      },
   
  
});

const Tourbook = mongoose.model('TourBooking', TourBookingSchema);

module.exports = Tourbook;
