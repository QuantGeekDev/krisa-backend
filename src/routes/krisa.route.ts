import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';

export class KrisaRoute implements Routes {
  public path = '/';
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.auth.signUp);
  }
}
