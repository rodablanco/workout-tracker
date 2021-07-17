const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

WorkoutSchema.pre('save', function(next) {
  // do stuff
    this.exercises.forEach(({ duration }) => {
        this.totalDuration += duration
console.log(this.totalDuration)
    })

  next();
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
