const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    maxcount:{
        type: Number,
        required: true,
    },
    roomnumber:{
        type: Number,
        required: false,
    },
    rentperday:{
        type: Number,
        required: true,
    },
    imageurls:[],
    currentbookings:[],
    type:{
        type: String,
        required: false,
    },
    description: {

        type: String,Number,
    },
    

}, {
    timestamps: true,

})

const roomModel= mongoose.model('rooms', roomSchema)

module.exports = roomModel