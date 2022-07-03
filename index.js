const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user.model');
const Appointment = require('./models/appointment.model');
const ContactMessage = require('./models/contactMessage.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const bodyParser = require('body-parser');
const stripe = require("stripe")(process.env.STRIPE_SECRET)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require('cors');    
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));
app.use(express.json())

mongoose.connect(process.env.LOGINMONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

app.post('/api/register',cors(),  async (req,res) => {
    const { name, email, phone, address, password, password2 } = req.body

    var response = {
        success: false, 
        error: '', 
        redirect: ''
    }

    if (password !== password2) {
        response = {error: 'Passwords do not match' }
        return res.json(response)
    } 

    if (password.length < 6) {
        response = {error: 'Password must be atleast 6 characters' }
        return res.json(response)
    }

    const pass = await bcrypt.hash(password, 10)
    try {
        await User.create({
            name: name,
            email: email,
            phone: phone,
            address: address,
            password: pass
        })
        response = { success: true, redirect: '/login' }
    } catch (err) {
        response = { error: 'Email is already registered' }
    }
    res.json(response)
})

app.put('/api/update',cors(),  async (req,res) => {
    const { name, email, phone, address } = req.body
    var conditions = { email: email }

    try {
        await User.updateOne(conditions, {$set: {
            name: name,
            phone: phone,
            address: address,
        }})
        response = { 
            success: true, redirect: '/profile' 
        }
    } catch (err) {
        response = { error: err }
    }
    res.json(response)
})

app.post('/api/change-password',cors(),  (req,res) => {
    const { token } = req.body

    const user = jwt.verify(token, process.env.TOKEN_SECRET)
})

app.post('/api/login',cors(),  async (req,res) => {
    const { username, password } = req.body

    const user = await User.findOne({
        email: req.body.email, 
    })

    if (await bcrypt.compare(password, user.password)) {

        const token = jwt.sign({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
        }, process.env.TOKEN_SECRET)

        return res.json({ status: 'ok', user: token, redirect: '/' })
    }
    res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/contact',cors(),  async (req,res) => {
    const { from, contact, message } = req.body

    var response = {
        success: false, 
    }

    try {
        await ContactMessage.create({
            userName: from,
            userContact: contact,
            message: message
        })
        response = { success: true, redirect: '/' }
    } catch (err) {
        console.log(err)
    }
    return res.json(response)
})

app.post('/api/book',cors(),  async (req,res) => {
    const { 
        date,
        service,
        size,
        total,
        location,
        userName,
        userEmail,
        userPhone,
        userAddress,
        userNotes,
    } = req.body

    var response = {
        success: false, 
    }

    try {
        await Appointment.create({
            date: new Date(date),
            service: service,
            size: size,
            total: total,
            location: location,
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userAddress: userAddress,
            completed: false,
            userNotes: userNotes,
        })
        response = { success: true }
    } catch (err) {
        console.log(err)
    }
    return res.json(response)
})

app.post('/api/payment', /*ensureAuth,*/cors(), async (req, res) => {
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "NZD",
            description: "Water Delivery",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (err) {
        console.log("Error", err);
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

app.post('/api/bookings', /*ensureAuth,*/ cors(), async (req,res) => {
    const { token } = req.body

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        // console.log(user)
        // if (user.name === 'Admin') {
        //     const appointments = await Appointment.find()
        // } else {
        // }
        const appointments = await Appointment.find({ userEmail: user.email }).sort({date: -1})
        console.log(appointments)
        console.log(user)
        // appointments = appointments.filter(function (appt){
        //     return appt.name === user.name
        // })
        res.json(appointments)
    } catch(err) {
        res.json({error: err})        
    }

    // try {
    //     const appointments = await Appointment.find({ userEmail: user.email })
    // } catch {
    //     console.log(err)
    // }
})

app.post('/api/home', /*ensureAuth,*/cors(),  async (req,res) => {
    const { token } = req.body

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET)
        res.json(user)
    } catch(err) {
        res.json({error: err})
    }
})

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server started`)
})