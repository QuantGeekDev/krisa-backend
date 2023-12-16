import { KrisaRepository } from '@/controllers/types';
import Krisa from '@/models/krisa.model';
import { KrisaFromDb } from '@/types';

class KrisaMongooseRepository implements KrisaRepository {
  getKrisas = async (): Promise<KrisaFromDb[]> => {
    const krisas = (await Krisa.find({}).lean()) as KrisaFromDb[];
    return krisas;
  };
}

export default KrisaMongooseRepository;