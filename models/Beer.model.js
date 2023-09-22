const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    image_url: {
      type: String,
     
    },
    name: {
      type: String,
    },
    tagline:{
        type:String
    },
    first_brewed:{
        type:String
    },
    description:{
        type:String
    },
    attenuation_level:{
        type:String
    },
    brewers_tips:{
        type:String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
