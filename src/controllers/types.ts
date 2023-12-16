import { KrisaFromDb } from '@/types';

export interface KrisaRepository {
  getKrisas: () => Promise<KrisaFromDb[]>;
}
