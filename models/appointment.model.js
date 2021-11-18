const mongoose = require('mongoose')

const Appointment = new mongoose.Schema({
    date: { type: Date, required: true },
    service: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    userAddress: { type: String, required: true },
    userNotes: { type: String },
    createdAt: { type: Date, default: Date.now },
    },
    {
        collection: 'appointment-data'
    })

    const model = mongoose.model('AppointmentData', Appointment)

    module.exports = model