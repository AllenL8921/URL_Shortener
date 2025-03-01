import mongoose from 'mongoose';
import shortId from 'shortid';

// Schema

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  numClicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Use export default for ES module syntax
export default mongoose.model('ShortUrl', shortUrlSchema);
