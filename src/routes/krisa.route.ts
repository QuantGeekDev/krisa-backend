import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { KrisaController } from '@/controllers/krisa.controller';
import KrisaMongooseRepository from '@/repository/KrisaMongooseRepository';

export class KrisaRoute implements Routes {
  public path = '/krisas';
  public router = Router();
  public repository = new KrisaMongooseRepository();
  public krisa = new KrisaController(this.repository);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.krisa.getKrisa);
    this.router.get(`${this.path}/:id`, this.krisa.getKrisaById);
  }
}
