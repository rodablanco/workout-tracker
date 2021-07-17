const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body).then((body) => {
    res.json(body);
  });
});

router.get("/api/workouts", ({ body }, res) => {
  Workout.find().then((data) => {
    res.json(data);
  });
});

router.put("/api/workouts/:id", ({ params,body }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }).then(
      (data) => {
          console.log(data);
      res.json(data);
    }
  );
});

module.exports = router;
