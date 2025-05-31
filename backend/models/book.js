const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 0
    },
    available: {
        type: Number,
        default: 1,
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);