import mongoose, { Schema } from 'mongoose';

const packagePriceSchema = new Schema({
  addguest: {
    type: String,
  },
  singleRoom: {
    type: Number,
    required: true,
  },
  twinSharingRoom: {
    type: Number,
    required: true,
  },
  tripleSharingRoom: {
    type: Number,
    required: true,
  },
  quadSharingRoom: {
    type: Number,
    required: true,
  },
  infantSharingRoom: {
    type: Number,
    required: true,
  },
  childUnderFive: {
    type: Number,
    required: true,
  },
  childOverFive: {
    type: Number,
    required: true,
  },
  misc: {
    type: Number,
    required: true,
  },
  diskHike: {
    type: Number,
    required: true,
  },
  gst: {
    type: Number,
    required: true,
  },
  markup: {
    type: Number,
    required: true,
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

// Virtual field to calculate display price
// packagePriceSchema.virtual('displayPrice').get(function() {
  // Calculate base price
  // const basePrice = this.twinSharingRoom + this.misc;

  // Calculate markup amount
  // const markupAmount = (basePrice * this.markup) / 100;

  // Calculate price with markup
  // const priceWithMarkup = basePrice + markupAmount;

  // Calculate discount amount
  // const discountAmount = (priceWithMarkup * Math.abs(this.diskHike)) / 100;

  // Apply discount or add extra charge
  // const grandTotal = this.diskHike < 0
  //   ? priceWithMarkup - discountAmount
  //   : priceWithMarkup + discountAmount;

  // Calculate GST amount
  // const gstAmount = (grandTotal * this.gst) / 100;

  // Final displayed price after adding GST
  // (grandTotal + gstAmount) / 2
//   return "hello2";
// });
// Virtual field to calculate display price
// packagePriceSchema.virtual('withoutDiscount').get(function() {
    // Calculate base price
    // const basePrice = this.twinSharingRoom + this.misc;
  
    // Calculate markup amount
    // const markupAmount = (basePrice * this.markup) / 100;
  
    // Calculate price with markup
    // const priceWithMarkup = basePrice + markupAmount;
  
  //   return ("hello1")
  // });

const PackagePrice = mongoose.models.PackagePrice || mongoose.model('PackagePrice', packagePriceSchema);

export default PackagePrice;
