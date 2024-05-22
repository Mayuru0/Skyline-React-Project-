const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    flight: {
        type: String, 
        required: true
    },
    economyPrice : {
        type: String,
        required: true,
    },
    busineessPrice: {
        type: String,
        required: true,
    },
   
  
});

const book = mongoose.model('book', BookSchema);

module.exports = book;
