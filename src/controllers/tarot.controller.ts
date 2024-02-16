import { NextFunction, Request, Response } from 'express';
import { KrisaRepository } from './types';

export class TarotController {
  constructor(public repository: KrisaRepository) {}
  public getKrisa = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const krisas = await this.repository.getKrisas();

      res.status(200).json({ krisas: krisas });
    } catch (error) {
      next(error);
    }
  };
  public getKrisaById = async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    try {
      const krisa = await this.repository.getKrisaById(params.id);

      res.status(200).json({ krisa });
    } catch (error) {
      next(error);
    }
  };
}
