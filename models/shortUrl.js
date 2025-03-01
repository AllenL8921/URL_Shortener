const mongoose = require('mongoose')
const shortId = require('shortid')

// Schema

const shortUrlSchema = new mongoose.Schema({
    full:{
        type: String,
        required: true,
    },
    short:{
        type: String,
        required: true,
        default: shortId.generate
    },
    numClicks:{
        type: Number,
        required: true,
        default: 0,
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)