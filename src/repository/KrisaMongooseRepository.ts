import { KrisaRepository } from '@/controllers/types';
import Krisa from '@/models/krisa.model';
import { KrisaFromDb } from '@/types';

class KrisaMongooseRepository implements KrisaRepository {
  getKrisas = async (): Promise<KrisaFromDb[]> => {
    debugger;
    const krisas = await Krisa.find({}).lean();
    debugger;
    return krisas as KrisaFromDb[];
  };
}

export default KrisaMongooseRepository;
