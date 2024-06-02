const express = require('express');
const router = express.Router();
let TourBook = require('../models/TourBooking');



router.post('/add', async (req, res) => {
    try {
        const {
            userId,
            tourId,
            from,
            to,
            tripType,
            flight,
            title,
            firstName,
            lastName,
            dateOfBirth,
            country,
            address,
            passportNo,
            email,
            phone,
            passengers,
            departureDate,
            returnDate,
            classtype,
            totalPrice,
            status,
            payment_status,
           
        } = req.body;

        const newbook = new TourBook({ // Corrected syntax
            userId,
            tourId,
            from,
            to,
            tripType,
            flight,
            title,
            firstName,
            lastName,
            dateOfBirth,
            country,
            address,
            passportNo,
            email,
            phone,
            passengers,
            departureDate,
            returnDate,
            classtype,
            totalPrice,
            status,
            payment_status,
        });

        await newbook.save();
        res.json({ message: "Booking  Successful" }); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Booking ");
    }
});




//Get all Flights

router.route("/").get((req, res) => {

    TourBook.find().then((tour) => {
        res.json(tour)
    }).catch((err) => {

          console.log(err);
          res.status(500).send('Error fetching tour: ' + err.message);
    })


})




//delete

router.route("/delete/:id").delete(async (req, res) => {
    let BookId = req.params.id;

    await TourBook.findByIdAndDelete(BookId)
    .then(() => {
        res.status(200).send({status:" Book Deleted" });
    }).catch(err => {
        console.error(err);
        res.status(500).send({status:" Error with delete Book",error: err.message});
    })
 

})   





//update Country


router.route("/update/:id").put(async (req, res) => {
    let TourBookId = req.params.id;
    const{
        userId,
        tourId,
        from,
        to,
        tripType,
        flight,
        title,
        firstName,
        lastName,
        dateOfBirth,
        country,
        address,
        passportNo,
        email,
        phone,
        passengers,
        classtype,
        totalPrice,
        status,
        payment_status,
       
 
    } = req.body;
 
    const updateBook = {
             userId,
            tourId,
            from,
            to,
            tripType,
            flight,
            title,
            firstName,
            lastName,
            dateOfBirth,
            country,
            address,
            passportNo,
            email,
            phone,
            passengers,
            classtype,
            totalPrice,
            status,
            payment_status,
       
    }
    const update = await TourBook.findByIdAndUpdate(TourBookId,updateBook)
     .then(() => {
         res.status(200).send({status:" Book Updated" })
     }).catch(err => {
      console.error(err);
      res.status(500).send({status:" Error Add Book ",error: err.message});
     })
  
 
 
 })




module.exports = router;