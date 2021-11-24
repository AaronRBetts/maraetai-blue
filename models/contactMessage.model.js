const mongoose = require('mongoose')

const ContactMessage = new mongoose.Schema({
    userName: { type: String, required: true },
    userContact: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    },
    {
        collection: 'contact-messages'
    })

    const model = mongoose.model('ContactMessage', ContactMessage)

    module.exports = model