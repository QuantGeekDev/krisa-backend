import { KrisaRepository } from '@/controllers/types';
import Krisa from '@/models/krisa.model';
import { KrisaFromDb } from '@/types';

class KrisaMongooseRepository implements KrisaRepository {
  getKrisas = async (): Promise<KrisaFromDb[]> => {
    const krisas = await Krisa.find({}).lean().sort({ krisaNumber: 'asc' });
    return krisas as KrisaFromDb[];
  };
  getKrisaById = async (id: string): Promise<KrisaFromDb> => {
    const krisa = await Krisa.findOne({ krisaNumber: id }).lean();
    return krisa as KrisaFromDb;
  };
}

export default KrisaMongooseRepository;
