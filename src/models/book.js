import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookModel = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  authorId: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Book', bookModel);
