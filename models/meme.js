const mongoose = require('mongoose')

const post = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Post', post)