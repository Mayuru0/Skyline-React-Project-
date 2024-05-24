const express = require('express');
const router = express.Router();
let Tours = require('../models/Tour')


//add
router.post('/add', async (req, res) => {
    try {
        const {
            from,
            to,
            flight,
            departureDate,
            returnDate,
            tripType,
            passengers,
            economyPrice,
            businessPrice,
            description,
            photo
            
        } = req.body;

        const newTours = new Tours({ 
            from,
            to,
            flight,
            departureDate,
            returnDate,
            tripType,
            passengers,
            economyPrice,
            businessPrice,
            description,
            photo
        });

        await newTours.save();
        res.json({ message: "Tours Add Successful" }); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Tours Add");
    }
});














module.exports = router;