const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Appointment = require('./models/appointment.model')
const ContactMessage = require('./models/contactMessage.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const path = require('path');

require('dotenv').config();

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.LOGINMONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

app.post('/api/register', async (req,res) => {
    const { name, email, password, password2 } = req.body

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
            password: pass
        })
        response = { success: true, redirect: '/login' }
    } catch (err) {
        response = { error: 'Email is already registered' }
    }
    res.json(response)
})

app.post('/api/change-password', (req,res) => {
    const { token } = req.body

    const user = jwt.verify(token, process.env.TOKEN_SECRET)
})

app.post('/api/login', async (req,res) => {
    const { username, password } = req.body

    const user = await User.findOne({
        email: req.body.email, 
    })

    if (await bcrypt.compare(password, user.password)) {

        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, process.env.TOKEN_SECRET)

        return res.json({ status: 'ok', user: token, redirect: '/' })
    }
    res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/contact', async (req,res) => {
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

app.post('/api/book', async (req,res) => {
    const { 
        date,
        service,
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
            date: date,
            service: service,
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userAddress: userAddress,
            userNotes: userNotes,
        })
        response = { success: true }
    } catch (err) {
        console.log(err)
    }
    return res.json(response)
})

app.post('/api/bookings', /*ensureAuth,*/ async (req,res) => {
    const { token } = req.body

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        // console.log(user)
        // if (user.name === 'Admin') {
        //     const appointments = await Appointment.find()
        // } else {
        // }
        const appointments = await Appointment.find({ userEmail: user.email })
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

app.post('/api/home', /*ensureAuth,*/ async (req,res) => {
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