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

//Get all Feedback 

router.route("/").get((req, res) => {

    Tours.find().then((Tours) => {
        res.json(Tours)
    }).catch((err) => {

          console.log(err);
          res.status(500).send('Error fetching Tours: ' + err.message);
    })


})


//delete

router.route("/delete/:id").delete(async (req, res) => {
    let ToursId = req.params.id;

    await Tours.findByIdAndDelete(ToursId)
    .then(() => {
        res.status(200).send({status:" Tours Deleted" });
    }).catch(err => {
        console.error(err);
        res.status(500).send({status:" Error with delete Tours",error: err.message});
    })
 

}) 


//update feedback


router.route("/update/:id").put(async (req, res) => {
    let ToursId = req.params.id;
    const{
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
 
    const updateTours = {
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
       
    }
    const update = await Tours.findByIdAndUpdate(ToursId,updateTours)
     .then(() => {
         res.status(200).send({status:" Tours Updated" })
     }).catch(err => {
      console.error(err);
      res.status(500).send({status:" Error with Tours ",error: err.message});
     })
  
 
 
 })






module.exports = router;