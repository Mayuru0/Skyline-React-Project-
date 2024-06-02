const express = require('express');
const router = express.Router();
let TourBook = require('../models/TourBooking');
const nodemailer = require('nodemailer');


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
            Additionalpassengers,
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
            Additionalpassengers,
            passengers,
            departureDate,
            returnDate,
            classtype,
            totalPrice,
            status,
            payment_status,
        });
       
        await newbook.save();
        await sendApprovalEmail(email,firstName,departureDate,to,from);
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





// Get Single Booking by ID

router.route("/get/:id").get(async (req, res) => {
    const id = req.params.id;
  
    try {
      const book = await TourBook.findById(id);
      if (!book) {
        return res.status(404).json({
          success: false,
          message: "book not found",
        });
      }
  
     // console.log("Fetched Tour:", Tour);
  
      res.status(200).json({
        success: true,
        message: "Book found",
        data: book,
      });
    } catch (error) {
      console.error("Error fetching Book:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch Book",
      });
    }
  });






 // Function to send approval email
 async function sendApprovalEmail(email,firstName,departureDate,to,from) {
    try {
      // Create a transporter object using SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // false for other ports
        auth: {
          user: 'skylinecompany42@gmail.com', // your email
          pass: 'krbz qlpb ctfr eukn ' // your password
        }
      });
  
      // send mail with defined transport object and capture the result
      let info = await transporter.sendMail({
        from: 'skylinecompany42@gmail.com', // sender address
        to: email, // list of receivers
        subject: ' Skyline Tour Booking Successful!', // Subject line
        text: `Dear ${firstName},

        Thank you for booking the Skyline Tour  From ${from}  to ${to} on the ${departureDate}. 
        Your reservation has been successfully received and is now being processed.
        
        We will send you a confirmation email shortly. If you have any questions, please contact us.
        

        Best regards,
        Skyline`
        
        
      });
  
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending approval email:', error);
    }
  }


module.exports = router;