const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PassengerSchema = new Schema({
  title: {
    type: String,
    //required: true,
  },
  firstName: {
    type: String,
    //required: true,
  },
  lastName: {
    type: String,
    //required: true,
  },
  passportNo: {
    type: String,
    //required: true,
  },
  phone: {
    type: String,
    //required: true,
  },
});

const TourBookingSchema = new Schema({
  userId: {
    type: String,
  },
  tourId: {
    type: String,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  tripType: {
    type: String,
    required: true,
  },
  flight: {
    type: String,
    required: true,
  },
  title: {
    type: String,
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
    type: Date,
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
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  Additionalpassengers: {
    type: [PassengerSchema],
    required: true,
  },
  passengers: {
    type : String,
    required: true,
  },
  departureDate: {
    type: Date,
    //required: true,
  },
  returnDate: {
    type: Date,
    //required: true,
  },
  classtype: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Waiting",
  },
  payment_status: {
    type: String,
    default: "Not Paid",
  },
});

const Tourbook = mongoose.model('TourBooking', TourBookingSchema);

module.exports = Tourbook;
