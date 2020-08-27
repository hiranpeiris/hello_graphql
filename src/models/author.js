import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const authorModel = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  publications: {
    type: Number,
    required: true
  } 
});

export default mongoose.model('Author', authorModel);
