import { model, Schema, Document } from 'mongoose';

const KrisaSchema: Schema = new Schema({
  krisaNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Krisa = model('Krisa', KrisaSchema, 'krisas');

export default Krisa;
