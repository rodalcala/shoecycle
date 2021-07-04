// Database main collection
import mongoose, { Schema } from 'mongoose';

import { RequestSchema as Requests } from './requests.schema';

const ShoesSchema = new Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
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
      default: false,
    },
    ships: {
      type: Boolean,
      required: true,
    },
    intShipping: Boolean,
    paidShipping: Boolean,
    requests: {
      type: [Requests],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.shoes || mongoose.model('shoes', ShoesSchema);
