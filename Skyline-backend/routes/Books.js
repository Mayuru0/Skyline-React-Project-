const express = require('express');
const router = express.Router();
let Book = require('../models/Book');



router.post('/add', async (req, res) => {
    try {
        const {
            from,
            to,
            flight,
            economyPrice,
            busineessPrice,
        } = req.body;

        const newbook = new Book({ // Corrected syntax
            from,
            to,
            flight,
            economyPrice,
            busineessPrice,
        });

        await newbook.save();
        res.json({ message: "Book Add Successful" }); // Response as JSON object
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Book Add");
    }
});




//Get all Flights

router.route("/").get((req, res) => {

    Book.find().then((Book) => {
        res.json(Book)
    }).catch((err) => {

          console.log(err);
          res.status(500).send('Error fetching Book: ' + err.message);
    })


})




//delete

router.route("/delete/:id").delete(async (req, res) => {
    let BookId = req.params.id;

    await Book.findByIdAndDelete(BookId)
    .then(() => {
        res.status(200).send({status:" Book Deleted" });
    }).catch(err => {
        console.error(err);
        res.status(500).send({status:" Error with delete Book",error: err.message});
    })
 

})   





//update Country


router.route("/update/:id").put(async (req, res) => {
    let BookId = req.params.id;
    const{
        from,
        to,
        flight,
        economyPrice,
        busineessPrice,
       
 
    } = req.body;
 
    const updateBook = {
        from,
        to,
        flight,
        economyPrice,
        busineessPrice,
       
    }
    const update = await Book.findByIdAndUpdate(BookId,updateBook)
     .then(() => {
         res.status(200).send({status:" Book Updated" })
     }).catch(err => {
      console.error(err);
      res.status(500).send({status:" Error Add Book ",error: err.message});
     })
  
 
 
 })




module.exports = router;