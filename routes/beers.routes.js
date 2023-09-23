const router = require('express').Router();
const Beer = require('../models/Beer.models');

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
