import { NextFunction, Request, Response } from 'express';
import { KrisaRepository } from './types';

export class KrisaController {
  constructor(public repository: KrisaRepository) {}
  public getKrisa = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const krisas = await this.repository.getKrisas;
      res.status(200).json({ krisas });
    } catch (error) {
      next(error);
    }
  };
}
