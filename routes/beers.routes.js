const router = require('express').Router();
const Beer = require('../models/Beer.models');
const mongoose = require('mongoose');

// POST

// deconstructing the beer model object that travels in the body

router.post('/beers', (req, res) => {
  const { image_url, name, tagline, first_brewed, description, attenuation_level, brewers_tips } = req.body;

  Beer.create({ image_url, name, tagline, first_brewed, description, attenuation_level, brewers_tips })
    .then((newBeer) => {
      res.json(newBeer);
    })
    .catch((err) => {
      res.json(err);
    });
});

// no need to deconstuct when you want to send the whole array

// router.post('/beers', (req, res) => {
//   const beersArray = req.body;

//   Beer.insertMany(beersArray)
//     .then((newBeers) => {
//       res.json(newBeers);
//     })
//     .catch((err) => {
//       res.json(newBeers);
//     });
// });

// GET

router.get('/beers', (req, res) => {
  Beer.find()
    .then((allBeers) => {
      res.json(allBeers);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;

// PUT
router.put('/beers/:id', (req, res) => {
  const { id } = req.params;
  const { image_url, name, tagline, first_brewed, description, attenuation_level, brewers_tips } = req.body;

  const trimmedId = id.trim();

  if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
    return res.status(400).json({ message: 'Invalid ObjectId format.' });
  }

  Beer.findByIdAndUpdate(trimmedId, { image_url, name, tagline, first_brewed, description, attenuation_level, brewers_tips }, { new: true })
    .then((updateBeer) => {
      console.log(updateBeer);
      res.json(updateBeer);
    })
    .catch((err) => {
      res.json(err);
    });
});
