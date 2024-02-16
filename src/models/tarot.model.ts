import { model, Schema } from 'mongoose';

const TarotSchema: Schema = new Schema({
  tarotNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Tarot = model('Tarot', TarotSchema, 'tarot');

export default Tarot;
