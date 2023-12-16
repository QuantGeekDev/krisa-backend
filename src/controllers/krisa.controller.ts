import { NextFunction, Request, Response } from 'express';
import { KrisaRepository } from './types';

export class KrisaController {
  constructor(public repository: KrisaRepository) {}
  public getKrisa = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const krisas = await this.repository.getKrisas();

      res.status(200).json({ krisas: krisas });
    } catch (error) {
      next(error);
    }
  };
}
