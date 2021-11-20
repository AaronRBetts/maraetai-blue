const mongoose = require('mongoose')

const ContactMessage = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    },
    {
        collection: 'contact-messages'
    })

    const model = mongoose.model('ContactMessage', ContactMessage)

    module.exports = model