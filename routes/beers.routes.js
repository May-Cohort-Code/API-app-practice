const router = require('express').Router();
const Beer = require('../models/Beer.models');

// POST
router.post('/beers', (req, res) => {
  // deconstructing the beer model object that travels in the body

  const { image_url, name, tagline, first_brewed, description, attenuation_level, brewers_tips } = req.body;

  Beer.create({ image_url, name, tagline, first_brewed, description, attenuation_level, brewers_tips })
    .then((newBeer) => {
      res.json({ newBeer });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
