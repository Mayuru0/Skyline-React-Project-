const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TourSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departureDate: {
        type: Date,
        required: true,
    },
    returnDate: {
        type: Date,
        required: true,
    },
    tripType:{
        type: String,
        required: true
   },
   passengers:{
       type: String,
       required: true
   },
   chooseClass:{
       type: String,
       required: true
   },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    } ,
    photo: {
        type: String,
        required: true,
      }
    
  
});

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
