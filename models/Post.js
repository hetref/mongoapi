const mongoose = require('mongoose');

const PostScema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostScema);