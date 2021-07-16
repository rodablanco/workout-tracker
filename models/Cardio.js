const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema= new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter type of cardio"
    },
    duration: {
        type: Number,
        required: "How long did you exercise?"
    },
    distance: {
        type: Number,
        required: "Enter a distance"
    },

})

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;