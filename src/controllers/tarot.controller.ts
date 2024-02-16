import { NextFunction, Request, Response } from 'express';
import TarotMongooseRepository from '@/repository/TarotMongooseRepository';

export class TarotController {
  constructor(public repository: TarotMongooseRepository) {}
  public getTarot = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tarot = await this.repository.getTarot();

      res.status(200).json({ tarot: tarot });
    } catch (error) {
      next(error);
    }
  };
}
