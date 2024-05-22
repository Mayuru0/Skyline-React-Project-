const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const nodemailer = require('nodemailer');
const {roles}=require('../utils/constants');

let register = require('../models/register');
//const  Passenger = require('../models/passenger');

require('dotenv').config();


//middleware for authenticating role
const authenticateRole = (role) => (req, res, next) => {
  // Check if user is authenticated and has the required role
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized: Invalid token');
    }

    const userRole = decoded.role;
    if (userRole !== role) {
      return res.status(403).send('Forbidden: Insufficient role');
    }

    next();
  });
};



// Route for registering a new user
router.post('/add', async (req, res) => {
  try {
    let role = roles.passenger; // Default role is 'passenger'
    if (req.body.email === 'admin@gmail.com') {
      role = roles.admin; // If email is admin, set role to 'admin'
    }
    const newUser = new register({ ...req.body, role });
    await newUser.save();
    res.status(200).send('User added successfully');
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).send('Error registering user: ' + err.message);
  }
});


















/*
//Create new Passenger

router.post('/add', async (req, res) => {


    try{
        const {
             firstName,
             lastName,
             dateOfBirth,
             gender,
             country,
             address,
             passportNo,
             phone,
             email,
             password,
             confirmPassword
        } =req.body;

    // Check if email already exists
    const existingUser = await register.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password and confirmPassword
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedConfirmedPassword = await bcrypt.hash(confirmPassword, salt); 
    
 const newPassenger=new register(
    {
        firstName,
        lastName,
        dateOfBirth,
        gender,
        country,
        address,
        passportNo,
        phone,
        email,
        password:hashedPassword,
        confirmPassword:hashedConfirmedPassword
    }
 ); await newPassenger.save();
   await sendApprovalEmail(email);
// Generate JWT token
const token = jwt.sign({ email: email }, process.env.KEY, { expiresIn: '1h' });



res.cookie('jwt', token, {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000
});

res.json("Registration Successful");
} catch (err) {
console.error(err);
res.status(500).send("Error registering Passenger");
}
});
*/
 


//Get Passenger

router.route("/").get((req, res) => {

    register.find().then((passengers) => {
        res.json(passengers)
    }).catch((err) => {

          console.log(err);
          res.status(500).send('Error fetching users: ' + err.message);
    })


})



//update passenger


router.route("/update/:id").put(async (req, res) => {
   let passengerId = req.params.id;
   const{
    firstName,
    lastName,
    dateOfBirth,
    gender,
    country,
    address,
    passportNo,
    phone,
    email,
    password,
    confirmPassword

   } = req.body;

   const updatePassenger = {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    country,
    address,
    passportNo,
    phone,
    email,
    password,
    confirmPassword
   }
   const update = await register.findByIdAndUpdate(passengerId,updatePassenger)
    .then(() => {
        res.status(200).send({status:" Passenger Updated" })
    }).catch(err => {
     console.error(err);
     res.status(500).send({status:" Error with updating passenger",error: err.message});
    })
 


})


//Dlete passenger

router.route("/delete/:id").delete(async (req, res) => {
    let passengerId = req.params.id;

    await register.findByIdAndDelete(passengerId)
    .then(() => {
        res.status(200).send({status:" Passenger Deleted" });
    }).catch(err => {
        console.error(err);
        res.status(500).send({status:" Error with delete passenger",error: err.message});
    })
 

})


// get one passenger

router.route("/get/:id").get(async (req, res) =>{
    let passengerId = req.params.id;
  const passenger=  await register.findById(passengerId)
    .then((register) => {
        res.status(200).send({status:" Passenger fetched" ,register})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status:" Error with fetching passenger",error: err.message});
    });
})


// Route to login a Passenger 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const passenger = await register.findOne({ email: email });
    if (!passenger) {
      return res.status(400).json({ message: 'passenger is not registered' });
    }

    // Compare password
    if (password !== passenger.password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Determine user role
    let role = roles.passenger;
    if (req.body.email === 'admin@gmail.com') {
      role = roles.admin;
    }

    // Generate JWT token with role information
    const token = jwt.sign({ email: passenger.email, role: role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token as a cookie
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 });

    return res.json({ status: true, message: "Login successfully", role: role });
   
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});




















/*
// Route to login a Passenger 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const passenger = await register.findOne({ email: email });
  if (!passenger) {
    return res.status(400).json({ message: 'User is not registered' });
  }

  const validPassword = await bcrypt.compare(password, passenger.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ email: passenger.email }, process.env.KEY, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "Login successfully" });
});
 */


  // Function to send approval email
  async function sendApprovalEmail(email) {
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
        subject: 'Approval Email', // Subject line
        text: `Your account has been approved! . 
              your email is: ${email} 
              you can now log in and access your account`
      });
  
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending approval email:', error);
    }
  }
  
  

  




module.exports = router;