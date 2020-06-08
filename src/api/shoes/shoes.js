// Database collection
import mongoose, { Schema } from 'mongoose';

const ShoesSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verifiedEmail: {
    type: Boolean,
    default: false,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  isFemaleShoe: {
    type: Boolean,
    default: false,
  },
  isTrailShoe: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    required: true,
  },
  kilometers: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: String,
  images: [String],
  available: {
    type: Boolean,
    default: true,
  },
  ships: {
    type: Boolean,
    required: true,
  },
  intShipping: Boolean,
  paidShipping: Boolean,
});

export default mongoose.models.shoes || mongoose.model('shoes', ShoesSchema);
