// Database collection
import mongoose, { Schema } from 'mongoose';

export const RequestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: String,
  country: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
}, { timestamps })

export default mongoose.models.requests || mongoose.model('requests', RequestSchema);
