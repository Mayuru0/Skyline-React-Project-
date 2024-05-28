const mongoose = require('mongoose');
const {roles}=require('../utils/constants');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date, 
        required: true
    },
    gender: {
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
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
  
         role: {
            type: String,
            enum: ["admin", "passenger"],
            default: roles.visitor,
            required: true
        }
    
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
