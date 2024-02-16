import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import TarotMongooseRepository from '@/repository/TarotMongooseRepository';
import { TarotController } from '@/controllers/tarot.controller';

export class TarotRoute implements Routes {
  public path = '/tarot';
  public router = Router();
  public repository = new TarotMongooseRepository();
  public tarot = new TarotController(this.repository);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.tarot.getTarot);
  }
}
