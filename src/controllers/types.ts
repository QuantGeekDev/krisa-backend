import { KrisaFromDb } from '@/types';

export interface KrisaRepository {
  getKrisas: () => Promise<KrisaFromDb[]>;
  getKrisaById: (id: string) => Promise<KrisaFromDb>;
}
