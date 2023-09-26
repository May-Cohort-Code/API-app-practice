const { Schema, model } = require('mongoose');

const beerSchema = new Schema(
  {
    image_url: {
      type: String,
      required: [true],
    },
    name: { type: String, required: [true] },
    tagline: { type: String, required: [true] },
    first_brewed: { type: String, required: [true] },
    description: { type: String, required: [true] },
    attenuation_level: { type: Number, required: [true] },
    brewers_tips: { type: String, required: [true] },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Beer = model('Beer', beerSchema);

module.exports = Beer;
