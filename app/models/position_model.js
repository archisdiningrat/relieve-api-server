const { Schema, model } = require('mongoose');
const uuid = require('uuid');

const PositionSchema = new Schema({
    uuid: {
        type: String,
        default: uuid.v4
    },
    user_id: {
        type: String,
        required: true
    },
    geograph: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    status: {
        type: Number,
        enum: [10, 20, 30],
        required: true
    }
}, { versionKey: false });

module.exports = model('Position', PositionSchema, 'positions');
