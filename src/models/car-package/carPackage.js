const mongoose = require('mongoose');

// Define the schema
const carPackageSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarCity',
    required: true
},
  title: {
    type: String,
    required: true
  },
  carprice: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    trim: true,
},
  description: {
    type: String,
    required: true
  },
  // carImage:{
  //   type:String,
  //   required: true
  // },
  map: {
    type: String,
    required: true
  },
  inclusion: {
    type: String,  // Array of strings for inclusion items
    required: true
  },
  exclusion: {
    type: String,  // Array of strings for exclusion items
    required: true
  },
  readbook: {
    type: String,  // Array of strings for exclusion items
    required: true
  }
});
carPackageSchema.virtual('pageUrl').get(function () {
  return `${this.url}-Car-package`;
});


// Create the model
const CarPackage =mongoose.models.CarPackage||mongoose.model('CarPackage', carPackageSchema);

module.exports = CarPackage;
