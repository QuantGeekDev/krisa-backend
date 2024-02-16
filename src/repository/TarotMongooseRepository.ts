import { TarotFromDb } from '@/types';
import Tarot from '@/models/tarot.model';

class TarotMongooseRepository {
  getTarot = async (): Promise<TarotFromDb[]> => {
    const tarot = await Tarot.find({}).lean().sort({ krisaNumber: 'asc' });
    return tarot as TarotFromDb[];
  };
  getKrisaById = async (id: string): Promise<TarotFromDb> => {
    const tarot = await Tarot.findOne({ krisaNumber: id }).lean();
    return tarot as TarotFromDb;
  };
}

export default TarotMongooseRepository;
