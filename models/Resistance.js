const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Write name of exercise"
    },
    duration: {
        type: Number,
        required: "Please enter how long you have exercised for"
    },
    weight: {
        type: Number,
        required: "Please enter how much weight you used"
    },
    reps: {
        type: Number,
        required: "Please enter how many reps"
    },
    sets: {
        type: Number,
        required: "Please enter how many sets you did"
    }
})


















const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;