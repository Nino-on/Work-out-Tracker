const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercise_db = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "What kind of work out"
          },
          name: {
            type: String,
            trim: true,
            required: "Name of workout"
          },
          duration: {
            type: Number,
            required: "What is the duration "
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );

  exercise_db.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", exercise_db);
  
  module.exports = Workout;