const mongoose = require('mongoose')

const Appointment = new mongoose.Schema({
    date: { type: Date, required: true },
    assigned: { type: String, default: 'unassigned' },
    service: { type: String, required: true },
    location: { type: String, required: true },
    size: { type: String, required: true },
    total: { type: Number, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    userAddress: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userNotes: { type: String },
    createdAt: { type: Date, default: Date.now },
    },
    {
        collection: 'appointment-data'
    })

    const model = mongoose.model('AppointmentData', Appointment)

    module.exports = model