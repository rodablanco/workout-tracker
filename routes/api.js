const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body).then((body) => {
    res.json(body);
  });
});

router.get("/api/workouts", ({ body }, res) => {
  Workout.find({}).then((data) => {
    res.json(data);
  })
    .catch(err => {
      console.log(err)
    })
  
});

//adding exercise
router.put("/api/workouts/:id", ({ params,body }, res) => {
  // Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
  Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
    .then(
      (data) => {
          console.log(data);
      res.json(data);
      })
    .catch(err => {
      res.json(err);
    });
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
