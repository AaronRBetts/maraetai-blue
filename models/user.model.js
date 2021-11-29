const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    },
    {
        collection: 'user-data'
    })

    const model = mongoose.model('UserData', User)

    module.exports = model