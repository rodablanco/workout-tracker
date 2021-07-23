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
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ _id: -1 })
    .limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
  })
})
module.exports = router;
